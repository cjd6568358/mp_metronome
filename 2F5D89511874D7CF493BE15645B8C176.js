var a, t, e, o,
  i = require("DEA04C941874D7CFB8C624933398C176.js"),
  r = require("A87E97671874D7CFCE18FF6044C8C176.js"),
  g = require("D2781B611874D7CFB41E7366F1A8C176.js"),
  u = require("0C1254531874D7CF6A743C545888C176.js");
a = null, t = null, e = null, o = 0,
  module.exports = {
    initPlayer: function () {
      console.log("===initPlayer====");
      var l = getApp();
      a || (a = wx.createInnerAudioContext({ useWebAudioImplement: !0 })),
        e || (e = wx.getBackgroundAudioManager());
      try {
        "function" == typeof wx.createWebAudioContext && wx.canIUse("createWebAudioContext") ? (o = 1, l.globalData.isWebAudio = 1, t = wx.createWebAudioContext()) : (l.globalData.innerMode = !0,
          wx.setStorageSync("innerMode", !0), o = 0)
      } catch (a) {
        o = 0,
          l.globalData.innerMode = !0,
          wx.setStorageSync("innerMode", !0),
          console.log("init webAudio error", a)
      }
    },
    initToneSounds: function () {
      var a = this, t = getApp();
      g.request(u.toneConfig, {}, "GET").then((function (e) { 200 == e.code && (t.globalData.toneAudios = e.data.sort((function (a, t) { return a.id - t.id })), a.initPlayer(), t.globalData.backgroundModeOn ? i.initAllAudioBuffer(1, t.globalData.tone).then((function () { a.initAudioSrc() })).then((function () { a.initBgAudioFile() })) : 1 == t.globalData.isWebAudio && i.initAllAudioBuffer(1, t.globalData.tone).then((function () { a.initAudioSrc() }))) }))
    },
    initAudioSrc: function () {
      console.log("==initAudioSrc==");
      var a = this, t = getApp();
      return new Promise((function (resolve, o) {
        try {
          if (t.globalData.toneAudios[t.globalData.tone].buffers) {
            a.initItemsAudioBuffer().then(resolve)
          } else {
            t.globalData.playerReady = false;
            i.initAllAudioBuffer(1, t.globalData.tone).then((function () {
              debugger
              a.initItemsAudioBuffer().then(resolve)
            }))
          }
        } catch (a) { o(a) }
      }))
    },
    initItemsAudioBuffer: function () {
      var a = this;
      console.log("==initItemsAudioBuffer==");
      return new Promise((function (t, e) {
        var o = a,
          l = getApp(),
          n = l.globalData.toneAudios;
        l.globalData.playerReady = !1;
        l.globalData.toneAudios = n.sort((function (a, t) {
          return a.id - t.id
        }));
        l.globalData.toneAudios[l.globalData.tone].buffers && l.globalData.toneAudios[l.globalData.tone].buffers.tone_1 && l.globalData.toneAudios[l.globalData.tone].buffers.tone_1.numberOfChannels || o.initAudioSrc();
        l.globalData.isVoice = 1 == l.globalData.toneAudios[l.globalData.tone].voice ? 1 : 0;
        console.log("==isVoice==", l.globalData.isVoice);
        l.globalData.toneAudios[0].buffers && l.globalData.toneAudios[0].buffers.tone_1 && l.globalData.toneAudios[0].buffers.tone_1.numberOfChannels || (o.initAudioSrc(), e());
        for (var r = [], g = null, u = [], s = l.globalData.toneAudios[0].buffers.tone_5, b = l.globalData.toneAudios[0].buffers.tone_4 ? l.globalData.toneAudios[0].buffers.tone_4 : i.emptyBuffer(10), c = l.globalData.itemDuration / 1e3, D = 0; D < l.globalData.subdivs.length; D++) {
          var p = l.globalData.subdivs[D];
          p = p || "T_1", u[D] = l.globalData.subNotes[p].duration
        }
        if (l.globalData.playCount) {
          var d = l.globalData.items.map((function (a, t) {
            return {
              idx: t,
              level: a.level ? a.level : 0,
              subnote: u[t % l.globalData.subdivs.length]
            }
          }));
          for (D = 0; D < l.globalData.playCount; D++) r = r.concat(d)
        }
        if (l.globalData.muteCount) {
          var f = l.globalData.items.map((function (a, t) {
            return {
              idx: t,
              level: 0,
              subnote: u[t % l.globalData.subdivs.length]
            }
          }));
          for (D = 0; D < l.globalData.muteCount; D++) r = r.concat(f)
        }
        console.log("===playItems===", r);
        console.log("currentTone", l.globalData.tone, l.globalData.toneAudios[l.globalData.tone]);
        var m = r.map((function (a, t) {
          if (g = a.level > 0 ? 1 == l.globalData.isVoice && a.idx > 9 ? l.globalData.toneAudios[0].buffers.tone_1 ? l.globalData.toneAudios[0].buffers.tone_1 : s : 1 == l.globalData.isVoice ? l.globalData.toneAudios[l.globalData.tone].buffers["tone_" + (a.idx + 1)] : l.globalData.toneAudios[l.globalData.tone].buffers["tone_" + a.level] : i.emptyBuffer(c), a.subnote.length > 1) {
            if (a.level > 0) {
              var e = a.subnote.map((function (a, e) {
                var o = Math.abs(a) * c;
                return a < 0 ? 0 == e && 0 == t % l.globalData.tempo.length ? i.clipAudio(g, o) : i.clipAudio(b, o) : 0 == e ? i.clipAudio(g, o) : i.clipAudio(s, o)
              }));
              return i.concatAudio(e)
            }
            return i.emptyBuffer(c)
          }
          if (1 == a.subnote.length) return i.clipAudio(g, c)
        })),
          A = i.concatAudio(m);
        l.globalData.globalPlayAudioBuffer = A, t(A)
      }))
    },
    initBgAudioFile: function () {
      var a = this;
      console.log("==initBgAudioFile==");
      var t = getApp();
      return new Promise((function (e, o) { var l = t.globalData.backgroundAudioFilepath.replace("ABC", a.getConfKey()); try { wx.getFileSystemManager().access({ path: l, success: function (a) { t.globalData.playerReady = !0, e() }, fail: function (a) { t.globalData.playerReady = !1; try { var n = t.globalData.globalPlayAudioBuffer, r = Math.ceil(3e4 / (t.globalData.itemDuration * t.globalData.tempo.length * t.globalData.playCount)), g = i.concatAudio(new Array(r).fill(n)); i.audioBufferToWav(g).then((function (a) { var t = i.saveAudioToFile(a, l); e(t) })) } catch (a) { o(a) } } }) } catch (a) { o(a) } }))
    },
    playAudio: function () {
      console.log("==playAudio==");
      var a = this, t = getApp();
      if (t.globalData.backgroundModeOn && !t.globalData.trainIng) { var e = wx.getFileSystemManager(), o = t.globalData.backgroundAudioFilepath.replace("ABC", a.getConfKey()); e.access({ path: o, success: function (e) { if (t.globalData.upbeatOn && t.globalData.tempo.length > 1) { var l = t.globalData.tempo.length - 1; console.log("==lastItemIndex===", l), setTimeout((function () { a.playLastItem(t.globalData.items[l].level, l) }), t.globalData.itemDuration * (t.globalData.tempo.length - 1)) } a.startInterval(), console.log("=====startInterval 216====="), wx.vibrateLong(), setTimeout((function () { a.playFile(o) }), t.globalData.upbeatOn ? t.globalData.itemDuration * t.globalData.tempo.length : 0) }, fail: function (e) { if (console.log("==upbeatOn==", t.globalData.upbeatOn), t.globalData.upbeatOn && t.globalData.tempo.length > 1) { var l = t.globalData.tempo.length - 1; console.log("==lastItemIndex===", l), setTimeout((function () { a.playLastItem(t.globalData.items[l].level, l) }), t.globalData.itemDuration * (t.globalData.tempo.length - 1)) } else wx.showLoading({ title: "播放准备中" }); a.initAudioSrc().then((function () { a.initBgAudioFile().then((function () { wx.hideLoading(), a.startInterval(), console.log("=====startInterval 237====="), wx.vibrateLong(), setTimeout((function () { a.playFile(o) }), t.globalData.upbeatOn ? t.globalData.itemDuration * t.globalData.tempo.length : 1) })) })) } }) } else t.globalData.innerMode || 1 != t.globalData.isWebAudio ? (a.stopAudio(), a.endInterval(), a.startInterval(), console.log("=====startInterval 278=====")) : (t.globalData.playerReady = !1, a.stopAudio(), a.endInterval(), a.initItemsAudioBuffer().then((function () { if (!t.globalData.playing && t.globalData.playingBackup && (console.log("==fix playing=="), t.globalData.playing = 1), a.startInterval(), console.log("=====startInterval 256====="), console.log("==upbeatOn==", t.globalData.upbeatOn), t.globalData.upbeatOn && t.globalData.tempo.length > 1) { var e = t.globalData.tempo.length - 1; console.log("==lastItemIndex===", e), setTimeout((function () { a.playLastItem(t.globalData.items[e].level, e) }), t.globalData.itemDuration * (t.globalData.tempo.length - 1)) } setTimeout((function () { var a = t.globalData.globalPlayAudioBuffer; a ? i.playBuffer(a) : t.globalData.playerReady = !1 }), t.globalData.upbeatOn && t.globalData.tempo.length > 1 ? t.globalData.itemDuration * t.globalData.tempo.length : 10) })))
    },
    playFile: function (a) {
      console.log("==playFile==", e);
      var t = this, o = getApp();
      e || (e = wx.getBackgroundAudioManager()), e.title = o.globalData.tempo.length + "/" + o.globalData.tempo.duration + " " + o.globalData.bpmSpeed + "ᴮᴾᴹ " + o.globalData.activeTone, e.epname = "后台播放", e.singer = "万能节拍器", e.coverImgUrl = "https://lukehui.oss-cn-beijing.aliyuncs.com/cheers/image/play-poster.png", e.src = a, e.onEnded((function () { console.log("bgplayer onend"), e.src = a, o.globalData.playing = 1, t.updateItemDuration() })), e.onPlay((function () { console.log("bgplayer onplay"), !o.globalData.playing && o.globalData.playingBackup && o.globalData.backgroundModeOn && (console.log("==fix playing=="), t.updateItemDuration(), o.globalData.playing = 1, t.startInterval(), console.log("=====startInterval 306====="), o.globalData.timerRunning && o.globalData.timerSeconds && (o.globalData.resumeTimer = 1)) })), e.onPause((function () { console.log("bgplayer onpause"), console.log("==timer running==", o.globalData.timerRunning), console.log("==isFront==", o.globalData.isFront), o.globalData.playingBackup = 1, o.globalData.playing = 0, o.globalData.countDownTimerIntervals.forEach((function (a) { clearInterval(a) })), o.globalData.countDownTimerIntervals.clear(), t.endInterval(), t.resetItems(), t.updateItemDuration(), o.reportRecord(), o.globalData.timerRunning || (o.globalData.timerRunning = 0, o.globalData.timerSeconds = 0) })), e.onStop((function () { console.log("bgplayer onstop"), t.endInterval(), t.resetItems(), o.globalData.isFront || o.reportRecord() })), e.onError((function (a) { console.log("bgplayer onerror", a) }))
    },
    updateBackgroundMedia: function () {
      var a = getApp();
      e || (e = wx.getBackgroundAudioManager()), e.title = a.globalData.tempo.length + "/" + a.globalData.tempo.duration + " " + a.globalData.bpmSpeed + "ᴮᴾᴹ " + a.globalData.activeTone, e.epname = "后台播放", e.singer = "万能节拍器", e.coverImgUrl = "https://lukehui.oss-cn-beijing.aliyuncs.com/cheers/image/play-poster.png"
    },
    startInterval: function () {
      console.log("==startInterval===");
      var a = this, t = getApp();
      if (t.globalData.curItemIndex = 0, a.itemBeat(), t.globalData.beatTimes = 1, t.globalData.lastBeatTime = Date.now(), t.globalData.playing || (t.globalData.playing = 1), "android" == t.globalData.platform || "devtools" == t.globalData.platform) { if (t.globalData.playing) try { t.workerStart(t.globalData.itemDuration), console.log("==timer dur1==", t.globalData.itemDuration) } catch (o) { var e = setInterval((function () { a.itemBeat() }), t.globalData.itemDuration); t.globalData.playerTimerIntervals.add(e) } } else e = setInterval((function () { console.log("===curItemIndex==", t.globalData.curItemIndex), a.itemBeat() }), t.globalData.itemDuration), console.log("==ios dur==", t.globalData.itemDuration), t.globalData.playerTimerIntervals.add(e)
    },
    updateItemDuration: function () {
      var a = getApp(),
        t = (t = 6e4 / a.globalData.bpmSpeed) < 50 ? 50 : t; a.globalData.itemDuration = t
    },
    endInterval: function () {
      var a = getApp();
      a.workerStop(), a.globalData.playing && (a.globalData.playing = 0), a.globalData.playerTimerIntervals.forEach((function (a) { clearInterval(a) })), a.globalData.playerTimerIntervals.clear(), a.globalData.curItemIndex = 0, a.globalData.barCount = 0, a.globalData.beatCount = 0
    },
    itemBeat: function () {
      var a = getApp(), t = a.globalData.curItemIndex;
      if (console.log("===itemBeat===", t), t == a.globalData.tempo.length - 1 && a.globalData.barCount++, a.globalData.beatCount = a.globalData.beatCount + 1, a.globalData.trainIng && t == a.globalData.tempo.length - 1 && (a.globalData.trainCurBar = a.globalData.trainCurBar + 1), a.globalData.items[t]) switch (a.globalData.items[t].level) { case 0: case 1: case 2: this.playAudioBeat(a.globalData.items[t].level, t); break; case 3: this.playAudioBeat(a.globalData.items[t].level, t), a.globalData.vibrateAccent && wx.vibrateShort({ type: "heavy" }); break; default: this.stopAudio() }1 === a.globalData.tempo.length && (setTimeout((function () { var t = a.globalData.items.map((function (a, t, e) { return a.state = 0, a })); a.globalData.curItemIndex = -1, a.globalData.items = t }), .5 * a.globalData.itemDuration), setTimeout((function () { a.globalData.curItemIndex = 0 }), .7 * a.globalData.itemDuration))
    },
    playAudioBeat: function (t, e) {
      var i = this;
      return n(l().mark((function n() { var g, u, s, b, c, D, p, d, f; return l().wrap((function (l) { for (; ;)switch (l.prev = l.next) { case 0: if (g = i, u = getApp(), console.log("==playAudioBeat==", e), u.globalData.items.length !== u.globalData.tempo.length && g.resetItems(), g.updateItems(), a || (a = wx.createInnerAudioContext({ useWebAudioImplement: !0 })), !(t > 0)) { l.next = 25; break } if (s = (s = u.globalData.subdivs[e]) || "T_1", !(b = u.globalData.subNotes[s].duration).length) { l.next = 24; break } if (D = u.globalData.items, p = D.map((function (a, t, o) { return a.state = e == t ? 1 : 0, a })), u.globalData.items = p, !(u.globalData.upbeatOn && u.globalData.tempo.length > 1 && u.globalData.beatCount < u.globalData.tempo.length)) { l.next = 15; break } return l.abrupt("return"); case 15: d = 0; case 16: if (!(d < b.length)) { l.next = 24; break } return u.globalData.backgroundModeOn || !u.globalData.innerMode && 0 != o || (console.log("==innerAudioCtx=="), 0 == d && b[d] > 0 ? (1 == u.globalData.isVoice && e > 9 ? a.src = u.globalData.toneAudios[0].files.tone_1 : 1 == u.globalData.isVoice ? a.src = u.globalData.toneAudios[u.globalData.tone].files["tone_" + (e + 1)] : a.src = u.globalData.toneAudios[u.globalData.tone].files["tone_" + t], c = a && a.play()) : b[d] > 0 ? (1 == u.globalData.isVoice ? a.src = u.globalData.toneAudios[0].files.tone_5 : a.src = u.globalData.toneAudios[u.globalData.tone].files.tone_5, c = a && a.play()) : b[d] < 0 && (a.src = u.globalData.toneAudios[u.globalData.tone].files.tone_4, c = a && a.play())), f = Math.abs(u.globalData.itemDuration * b[d]), l.next = 21, r.sleep(f).then((function () { (u.globalData.innerMode || 0 == o) && a && c && a.stop() })); case 21: d++, l.next = 16; break; case 24: (u.globalData.innerMode || 0 == o) && a && c && a.stop(); case 25: case "end": return l.stop() } }), n) })))()
    },
    playLastItem: function (t, e) {
      return n(l().mark((function o() { var n, i, g, u, s, b, c, D; return l().wrap((function (o) { for (; ;)switch (o.prev = o.next) { case 0: if (n = getApp(), a || (a = wx.createInnerAudioContext({ useWebAudioImplement: !0 })), !(t > 0)) { o.next = 21; break } if (i = (i = n.globalData.subdivs[e]) || "T_1", !(g = n.globalData.subNotes[i].duration).length) { o.next = 20; break } s = n.globalData.items, b = s.map((function (a, t, o) { return a.state = e == t ? 1 : 0, a })), n.globalData.items = b, c = 0; case 11: if (!(c < g.length)) { o.next = 20; break } return console.log("==innerAudioCtx=="), 0 == c && g[c] > 0 ? (1 == n.globalData.isVoice && e > 9 ? a.src = n.globalData.toneAudios[0].files.tone_1 : 1 == n.globalData.isVoice ? a.src = n.globalData.toneAudios[n.globalData.tone].files["tone_" + (e + 1)] : a.src = n.globalData.toneAudios[n.globalData.tone].files["tone_" + t], u = a && a.play()) : g[c] > 0 ? (1 == n.globalData.isVoice ? a.src = n.globalData.toneAudios[0].files.tone_5 : a.src = n.globalData.toneAudios[n.globalData.tone].files.tone_5, u = a && a.play()) : g[c] < 0 && (a.src = n.globalData.toneAudios[n.globalData.tone].files.tone_4, u = a && a.play()), D = Math.abs(n.globalData.itemDuration * g[c]), o.next = 17, r.sleep(D).then((function () { a && u && a.stop() })); case 17: c++, o.next = 11; break; case 20: a && u && a.stop(); case 21: case "end": return o.stop() } }), o) })))()
    },
    stopAudio: function () {
      try { i.stop(), e && e.stop(), (app.globalData.innerMode || 0 == o) && a && a.stop() } catch (a) { }
    },
    resetItems: function () {
      var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = getApp(); if (t.globalData.curItemIndex = 0, console.log("===resetItems=="), 0 == t.globalData.items.length || t.globalData.items.length !== t.globalData.tempo.length) { for (var e = [], o = 0; o < t.globalData.tempo.length; o++)e.push({ state: 0 == a ? 0 : 1, level: 0 == o ? 3 : 2 == o ? 2 : 1 }); t.globalData.items = e } else { var l = t.globalData.items, n = l.map((function (t, e, o) { return t.state = 0 == a ? 0 : 1, t })); t.globalData.items = n }
    },
    updateItems: function () {
      var a = getApp(), t = (a.globalData.items, a.globalData.curItemIndex);
      if (t = t <= 0 || t < a.globalData.items.length - 1 ? t + 1 : 0, console.log("==updateItems==", a.globalData.curItemIndex, t), a.globalData.curItemIndex = t, !a.globalData.backgroundModeOn && !a.globalData.innerMode) for (var e in a.globalData.items) a.globalData.items["".concat(e)].state = t == e ? 1 : 0
    },
    innerPlay: function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; console.log("innerAudioCtx", a), a || (a = wx.createInnerAudioContext({ useWebAudioImplement: !0 })), a.src = t, a.loop = !!e, a.play(), console.log("==innerAudioCtx play="), a.onEnded((function () { console.log("==innerAudioCtx stop="), a.stop() }))
    },
    innerStop: function () {
      a && (a.loop = !1, a.stop())
    },
    webPlay: function () {
      t || (t = wx.createWebAudioContext()),
        i.loadAudio(audioSrc).then((function (a) { var e = t.createBufferSource(); e.loop = !1, e.buffer = a, e.connect(t.destination), e.start() }))
    },
    changeBpm: function () {
      getApp().globalData.playing && (this.endInterval(), this.stopAudio(), this.resetItems(), this.updateItemDuration(), this.playAudio())
    },
    getConfKey: function () {
      var a = getApp(), t = a.globalData.items.map((function (a, t, e) { return a.level })); return "B" + a.globalData.bpmSpeed + "T" + a.globalData.tone + a.globalData.subdiv + "T" + a.globalData.tempo.length + "_" + a.globalData.tempo.duration + "I" + t.join("_")
    }
  };