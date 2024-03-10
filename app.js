var e = require("D2781B611874D7CFB41E7366F1A8C176.js"), 
  a = require("2F5D89511874D7CF493BE15645B8C176.js"), 
  t = require("0C1254531874D7CF6A743C545888C176.js"); 
App({
  globalData: {
    version: "2.0.3",
    platform: "",
    keepScreenOn: true,
    vibrateAccent: false,
    darkMode: "2",
    backgroundModeOn: false,
    upbeatOn: false,
    innerMode: false,
    darkTheme: "dark",
    theme: "blue",
    showTempoCount: false,
    customBar: 0,
    statusBar: 0,
    navBarHeight: 0,
    isFront: 1,
    isWebAudio: 0,
    playing: 0,
    playingBackup: 0,
    beatCount: 0,
    barCount: 0,
    curItemIndex: 0,
    bpmSpeed: 60,
    tempo: {
      duration: 4,
      durationIndex: 2,
      length: 4,
      lengthIndex: 3
    },
    tone: 0,
    isVoice: 0,
    items: [
      { state: 0, level: 3 },
      { state: 0, level: 1 },
      { state: 0, level: 2 },
      { state: 0, level: 1 }
    ],
    subdiv: "T_1",
    subdivs: [],
    activeTone: "轻板",
    backgroundAudioManager: null,
    backgroundAudioFilepath: `${wx.env.USER_DATA_PATH}/temp-audio-ABC.wav`,
    globalPlayAudioBuffer: null,
    playerReady: false,
    globalPlayAudioBufferSource: new Set(),
    playerTimerIntervals: new Set(),
    workerBeatIntervals: new Set(),
    countDownTimerIntervals: new Set(),
    itemDuration: 0,
    timerRunning: 0,
    resumeTimer: 0,
    playCount: 2,
    muteCount: 0,
    userInfo: null,
    lastPlayTime: null,
    lastReportTime: 0,
    toneAudios: [
      {
        id: 0,
        name: "轻板",
        vip: 0,
        count: 3,
        files: {
          tone_1: "https://lukehui.oss-cn-beijing.aliyuncs.com/cheers/mp3/audios/tone-1-1.mp3",
          tone_2: "https://lukehui.oss-cn-beijing.aliyuncs.com/cheers/mp3/audios/tone-1-2.mp3",
          tone_3: "https://lukehui.oss-cn-beijing.aliyuncs.com/cheers/mp3/audios/tone-1-3.mp3"
        }
      }
    ],
    clockDays: 1,
    showClockDialog: false,
    refreshUserInfo: 0,
    subNotes: {
      T_1: { duration: [1], icon: "1.svg" },
      T_2_2: { duration: [.5, .5], icon: "22.svg" },
      T_0_2: { duration: [-.5, .5], icon: "02.svg" },
      T_3_3_3: { duration: [1 / 3, 1 / 3, 1 / 3], icon: "333.svg" },
      T_0_3_3: { duration: [-1 / 3, 1 / 3, 1 / 3], icon: "033.svg" },
      T_3_0_3: { duration: [1 / 3, -1 / 3, 1 / 3], icon: "303.svg" },
      T_3_3_0: { duration: [1 / 3, 1 / 3, -1 / 3], icon: "330.svg" },
      T_0_3_0: { duration: [-1 / 3, 1 / 3, -1 / 3], icon: "030.svg" },
      T_0_0_3: { duration: [-1 / 3, -1 / 3, 1 / 3], icon: "003.svg" },
      T_4_4_4_4: { duration: [1 / 4, 1 / 4, 1 / 4, 1 / 4], icon: "4444.svg" },
      T_0_4_0_4: { duration: [-1 / 4, 1 / 4, -1 / 4, 1 / 4], icon: "0404.svg" },
      T_3_1: { duration: [3 / 4, 1 / 4], icon: "31.svg" },
      T_1_3: { duration: [1 / 4, 3 / 4], icon: "13.svg" },
      T_4_4_2: { duration: [1 / 4, 1 / 4, .5], icon: "442.svg" },
      T_2_4_4: { duration: [.5, 1 / 4, 1 / 4], icon: "244.svg" },
      T_4_2_4: { duration: [1 / 4, .5, 1 / 4], icon: "424.svg" }
    },
    trainIng: 0,
    trainMode: "1",
    trainCurIndex: 0,
    trainCurBar: 0,
    promoDiscount: 0,
    promoDiscountEnd: ""
  },
  onLaunch: function () {
    const self = this;
    e.request(t.appConfig, {}, "GET").then((res) => {
      if (res.code === 200) {
        self.globalData.promoDiscount = res.data.promo_discount;
        self.globalData.promoDiscountEnd = res.data.promo_discount_end;
        self.globalData.platform = res.data.in_view === self.globalData.version ? "ios" : wx.getSystemInfoSync().platform;
      }
    });
    e.request(t.toneConfig, {}, "GET").then((res) => {
      if (res.code === 200) {
        const toneData = res.data;
        self.globalData.toneAudios = toneData.sort((a, b) => a.id - b.id);
      }
    });
    self.checkUpdateVersion();
    wx.getSystemInfo({
      success: function (res) {
        const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
        const systemInfo = wx.getSystemInfoSync();
        self.globalData.customBar = menuButtonInfo.height - 6;
        self.globalData.statusBar = menuButtonInfo.top + 6;
        self.globalData.navBarHeight = 2 * (menuButtonInfo.top - systemInfo.statusBarHeight) + menuButtonInfo.height + systemInfo.statusBarHeight;
      }
    });
    wx.getStorage({
      key: "keepScreenOn",
      success: function (res) { res.data ? self.globalData.keepScreenOn = res.data : wx.setStorageSync("keepScreenOn", true) }
    });
    wx.getStorage({
      key: "vibrateAccent",
      success: function (res) { res.data ? self.globalData.vibrateAccent = res.data : wx.setStorageSync("vibrateAccent", false) }
    });
    wx.getStorage({
      key: "darkMode",
      success: function (res) { res.data ? self.globalData.darkMode = res.data : wx.setStorageSync("darkMode", "2") }
    });
    wx.getStorage({
      key: "theme",
      success: function (res) { res.data ? self.globalData.theme = res.data : wx.setStorageSync("theme", "blue") }
    });
    wx.getStorage({
      key: "backgroundModeOn",
      success: function (res) { res.data ? self.globalData.backgroundModeOn = res.data : wx.setStorageSync("backgroundModeOn", false) }
    });
    wx.getStorage({
      key: "innerMode",
      success: function (res) { res.data ? self.globalData.innerMode = res.data : wx.setStorageSync("innerMode", false) }
    });
    wx.getStorage({
      key: "showTempoCount",
      success: function (res) { res.data ? self.globalData.showTempoCount = res.data : wx.setStorageSync("showTempoCount", false) }
    });
    if (self.globalData.darkMode === "0") {
      const systemInfo = wx.getSystemInfoSync();
      self.globalData.darkTheme = systemInfo.theme;
    } else if (self.globalData.darkMode === "1") {
      self.globalData.darkTheme = "light";
    } else if (self.globalData.darkMode === "2") {
      self.globalData.darkTheme = "dark";
    }
    let subdivArray = self.globalData.subdiv.split(",");
    if (subdivArray.length < self.globalData.tempo.length) {
      subdivArray = [];
      for (let i = 0; i < self.globalData.tempo.length; i++) {
        subdivArray.push(self.globalData.subdiv);
      }
    }
    self.globalData.subdivs = subdivArray;
    console.log("==subdivs==", self.globalData.subdivs);
    wx.loadFontFace({
      family: "DINAlternate-Bold",
      source: "url(https://lukehui.oss-cn-beijing.aliyuncs.com/cheers/image/DIN-BoldAlternate.ttf)",
      success: function (res) { console.log("Font loaded successfully") },
      fail: function (res) { console.log("Font loading failed", res) }
    });
    const fileManager = wx.getFileSystemManager();
    fileManager.readdir({
      dirPath: `${wx.env.USER_DATA_PATH}/`,
      success: function (res) {
        if (res.files.length) {
          for (let i = 0; i < res.files.length; i++) {
            if (res.files[i].indexOf("temp-audio") > -1) {
              const filePath = `${wx.env.USER_DATA_PATH}/` + res.files[i];
              console.log("File: ", filePath);
              fileManager.unlink({
                filePath: filePath,
                success: function (res) { console.log(res) },
                fail: function (res) { console.error(res) }
              });
            }
          }
        }
        console.log(res.files);
      },
      fail: function (res) { console.error("Error in readdir", res) }
    });
  },
  onShow: function () {
    console.log("App show");
    this.globalData.isFront = 1;
    wx.login({
      success: function (res) {
        e.request(t.authLogin, { code: res.code }, "POST").then((res) => {
          if (res.code === 200) {
            const accessToken = res.access_token;
            if (accessToken) {
              wx.setStorageSync("token", accessToken);
              e.request(t.showUser, {}, "POST").then((res) => {
                if (res.code === 200) {
                  wx.setStorageSync("userInfo", res.data);
                }
              });
            }
          }
        }).then(() => {
          const playlist = wx.getStorageSync("playlist") || [];
          e.request(t.syncPlaylist, { playlists: JSON.stringify(playlist) }, "POST").then((res) => {
            if (res.code === 200 && playlist.length === 0 && res.data.length > 0) {
              wx.setStorageSync("playlist", res.data);
            }
          });
        });
      }
    });
  },
  watch: function (key, callback) {
    const self = this;
    let originalValue = self.globalData[key];
    Object.defineProperty(self.globalData, key, {
      configurable: true,
      enumerable: true,
      set: function (value) {
        originalValue = value;
        callback(key, value);
      },
      get: function () {
        return originalValue;
      }
    });
  },
  checkUpdateVersion: function () {
    if (wx.canIUse("getUpdateManager")) {
      const updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate((res) => {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(() => {
            wx.showModal({
              title: "Update Prompt",
              content: "A new version is ready, would you like to restart the application?",
              success: function (res) {
                if (res.confirm) {
                  updateManager.applyUpdate();
                }
              }
            });
          });
          updateManager.onUpdateFailed(() => {
            wx.showModal({
              title: "New Version Available",
              content: "Please delete the current mini program and reopen it."
            });
          });
        }
      });
    } else {
      wx.showModal({
        title: "Warm Prompt",
        content: "The current version of WeChat is too low, please upgrade to the latest version of WeChat and try again."
      });
    }
  },
  setTabBar: function (index, page) {
    if (typeof page.getTabBar === "function" && page.getTabBar()) {
      page.getTabBar().setData({ selected: index, darkTheme: this.globalData.darkTheme });
    }
  },
  onShareAppMessage: function () {
    return {
      title: "Recommend a professional metronome, this is what I use!",
      path: "/pages/index/index",
      imageUrl: "https://lukehui.oss-cn-beijing.aliyuncs.com/cheers/image/share-img.png"
    };
  },
  onShareTimeline: function () {
    return {
      title: "Recommend a professional metronome, no need to install, just open and use",
      query: "",
      imageUrl: "https://lukehui.oss-cn-beijing.aliyuncs.com/cheers/image/share-img.png"
    };
  },
  workerStart: function (interval) {
    n.postMessage({ action: "start", interval: interval });
  },
  workerRestart: function (interval) {
    n.postMessage({ action: "restart", interval: interval });
  },
  workerStop: function () {
    n.postMessage({ action: "stop" });
  },
  reportRecord: function () {
    const self = this;
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - self.globalData.lastPlayTime;
    if (self.globalData.lastPlayTime && (currentTime - self.globalData.lastReportTime > 10000)) {
      const itemsLevels = [];
      for (let i = 0; i < self.globalData.items.length; i++) {
        itemsLevels.push(self.globalData.items[i].level);
      }
      console.log("==reportRecord==");
      self.globalData.lastReportTime = currentTime;
      if (timeDifference >= 30000) {
        e.request(t.addRecord, {
          bpm: self.globalData.bpmSpeed,
          tone: self.globalData.tone,
          tempo: `${self.globalData.tempo.length}/${self.globalData.tempo.duration}`,
          minutes: Math.round(timeDifference / 60000),
          subdiv: self.globalData.subdiv,
          start_at: self.globalData.lastPlayTime,
          end_at: currentTime,
          items: itemsLevels.join(",")
        }, "POST").then((res) => {
          if (res.code === 200) {
            self.globalData.lastPlayTime = null;
            if (res.data.is_first === 1) {
              wx.vibrateLong();
            }
            self.globalData.clockDays = res.data.continuous_days;
            self.globalData.showClockDialog = res.data.is_first === 1;
            if (res.data.continuous_days === 21) {
              self.globalData.refreshUserInfo += 1;
            }
          }
        });
      }
    }
  }
});
var workerCounter = 0;
var worker = wx.createWorker("worker/timer.js", { useExperimentalWorker: true });
worker.onMessage((res) => {
  const app = getApp();
  workerCounter++;
  a.itemBeat();
  app.globalData.workerBeatIntervals = new Set(JSON.parse(res).set);
  if (workerCounter % 64 === 63) {
    app.workerRestart(app.globalData.itemDuration);
    console.log("=restart worker==");
  }
});
worker.onProcessKilled((res) => {
  console.error(res);
  worker = wx.createWorker("worker/timer.js", { useExperimentalWorker: true });
});