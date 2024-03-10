let sourceSet = new Set();
let audioCtx = null;
try {
  if ("function" == typeof wx.createWebAudioContext && wx.canIUse("createWebAudioContext")) {
    audioCtx = wx.createWebAudioContext()
  }
} catch (e) {
  getApp().globalData.innerMode = true;
  wx.setStorageSync("innerMode", true);
  console.log("init webAudio error", e)
}
const loadToneAudiosBuffers = async (toneAudioIndex) => {
  const toneAudios = getApp().globalData.toneAudios
  if (toneAudios.length < 2 || !toneAudios[toneAudioIndex]) {
    throw new Error();
  }
  return await Promise.all(new Array(toneAudios[toneAudioIndex].count).fill(1).map((val, i) => {
    const fileUrl = toneAudios[toneAudioIndex].files[`tone_${i + 1}`]
    return loadAudio(fileUrl)
  }))
}

const initAllAudioBuffer = async (isByTone = 0, toneAudioIndex = 0) => {
  console.log("==isByTone=", isByTone, toneAudioIndex)
  const toneAudios = getApp().globalData.toneAudios
  if (isByTone) {
    toneAudios[toneAudioIndex].buffers = await loadToneAudiosBuffers(toneAudioIndex)
    if (toneAudioIndex === 0) {
      return toneAudios[toneAudioIndex].buffers
    } else {
      toneAudios[0].buffers = await loadToneAudiosBuffers(0)
      return toneAudios[0].buffers
    }
  } else {
    console.log("==AllTone=")
    for (let i = 0; i < toneAudios.length; i++) {
      toneAudios[i].buffers = await loadToneAudiosBuffers(i)
    }
    console.log("==tone buffer ready=")
  }
}

const loadAudio = async (url) => {
  return new Promise((function (resolve, reject) {
    wx.request({
      url: url,
      responseType: "arraybuffer",
      success: function (res) {
        audioCtx?.decodeAudioData(res.data, resolve, reject)
      },
      fail: reject
    })
  }))
}

const playBuffer = async (buffer) => {
  var source = audioCtx.createBufferSource();
  source.loop = true;
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  sourceSet.add(source);
  source.onended = function () { sourceSet.delete(source) };
  source.start()
}

const stop = () => {
  sourceSet.forEach(source => source.stop())
  sourceSet.clear()
}

const emptyBuffer = (n) => {
  // 代表 buffer 中的样本帧数的整数
  const frameCount = audioCtx.sampleRate * n;
  // 定义了 buffer 中包含的声频通道数量的整数
  const channels = 2;
  return audioCtx.createBuffer(channels, frameCount, audioCtx.sampleRate)
}

const clipAudio = (audioBuffer, n, startOffset = 0) => {
  startOffset = Math.max(startOffset, 0)
  let { numberOfChannels, sampleRate } = audioBuffer
  const endOffset = sampleRate * n
  let newBuffer = audioCtx.createBuffer(numberOfChannels, endOffset - startOffset, sampleRate)
  let arr = new Float32Array(endOffset - startOffset)
  for (var channel = 0; channel < numberOfChannels; channel++) {
    audioBuffer.copyFromChannel(arr, channel, sampleRate * startOffset)
    newBuffer.copyToChannel(arr, channel, 0);
  }
  return newBuffer
}

const concatAudio = (audioBuffers = []) => {
  let sampleRate = audioCtx.sampleRate;
  let channels = audioBuffers[0]?.numberOfChannels || 2
  let len = audioBuffers.map(buffer => buffer.length).reduce((prev, curr) => prev + curr, 0);
  if (len) {
    let newBuffer = audioCtx.createBuffer(channels, len, sampleRate);
    let offset = 0;
    audioBuffers.forEach((buffer) => {
      for (var channel = 0; channel < buffer.numberOfChannels; channel++) {
        newBuffer.getChannelData(channel).set(buffer.getChannelData(channel), offset);
      }
      offset += audioBuffers.length
    })
    return newBuffer
  }
}

function encodeWAV(samples, format, sampleRate, numChannels, bitDepth) {
  const bytesPerSample = bitDepth / 8;
  const blockAlign = numChannels * bytesPerSample;

  let buffer = new ArrayBuffer(44 + samples.length * bytesPerSample);
  let view = new DataView(buffer);

  writeString(view, 0, "RIFF");
  view.setUint32(4, 36 + samples.length * bytesPerSample, true);
  writeString(view, 8, "WAVE");
  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, format, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitDepth, true);
  writeString(view, 36, "data");
  view.setUint32(40, samples.length * bytesPerSample, true);
  if (format === 1) {
    floatTo16BitPCM(view, 44, samples);
  } else {
    writeFloat32(view, 44, samples);
  }

  return buffer;
}

function interleave(inputL, inputR) {
  let length = inputL.length + inputR.length;
  let result = new Float32Array(length);

  let index = 0;
  let inputIndex = 0;

  while (index < length) {
    result[index++] = inputL[inputIndex];
    result[index++] = inputR[inputIndex];
    inputIndex++;
  }
  return result;
}

function writeFloat32(output, offset, input) {
  for (let i = 0; i < input.length; i++, offset += 4) {
    output.setFloat32(offset, input[i], true);
  }
}

function floatTo16BitPCM(output, offset, input) {
  for (let i = 0; i < input.length; i++, offset += 2) {
    let s = Math.max(-1, Math.min(1, input[i]));
    output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
}

function writeString(view, offset, string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

const audioBufferToWav = (buffer, opt = {}) => {
  const numChannels = buffer.numberOfChannels;
  const sampleRate = opt.sampleRate || buffer.sampleRate;
  const format = opt.float32 ? 3 : 1;
  const bitDepth = format === 3 ? 32 : 16;
  let result;
  if (numChannels === 2) {
    result = interleave(buffer.getChannelData(0), buffer.getChannelData(1));
  } else {
    result = buffer.getChannelData(0);
  }

  return encodeWAV(result, format, sampleRate, numChannels, bitDepth);
}

const saveAudioToFile = (data, filePath) => {
  return new Promise(function (resolve, reject) {
    var fs = wx.getFileSystemManager();
    try {
      fs.accessSync(filePath) && fs.unlinkSync(filePath)
    } catch (e) { }
    fs.writeFile({
      filePath: filePath,
      data: data,
      encoding: "binary",
      success: function (res) {
        getApp().globalData.playerReady = true;
        resolve(res)
      },
      fail: reject
    })
  })
}

module.exports = {
  initAllAudioBuffer,
  loadAudio,
  playBuffer,
  stop,
  emptyBuffer,
  clipAudio,
  concatAudio,
  audioBufferToWav,
  saveAudioToFile
}