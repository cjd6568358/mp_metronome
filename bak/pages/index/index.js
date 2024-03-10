var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
    a = require("../../@babel/runtime/helpers/asyncToGenerator"),
    e = require("../../@babel/runtime/helpers/defineProperty"),
    o = require("../../A87E97671874D7CFCE18FF6044C8C176.js"),
    i = require("../../2F5D89511874D7CF493BE15645B8C176.js"),
    n = require("../../DEA04C941874D7CFB8C624933398C176.js"),
    s = require("../../D2781B611874D7CFB41E7366F1A8C176.js"),
    l = require("../../0C1254531874D7CF6A743C545888C176.js"),
    r = getApp(),
    u = wx.getSystemInfoSync()
        .SDKVersion;
Page(
    {
        data:
        {
            darkMode: "2",
            darkTheme: "dark",
            theme: "blue",
            upbeatOn: false,
            swiperStyle: 0,
            playing: 0,
            bpmSpeed: 60,
            showTempoCount: false,
            notationSwiperAutoplay: false,
            notationSwiperInterval: 1e6,
            notationSwiperCurrent: 0,
            tempo:
            {
                duration: 4,
                durationIndex: 2,
                length: 4,
                lengthIndex: 3
            },
            tone: 0,
            subdiv: "T_1",
            subdivs: [],
            subdivFirst: "",
            curSubIndex: 0,
            activeTone: "轻板",
            tones: [],
            toneNames: {},
            lengths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            durations: [1, 2, 4, 8, 16, 32],
            wheelAngle: 60,
            speedName: "",
            subNotes: {},
            tabSubNotes: {},
            items: [{
                state: 0,
                level: 3
            },
            {
                state: 0,
                level: 1
            },
            {
                state: 0,
                level: 2
            },
            {
                state: 0,
                level: 1
            }],
            beatCount: 0,
            barCount: 0,
            curItemIndex: 0,
            itemDuration: 0,
            tapLastMs: 0,
            tapTimes: [],
            wheelCenter: {
                x: 0,
                y: 0
            },
            wheelActive: 0,
            metroAngle: 0,
            sliderStartY: 0,
            sliderStartBpm: 0,
            sliderStartTop: 0,
            sliderTop: 60,
            playerTimer: [],
            statusBar: r.globalData.statusBar,
            customBar: r.globalData.customBar,
            navBarHeight: r.globalData.navBarHeight,
            showTempoDialog: false,
            showToneDialog: false,
            showBpmSpeedDialog: false,
            showBpmDialog: false,
            showTimerDialog: false,
            showPlaylistDialog: false,
            showSavePlaylistDialog: false,
            showRenamePlaylistDialog: false,
            showClockDialog: false,
            showTrainDialog: false,
            showNotation: false,
            showedExpireVip: false,
            timerMinutes: 3,
            timerSeconds: 180,
            timerMinStr: "03",
            timerSecStr: "00",
            regularTimerMinutes: [5, 10, 15, 20, 30, 60, 90, 120],
            bmpSpeedInputFocus: false,
            playlistName: "",
            playlist: [],
            playlistDrawerPos: {
                x: 0,
                y: 0
            },
            playlistRenameIndex: 0,
            playlistRenameId: 0,
            playlistNameInputFocus: false,
            userInfo: null,
            lastBeatTime: 0,
            beatTimes: 0,
            clockDays: 1,
            refreshUserInfo: 0,
            promoDiscount: 0,
            promoDiscountShow: false
        },
        onShareAppMessage: function () {
            return r.onShareAppMessage()
        },
        onShareTimeline: function () {
            return r.onShareTimeline()
        },
        onLoad: function (t) {
            var a = this;
            a.initWatchListener(), a.longpressTimer = new Set, wx.onThemeChange((function (t) {
                "0" == r.globalData.darkMode && (r.globalData.darkTheme = t.theme)
            })), wx.onAppHide((function () {
                console.log("==onAppHide="), r.globalData.isFront = 0, a.setData(
                    {
                        showTempoDialog: false,
                        showToneDialog: false,
                        showBpmSpeedDialog: false,
                        showBpmDialog: false,
                        showTimerDialog: false,
                        showPlaylistDialog: false,
                        showSavePlaylistDialog: false,
                        showRenamePlaylistDialog: false,
                        showClockDialog: false,
                        showTrainDialog: false
                    }), r.globalData.backgroundModeOn || (r.globalData.playing = 0, i.endInterval(), i.stopAudio(), r.reportRecord(), r.globalData.timerRunning && (console.log("==not bgMode,clear timer==="), r.globalData.countDownTimerIntervals.forEach((function (t) {
                        console.log(t), clearInterval(t)
                    })), r.globalData.countDownTimerIntervals.clear()))
            })), wx.getStorage(
                {
                    key: "showedExpireVip",
                    success: function (t) {
                        console.log("==showedExpireVip=", t), a.setData(
                            {
                                showedExpireVip: !!t.data
                            })
                    }
                }), wx.getStorage(
                    {
                        key: "showNotation",
                        success: function (t) {
                            t.data && a.setData(
                                {
                                    showNotation: t.data
                                })
                        }
                    }), wx.getStorage(
                        {
                            key: "bpm",
                            success: function (t) {
                                t.data && (r.globalData.bpmSpeed = t.data, a.setData(
                                    {
                                        wheelAngle: t.data
                                    }), a.setBpmSpeed(t.data, 1), a.setWheelAngle(t.data))
                            }
                        }), wx.getStorage(
                            {
                                key: "swiperStyle",
                                success: function (t) {
                                    t.data && a.setData(
                                        {
                                            swiperStyle: t.data
                                        })
                                }
                            }), wx.getStorage(
                                {
                                    key: "tone",
                                    success: function (t) {
                                        t.data && (r.globalData.tone = t.data)
                                    }
                                }), wx.getStorage(
                                    {
                                        key: "tempo",
                                        success: function (t) {
                                            t.data && (r.globalData.tempo = t.data)
                                        }
                                    }), wx.getStorage(
                                        {
                                            key: "subdiv",
                                            success: function (t) {
                                                t.data && (r.globalData.subdiv = t.data)
                                            }
                                        }), wx.getStorage(
                                            {
                                                key: "items",
                                                success: function (t) {
                                                    t.data && t.data.length == a.data.tempo.length ? r.globalData.items = t.data : wx.removeStorageSync("items")
                                                }
                                            }), a.updateSubdiv(), i.initPlayer();
            var e = wx.getStorageSync("userInfo");
            a.setData(
                {
                    speedName: a.getSpeedName(r.globalData.bpmSpeed),
                    subNotes: r.globalData.subNotes,
                    tabSubNotes: 32 == a.data.tempo.duration ?
                        {
                            T_1: r.globalData.subNotes.T_1
                        } : r.globalData.subNotes,
                    userInfo:
                    {
                        isVip: !!e && e.is_vip,
                        vipExpireTime: e && e.is_vip && e.vip_expire_time ? e.vip_expire_time : "",
                        todayClocked: e.today_record > 0
                    }
                }), setTimeout((function () {
                    i.initToneSounds()
                }), 500), setTimeout((function () {
                    n.initAllAudioBuffer(1, r.globalData.tone)
                        .then((function () {
                            i.initAudioSrc()
                        }))
                }), 3e3)
        },
        onShow: function () {
            var t = this;
            if (r.setTabBar(0, this), t.getTabBar()
                .setData(
                    {
                        showTabbar: true
                    }), t.setData(
                        {
                            darkMode: r.globalData.darkMode,
                            darkTheme: r.globalData.darkTheme,
                            theme: r.globalData.theme,
                            backgroundModeOn: r.globalData.backgroundModeOn,
                            showTempoCount: r.globalData.showTempoCount
                        }), wx.setNavigationBarColor(
                            {
                                frontColor: "dark" == r.globalData.darkTheme ? "#ffffff" : "#000000",
                                backgroundColor: "dark" == r.globalData.darkTheme ? "#000000" : "#ffffff"
                            }), wx.setInnerAudioOption(
                                {
                                    obeyMuteSwitch: false
                                }), wx.setKeepScreenOn(
                                    {
                                        keepScreenOn: r.globalData.keepScreenOn
                                    }), !r.globalData.playing) {
                i.updateItemDuration();
                for (var a = 0; a < r.globalData.toneAudios.length; a++) r.globalData.tone == r.globalData.toneAudios[a].id && (r.globalData.activeTone = r.globalData.toneAudios[a].name);
                setTimeout((function () {
                    0 != r.globalData.items.length && JSON.stringify(t.data.tempo) === JSON.stringify(r.globalData.tempo) && JSON.stringify(t.data.items) === JSON.stringify(r.globalData.items) || (t.setData(
                        {
                            tempo: r.globalData.tempo,
                            items: r.globalData.items,
                            bpmSpeed: r.globalData.bpmSpeed
                        }), i.resetItems()), t.refreshUserInfo();
                    for (var a = wx.getStorageSync("playlist") || [], o = wx.getStorageSync("userInfo"), n = {}, s = 0; s < r.globalData.toneAudios.length; s++) {
                        var l = r.globalData.toneAudios[s].id,
                            u = r.globalData.toneAudios[s].name;
                        Object.assign(n, e(
                            {}, l, u)), r.globalData.tone == r.globalData.toneAudios[s].id && (r.globalData.activeTone = r.globalData.toneAudios[s].name)
                    }
                    var d = r.globalData.toneAudios;
                    t.setData(
                        {
                            playlist: a.sort((function (t, a) {
                                return a.playid - t.playid
                            })),
                            tones: d.sort((function (t, a) {
                                return t.sort - a.sort
                            })),
                            toneNames: n
                        }), r.globalData.playing || t.reloadPlayerConf(), o.is_vip || (!t.data.showedExpireVip && o.vip_expire_time && wx.showModal(
                            {
                                title: "你的PRO会员已过期",
                                content: "如您需要继续使用会员功能，请前往订阅。",
                                success: function (a) {
                                    a.confirm && (t.setData(
                                        {
                                            showedExpireVip: true
                                        }), wx.setStorageSync("showedExpireVip", true), t.handleShowVip())
                                }
                            }), r.globalData.tone = 0, r.globalData.subdiv = "T_1", r.globalData.activeTone = "轻板", r.globalData.theme = "blue", r.globalData.backgroundModeOn = false, r.globalData.showTempoCount = false, wx.setStorageSync("subdiv", "T_1"), wx.setStorageSync("tone", 0), wx.setStorageSync("theme", "blue"), wx.setStorageSync("backgroundModeOn", false), wx.setStorageSync("showTempoCount", false)), new Date >= new Date(r.globalData.promoDiscountEnd.replace(/-/g, "/")) ? t.setData(
                                {
                                    promoDiscountShow: false
                                }) : t.setData(
                                    {
                                        promoDiscountShow: true
                                    })
                }), 1500), setTimeout((function () {
                    n.initAllAudioBuffer(1, r.globalData.tone)
                        .then((function () {
                            i.initAudioSrc()
                        }))
                }), 3e3)
            }
        },
        initWatchListener: function () {
            r.watch("darkMode", this.watchBack), r.watch("darkTheme", this.watchBack), r.watch("theme", this.watchBack), r.watch("refreshUserInfo", this.watchBack), r.watch("playing", this.watchBack), r.watch("bpmSpeed", this.watchBack), r.watch("tempo", this.watchBack), r.watch("tone", this.watchBack), r.watch("subdiv", this.watchBack), r.watch("itemDuration", this.watchBack), r.watch("curItemIndex", this.watchBack), r.watch("items", this.watchBack), r.watch("beatCount", this.watchBack), r.watch("barCount", this.watchBack), r.watch("activeTone", this.watchBack), r.watch("clockDays", this.watchBack), r.watch("timerRunning", this.watchBack), r.watch("resumeTimer", this.watchBack), r.watch("timerSeconds", this.watchBack), r.watch("timerMinStr", this.watchBack), r.watch("timerSecStr", this.watchBack), r.watch("showClockDialog", this.watchBack), r.watch("showTempoCount", this.watchBack), r.watch("trainCurIndex", this.watchBack), r.watch("trainCurBar", this.watchBack), r.watch("trainIng", this.watchBack), r.watch("promoDiscount", this.watchBack), r.watch("upbeatOn", this.watchBack)
        },
        watchBack: function (t, a) {
            if (this)
                if (this.data["".concat(t)] !== a && this.setData(e(
                    {}, "".concat(t), a)), "bpmSpeed" === t) this.setData(
                        {
                            speedName: this.getSpeedName(r.globalData.bpmSpeed)
                        }), this.setData(
                            {
                                wheelAngle: a
                            }), wx.setStorageSync("bpm", a);
                else if ("refreshUserInfo" === t) this.refreshUserInfo();
                else if ("resumeTimer" === t && 1 == a) this.startTimer(true);
                else if ("itemDuration" === t) this.setData(
                    {
                        pointerDuration: a
                    });
                else if ("subdiv" === t) this.updateSubdiv();
                else if ("curItemIndex" === t) {
                    var o = !(!(this.data.beatCount > 3 || this.data.barCount > 0) || !this.data.playing);
                    this.setData(
                        {
                            notationSwiperAutoplay: o,
                            notationSwiperInterval: o ? this.data.itemDuration : 1e6
                        })
                }
                else if ("playing" === t) {
                    var i = !(!(this.data.beatCount > 3 || this.data.barCount > 0) || !this.data.playing);
                    this.setData(
                        {
                            notationSwiperAutoplay: i,
                            notationSwiperInterval: i ? this.data.itemDuration : 1e6
                        }), i || this.setData(
                            {
                                notationSwiperCurrent: 0
                            })
                }
        },
        tapTempoBtn: function () {
            wx.vibrateShort(), this.updateSubdiv(), this.setData(
                {
                    showTempoDialog: true
                }), this.getTabBar()
                    .setData(
                        {
                            showTabbar: false
                        })
        },
        hideTempo: function () {
            var t = this;
            this.getTabBar()
                .setData(
                    {
                        showTabbar: true
                    }), setTimeout((function () {
                        t.setData(
                            {
                                showTempoDialog: false
                            })
                    }), 50)
        },
        tapTapBpm: function () {
            if (r.globalData.trainIng) wx.showToast(
                {
                    title: "训练中无法使用TAP",
                    icon: "none"
                });
            else {
                wx.vibrateShort(
                    {
                        type: "heavy"
                    });
                var t = (new Date)
                    .getTime();
                if (this.data.tapTimes.length < 3 && wx.showToast(
                    {
                        title: "继续点击",
                        icon: "none",
                        duration: 1e3
                    }), this.data.tapLastMs) {
                    this.data.tapTimes.push(t - this.data.tapLastMs) && (this.data.tapLastMs = t), this.data.tapTimes.length > 6 && this.data.tapTimes.shift();
                    var a = Math.round(6e4 / o.average(this.data.tapTimes));
                    a <= 10 ? a = 10 : a >= 370 && (a = 370), r.globalData.bpmSpeed = a, this.setWheelAngle(a), this.setBpmSpeed(a, 1)
                }
                else this.data.tapLastMs = t
            }
        },
        tapMinusTempoLengthBtn: function () {
            if (r.globalData.trainIng) wx.showToast(
                {
                    title: "训练中不能调整",
                    icon: "none"
                });
            else {
                var t = this;
                if (wx.vibrateShort(), r.globalData.tempo.lengthIndex > 0) {
                    var a = t.data.lengths[r.globalData.tempo.lengthIndex - 1],
                        e = {
                            lengthIndex: r.globalData.tempo.lengthIndex - 1,
                            length: a,
                            durationIndex: r.globalData.tempo.durationIndex,
                            duration: r.globalData.tempo.duration
                        },
                        o = r.globalData.items;
                    o.pop(), r.globalData.items = o, r.globalData.tempo = e;
                    var n = r.globalData.subdiv.split(",");
                    n.pop(), r.globalData.subdiv = n.join(","), t.updateSubdiv(), i.resetItems(), setTimeout((function () {
                        t.reloadPlayerConf(true)
                    }), 10), wx.setStorageSync("tempo", e), wx.setStorageSync("items", r.globalData.items)
                }
            }
        },
        tapIncTempoLengthBtn: function () {
            if (r.globalData.trainIng) wx.showToast(
                {
                    title: "训练中不能调整",
                    icon: "none"
                });
            else {
                var t = this;
                if (wx.vibrateShort(), t.data.tempo.lengthIndex < t.data.lengths.length - 1) {
                    var a = t.data.lengths[t.data.tempo.lengthIndex + 1],
                        e = {
                            lengthIndex: t.data.tempo.lengthIndex + 1,
                            length: a,
                            durationIndex: t.data.tempo.durationIndex,
                            duration: t.data.tempo.duration
                        },
                        o = r.globalData.items;
                    o.push(
                        {
                            state: r.globalData.playing ? 0 : 1,
                            level: 1
                        }), r.globalData.items = o, r.globalData.tempo = e;
                    var n = r.globalData.subdiv.split(",");
                    n.push("T_1"), r.globalData.subdiv = n.join(","), t.updateSubdiv(), i.resetItems(), setTimeout((function () {
                        t.reloadPlayerConf(true)
                    }), 10), wx.setStorageSync("tempo", e), wx.setStorageSync("items", r.globalData.items)
                }
            }
        },
        tapMinusTempoDurBtn: function () {
            if (r.globalData.trainIng) wx.showToast(
                {
                    title: "训练中不能调整",
                    icon: "none"
                });
            else {
                var t = this;
                if (wx.vibrateShort(), t.data.tempo.durationIndex > 0) {
                    var a = t.data.durations[t.data.tempo.durationIndex - 1],
                        e = {
                            lengthIndex: t.data.tempo.lengthIndex,
                            length: t.data.tempo.length,
                            durationIndex: t.data.tempo.durationIndex - 1,
                            duration: a
                        },
                        o = 32 == a ?
                            {
                                T_1: r.globalData.subNotes.T_1
                            } : r.globalData.subNotes;
                    r.globalData.tempo = e, r.globalData.subdiv = "T_1", t.setData(
                        {
                            tabSubNotes: o
                        }), setTimeout((function () {
                            i.resetItems(), t.reloadPlayerConf(true)
                        }), 1), wx.setStorageSync("tempo", e)
                }
            }
        },
        tapIncTempoDurBtn: function () {
            if (r.globalData.trainIng) wx.showToast(
                {
                    title: "训练中不能调整",
                    icon: "none"
                });
            else {
                var t = this;
                if (wx.vibrateShort(), t.data.tempo.durationIndex < t.data.durations.length - 1) {
                    var a = t.data.durations[t.data.tempo.durationIndex + 1],
                        e = {
                            lengthIndex: t.data.tempo.lengthIndex,
                            length: t.data.tempo.length,
                            durationIndex: t.data.tempo.durationIndex + 1,
                            duration: a
                        },
                        o = 32 == a ?
                            {
                                T_1: r.globalData.subNotes.T_1
                            } : r.globalData.subNotes;
                    r.globalData.tempo = e, r.globalData.subdiv = "T_1", t.setData(
                        {
                            tabSubNotes: o
                        }), setTimeout((function () {
                            i.resetItems(), t.reloadPlayerConf(true)
                        }), 1), wx.setStorageSync("tempo", e)
                }
            }
        },
        tapSubdivTab: function (t) {
            if (this.data.userInfo && !this.data.userInfo.isVip) return this.handleShowVip(), this.hideTempo(), false;
            this.setData(
                {
                    curSubIndex: t.currentTarget.dataset.tab
                })
        },
        tapSubdivNoteItem: function (t) {
            if (r.globalData.trainIng) wx.showToast(
                {
                    title: "训练中不能调整",
                    icon: "none"
                });
            else {
                var a = this;
                if (a.data.userInfo && !a.data.userInfo.isVip) return this.handleShowVip(), this.hideTempo(), false;
                wx.vibrateShort(
                    {
                        type: "heavy"
                    });
                var e = r.globalData.subdivs;
                e[a.data.curSubIndex] = t.currentTarget.dataset.subdiv, console.log("event", t), console.log("subdivs1", e), r.globalData.subdiv = e.join(","), console.log("subdivs2", r.globalData.subdiv), setTimeout((function () {
                    a.reloadPlayerConf(true)
                }), 1)
            }
        },
        tapTimerBtn: function () {
            wx.vibrateShort(), this.setData(
                {
                    showTimerDialog: true
                }), this.getTabBar()
                    .setData(
                        {
                            showTabbar: false
                        })
        },
        hideTimer: function () {
            var t = this;
            this.getTabBar()
                .setData(
                    {
                        showTabbar: true
                    }), setTimeout((function () {
                        t.setData(
                            {
                                showTimerDialog: false
                            })
                    }), 50)
        },
        tapMinusTimerBtn: function () {
            if (wx.vibrateShort(), this.data.timerMinutes > 1) {
                var t = this.data.timerMinutes - 1;
                this.setData(
                    {
                        timerMinutes: t
                    })
            }
        },
        tapIncTimerBtn: function () {
            if (wx.vibrateShort(), this.data.timerMinutes < 240) {
                var t = this.data.timerMinutes + 1;
                this.setData(
                    {
                        timerMinutes: t
                    })
            }
        },
        blurTimerNumber: function (t) {
            var a = parseInt(t.detail.value);
            a > 1 ? a > 240 && (a = 240) : a = 1, this.setData(
                {
                    timerMinutes: a
                })
        },
        tapTimerItem: function (t) {
            wx.vibrateShort(), this.setData(
                {
                    timerMinutes: t.currentTarget.dataset.mins
                })
        },
        tapTimerPriButton: function (t) {
            if (console.log("==tapTimerPriButton==", t), r.globalData.trainIng) wx.showToast(
                {
                    title: "训练中不能开启",
                    icon: "none"
                });
            else {
                var a = this;
                i.endInterval(), i.resetItems(), a.getTabBar()
                    .setData(
                        {
                            showTabbar: true
                        }), r.globalData.playingBackup = r.globalData.playing, r.globalData.playing = 0, r.globalData.timerSeconds = 60 * a.data.timerMinutes, r.globalData.timerMinStr = 60 * a.data.timerMinutes >= 600 ? parseInt(60 * a.data.timerMinutes / 60) : "0" + parseInt(60 * a.data.timerMinutes / 60), r.globalData.timerSecStr = parseInt(60 * a.data.timerMinutes % 60) > 9 ? parseInt(60 * a.data.timerMinutes % 60) : "0" + parseInt(60 * a.data.timerMinutes % 60), setTimeout((function () {
                            a.setData(
                                {
                                    showTimerDialog: 0
                                })
                        }), 50), "resumeplay" != t.currentTarget.dataset.type ? a.data.timerRunning ? (i.stopAudio(), r.globalData.playing = 0, r.globalData.countDownTimerIntervals.forEach((function (t) {
                            clearInterval(t)
                        })), r.globalData.countDownTimerIntervals.clear(), r.globalData.timerRunning = 0, r.globalData.timerSeconds = 0, a.setData(e(
                            {}, "timerBottons[0].text", "开始计时"))) : (i.stopAudio(), i.updateItemDuration(), i.initAudioSrc(), r.globalData.backgroundModeOn ? i.initAudioSrc()
                                .then((function () {
                                    i.initBgAudioFile()
                                })) : i.initAudioSrc(), o.compareVersion(u, "2.3.0") >= 0 ? wx.setInnerAudioOption(
                                    {
                                        obeyMuteSwitch: false
                                    }) : wx.showModal(
                                        {
                                            title: "提示",
                                            content: "请检查手机是否开启了静音模式"
                                        }), wx.showToast(
                                            {
                                                title: "开始计时",
                                                icon: "loading",
                                                duration: r.globalData.backgroundModeOn ? 1500 : 1e3
                                            }), r.globalData.backgroundModeOn || i.innerPlay(r.globalData.toneAudios[0].files.tone_1.replace("tone-1-1", "timer-go")), setTimeout((function () {
                                                wx.vibrateLong(), wx.nextTick((function () {
                                                    r.globalData.timerSeconds = 60 * a.data.timerMinutes, a.startTimer(false)
                                                }))
                                            }), r.globalData.backgroundModeOn ? 500 : 1600)) : a.tapPlayPause()
            }
        },
        tapLightItem: function (t) {
            if (r.globalData.trainIng) wx.showToast(
                {
                    title: "训练中不能调整",
                    icon: "none"
                });
            else {
                var a = this;
                wx.vibrateShort(
                    {
                        type: "heavy"
                    });
                var e = t.currentTarget.dataset.index,
                    o = r.globalData.items,
                    i = (o[e].level + 1) % 4,
                    n = o.map((function (t, a, o) {
                        return t.level = e == a ? i : t.level, t
                    }));
                r.globalData.items = n, setTimeout((function () {
                    a.reloadPlayerConf(true)
                }), 1), wx.setStorageSync("items", n)
            }
        },
        tapSpeedNum: function () {
            if (r.globalData.trainIng) wx.showToast(
                {
                    title: "训练中不能调整",
                    icon: "none"
                });
            else {
                console.log("==tapSpeedNum="), wx.vibrateShort();
                this.setData(
                    {
                        showBpmSpeedDialog: true
                    }), this.getTabBar()
                        .setData(
                            {
                                showTabbar: false
                            })
            }
        },
        hideSpeedNum: function () {
            console.log("==hideSpeedNum===");
            var t = this;
            t.getTabBar()
                .setData(
                    {
                        showTabbar: true
                    }), setTimeout((function () {
                        t.setData(
                            {
                                showBpmSpeedDialog: false
                            })
                    }), 50)
        },
        tapIncBpmSpeedBtn: function () {
            if (r.globalData.trainIng) wx.showToast(
                {
                    title: "训练中不能调整",
                    icon: "none"
                });
            else {
                var t = parseInt(r.globalData.bpmSpeed);
                t < 370 && (this.setWheelAngle(t + 1), this.setBpmSpeed(t + 1, 1))
            }
        },
        tapMinusBpmSpeedBtn: function () {
            if (r.globalData.trainIng) wx.showToast(
                {
                    title: "训练中不能调整",
                    icon: "none"
                });
            else {
                var t = parseInt(r.globalData.bpmSpeed);
                t > 10 && (this.setWheelAngle(t - 1), this.setBpmSpeed(t - 1, 1))
            }
        },
        longPressMinusBpmSpeedBtn: function () {
            if (!r.globalData.trainIng) {
                var t = this,
                    a = setInterval((function () {
                        t.tapMinusBpmSpeedBtn()
                    }), 100);
                this.longpressTimer.add(a)
            }
        },
        longPressPlusBpmSpeedBtn: function () {
            if (!r.globalData.trainIng) {
                var t = this,
                    a = setInterval((function () {
                        t.tapIncBpmSpeedBtn()
                    }), 100);
                this.longpressTimer.add(a)
            }
        },
        tapEndBpmSpeedBtn: function () {
            this.longpressTimer.forEach((function (t) {
                clearInterval(t)
            })), this.longpressTimer.clear()
        },
        tapSpeedName: function () {
            wx.navigateTo(
                {
                    url: "/pages/index/webview?page=speeds"
                })
        },
        saveSpeedNum: function (t) {
            var a = this;
            console.log("==saveSpeedNum==", t), wx.vibrateShort(
                {
                    type: "heavy"
                });
            var e = parseInt(t.detail.currentTarget.dataset.num);
            e > 370 ? wx.showToast(
                {
                    title: "BPM不能大于370",
                    icon: "none"
                }) : e < 10 ? wx.showToast(
                    {
                        title: "BPM不能小于10",
                        icon: "none"
                    }) : (r.globalData.bpmSpeed = e, a.setWheelAngle(e), a.setBpmSpeed(e), wx.setStorageSync("bpm", e), a.getTabBar()
                        .setData(
                            {
                                showTabbar: true
                            }), setTimeout((function () {
                                a.setData(
                                    {
                                        showBpmSpeedDialog: false
                                    })
                            }), 50), setTimeout((function () {
                                a.reloadPlayerConf(true)
                            }), 1))
        },
        moveSpeedZone: function () { },
        bindWheelTouchStart: function (t) {
            if (!r.globalData.trainIng && !r.globalData.playing) {
                var a = this;
                wx.createSelectorQuery()
                    .select("#wheel")
                    .boundingClientRect((function (t) {
                        a.setData(
                            {
                                wheelCenter:
                                {
                                    x: t.left + t.width / 2,
                                    y: t.top + t.height / 2
                                }
                            })
                    }))
                    .exec(), a.setData(
                        {
                            wheelActive: true
                        }), r.globalData.playingBackup = r.globalData.playing, i.innerPlay(r.globalData.toneAudios[0].files.tone_1.replace("tone-1-1", "wheel"), true)
            }
        },
        bindWheelTouchMove: function (t) {
            if (!r.globalData.trainIng && !r.globalData.playing) {
                if (this.data.wheelActive) {
                    var a, e, o, n = t.touches[0] || t.changedTouches[0];
                    a = n.pageX - this.data.wheelCenter.x, e = n.pageY - this.data.wheelCenter.y, o = (o = Math.round(180 * Math.atan2(e, a) / Math.PI)) < -90 ? o + 460 : o + 100, this.setBpmSpeed(o), this.setWheelAngle(o), r.globalData.playing && (i.stopAudio(), i.endInterval(), i.resetItems(), r.globalData.playing = 0)
                }
            }
        },
        bindWheelTouchEnd: function (t) {
            if (!r.globalData.trainIng && !r.globalData.playing) {
                var a = this;
                i.innerStop(), a.setData(
                    {
                        wheelActive: 0
                    }), a.setBpmSpeed(r.globalData.bpmSpeed, 1), wx.setStorageSync("bpm", r.globalData.bpmSpeed), setTimeout((function () {
                        a.reloadPlayerConf(true)
                    }), 1)
            }
        },
        tapPlayPause: function () {
            wx.vibrateShort(
                {
                    type: "heavy"
                }), r.globalData.playing = !r.globalData.playing, r.globalData.playing ? (console.log("==tapPlayPause==", r.globalData.tone, r.globalData.toneAudios), n.initAllAudioBuffer(1, r.globalData.tone)
                    .then((function () {
                        i.initAudioSrc()
                    })), r.globalData.lastPlayTime = (new Date)
                        .getTime(), i.updateItemDuration(), i.playAudio(), console.log("=====playAudio 945======"), r.globalData.timerRunning && r.globalData.timerSeconds && this.startTimer(true)) : (i.endInterval(), i.stopAudio(), r.globalData.trainIng = 0, r.globalData.timerRunning ? (r.globalData.countDownTimerIntervals.forEach((function (t) {
                            clearInterval(t)
                        })), r.globalData.countDownTimerIntervals.clear(), r.reportRecord()) : (r.globalData.countDownTimerIntervals.forEach((function (t) {
                            clearInterval(t)
                        })), r.globalData.countDownTimerIntervals.clear(), r.globalData.timerRunning = 0, r.globalData.timerSeconds = 0), r.reportRecord())
        },
        tapToneBtn: function () {
            wx.vibrateShort(), this.setData(
                {
                    showToneDialog: true
                }), this.getTabBar()
                    .setData(
                        {
                            showTabbar: false
                        })
        },
        hideTone: function () {
            var t = this;
            this.getTabBar()
                .setData(
                    {
                        showTabbar: true
                    }), setTimeout((function () {
                        t.setData(
                            {
                                showToneDialog: false
                            })
                    }), 50)
        },
        tapToneItem: function (t) {
            if (r.globalData.trainIng) wx.showToast(
                {
                    title: "训练中不能调整",
                    icon: "none"
                });
            else {
                console.log("==tapToneItem===", t.target.dataset.tone);
                var a = this;
                if (a.data.userInfo && !a.data.userInfo.isVip && "1" == t.target.dataset.vip) return a.handleShowVip(), a.hideTone(), false;
                wx.vibrateShort(
                    {
                        type: "heavy"
                    }), a.getTabBar()
                        .setData(
                            {
                                showTabbar: true
                            }), setTimeout((function () {
                                a.setData(
                                    {
                                        showToneDialog: false
                                    })
                            }), 50), r.globalData.tone = t.target.dataset.tone;
                for (var e = 0; e < r.globalData.toneAudios.length; e++) r.globalData.tone == r.globalData.toneAudios[e].id && (r.globalData.activeTone = r.globalData.toneAudios[e].name);
                wx.setStorageSync("tone", t.target.dataset.tone), setTimeout((function () {
                    a.reloadPlayerConf(true)
                }), 1)
            }
        },
        switchNotation: function () {
            var t = this;
            this.setData(
                {
                    showNotation: !this.data.showNotation
                }), setTimeout((function () {
                    wx.setStorageSync("showNotation", t.data.showNotation)
                }), 100)
        },
        tapCalendar: function () {
            wx.navigateTo(
                {
                    url: "/pages/data/index"
                })
        },
        closeClockDialog: function () {
            r.globalData.showClockDialog = false, this.setData(
                {
                    showClockDialog: false
                })
        },
        setWheelAngle: function (t) {
            this.setData(
                {
                    wheelAngle: t,
                    sliderTop: t
                }), wx.vibrateShort()
        },
        setBpmSpeed: function (t) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                e = this;
            (t = parseInt(t)) <= 10 ? t = 10 : t >= 370 && (t = 370), r.globalData.bpmSpeed = t, e.setData(
                {
                    speedName: e.getSpeedName(t)
                }), 1 == a && wx.setStorageSync("bpm", t), setTimeout((function () {
                    i.changeBpm()
                }), 1)
        },
        tapPlaylist: function () {
            wx.vibrateShort();
            var t = wx.getStorageSync("playlist") || [];
            s.request(l.syncPlaylist,
                {
                    playlists: JSON.stringify(t)
                }, "POST")
                .then((function (a) {
                    200 == a.code && 0 == t.length && a.data.length > 0 && (wx.setStorageSync("playlist", a.data), t = t.sort((function (t, a) {
                        return a.playid - t.playid
                    })))
                })), t = t.map((function (t, a) {
                    return {
                        playid: t.playid,
                        playlistName: t.playlistName,
                        bpmSpeed: t.bpmSpeed,
                        items: t.items,
                        subdiv: t.subdiv,
                        subdivs: t.subdiv.split(","),
                        tone: t.tone,
                        tempo: t.tempo
                    }
                })), console.log("==playlist==", t), this.setData(
                    {
                        playlist: t
                    }), this.cancelPlayItemMove(), this.setData(
                        {
                            showPlaylistDialog: true,
                            playlistName: ""
                        }), this.getTabBar()
                            .setData(
                                {
                                    showTabbar: false
                                })
        },
        hidePlaylist: function () {
            var t = this;
            t.getTabBar()
                .setData(
                    {
                        showTabbar: true
                    }), setTimeout((function () {
                        t.setData(
                            {
                                showPlaylistDialog: false,
                                playlistName: ""
                            })
                    }), 50)
        },
        tapAddPlaylistButton: function () {
            var t = this;
            if (t.hidePlaylist(), t.data.userInfo && !t.data.userInfo.isVip) return t.handleShowVip(), false;
            t.setData(
                {
                    showSavePlaylistDialog: true,
                    playlistName: ""
                }), setTimeout((function () {
                    t.setData(
                        {
                            playlistNameInputFocus: true
                        })
                }), 500)
        },
        tapSavePlaylistDialogButton: async function (e) {
            const n = this;
            if (e.detail.index !== 0) {
                return;
            }

            if (n.data.playlistName.length === 0) {
                wx.showToast({
                    title: "节拍名称不能为空",
                    icon: "none",
                    duration: 1000
                });
                return false;
            }

            if (n.data.playlistName.length > 15) {
                wx.showToast({
                    title: "节拍名称长度超出限制",
                    icon: "none",
                    duration: 1000
                });
                return false;
            }

            const r = wx.getStorageSync("playlist") || [];
            const u = {
                ..._.pick(n.data, ["playlistName", "bpmSpeed", "tone", "tempo", "items", "subdiv"]),
                playid: Date.now()
            };
            r.push(u);

            setTimeout(() => {
                s.request(l.addPlaylist, {
                    name: u.playlistName,
                    playid: u.playid,
                    bpm: u.bpmSpeed,
                    subdiv: u.subdiv,
                    tone: u.tone,
                    tempo: JSON.stringify(u.tempo),
                    items: JSON.stringify(u.items)
                }, "POST");
                n.setData({
                    playlist: r.sort((a, b) => b.playid - a.playid)
                });
                wx.setStorageSync("playlist", r);
                n.tapPlaylist();
            }, 10);

            wx.showToast({
                title: "保存成功",
                icon: "success",
                duration: 1000
            });

            n.setData({
                showSavePlaylistDialog: false,
                playlistName: "",
                playlistNameInputFocus: false
            });
        },
        changePlaylistNameInput: function (t) {
            this.setData(
                {
                    playlistName: t.detail.value.trim()
                })
        },
        tapApplyPlayItem: function (t) {
            var a = this;
            if (a.data.userInfo && !a.data.userInfo.isVip) return a.handleShowVip(), false;
            if (r.globalData.trainIng) wx.showToast(
                {
                    title: "训练中不能调整",
                    icon: "none"
                });
            else {
                wx.vibrateShort(
                    {
                        type: "heavy"
                    });
                var e = a.data.playlist[t.currentTarget.dataset.index];
                r.globalData.playingBackup = r.globalData.playing, a.getTabBar()
                    .setData(
                        {
                            showTabbar: true
                        }), a.setData(
                            {
                                tabSubNotes: 32 == e.tempo.duration ?
                                    {
                                        T_1: r.globalData.subNotes.T_1
                                    } : r.globalData.subNotes,
                                curSubIndex: 0
                            }), setTimeout((function () {
                                a.setData(
                                    {
                                        showPlaylistDialog: false
                                    })
                            }), 50), r.globalData.bpmSpeed = e.bpmSpeed, r.globalData.tone = e.tone, r.globalData.tempo = e.tempo, r.globalData.subdiv = e.subdiv, r.globalData.items = e.items;
                for (var o = 0; o < r.globalData.toneAudios.length; o++) r.globalData.tone == r.globalData.toneAudios[o].id && (r.globalData.activeTone = r.globalData.toneAudios[o].name);
                r.globalData.curItemIndex = 0, a.setWheelAngle(e.bpmSpeed), a.setBpmSpeed(e.bpmSpeed, 1), setTimeout((function () {
                    a.reloadPlayerConf(false)
                }), 1), wx.setStorageSync("bpm", e.bpmSpeed), wx.setStorageSync("tone", e.tone), wx.setStorageSync("tempo", e.tempo), wx.setStorageSync("items", e.items), setTimeout((function () {
                    wx.showToast(
                        {
                            title: "应用成功",
                            icon: "success",
                            duration: 1500
                        })
                }), 1e3)
            }
        },
        bindPlayItemStart: function (t) {
            this.setData(
                {
                    playlistDrawerPos:
                    {
                        x: t.changedTouches[0].clientX,
                        y: t.changedTouches[0].clientY
                    }
                })
        },
        bindPlayItemMove: function (t) {
            var a = this,
                e = (t.currentTarget.dataset.index, t.currentTarget.dataset.playid),
                o = 360 * Math.atan((t.changedTouches[0].clientY - a.data.playlistDrawerPos.y) / (t.changedTouches[0].clientX - a.data.playlistDrawerPos.x)) / (2 * Math.PI);
            a.data.playlist.forEach((function (i, n) {
                i.isTouchMove = 0, Math.abs(o) > 30 || i.playid == e && (t.changedTouches[0].clientX > a.data.playlistDrawerPos.x ? i.isTouchMove = 0 : i.isTouchMove = 1)
            })), a.setData(
                {
                    playlist: a.data.playlist.sort((function (t, a) {
                        return a.playid - t.playid
                    }))
                })
        },
        cancelPlayItemMove: function () {
            this.data.playlist.forEach((function (t, a) {
                t.isTouchMove = 0
            })), this.setData(
                {
                    playlist: this.data.playlist.sort((function (t, a) {
                        return a.playid - t.playid
                    }))
                })
        },
        tapShowPlayItemRename: function (t) {
            var a = this;
            a.hidePlaylist(), a.setData(
                {
                    showRenamePlaylistDialog: !a.data.showRenamePlaylistDialog,
                    playlistName: a.data.showRenamePlaylistDialog ? "" : t.currentTarget.dataset.name,
                    playlistRenameIndex: t.currentTarget.dataset.index,
                    playlistRenameId: t.currentTarget.dataset.playid
                }), setTimeout((function () {
                    a.setData(
                        {
                            playlistNameInputFocus: true
                        })
                }), 500)
        },
        tapSavePlaylistRenameButton: function (e) {
            var o = this;
            return a(t()
                .mark((function a() {
                    var i, n;
                    return t()
                        .wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (i = o, e.currentTarget.dataset.index, n = e.currentTarget.dataset.playid, 0 != e.detail.index) {
                                        t.next = 4;
                                        break
                                    }
                                    t.next = 15;
                                    break;
                                case 4:
                                    if (0 != i.data.playlistName.length) {
                                        t.next = 9;
                                        break
                                    }
                                    return wx.showToast(
                                        {
                                            title: "节拍名称不能为空",
                                            icon: "none",
                                            duration: 1e3
                                        }), t.abrupt("return", false);
                                case 9:
                                    if (!(i.data.playlistName.length > 15)) {
                                        t.next = 12;
                                        break
                                    }
                                    return wx.showToast(
                                        {
                                            title: "节拍名称长度超出限制",
                                            icon: "none",
                                            duration: 1e3
                                        }), t.abrupt("return", false);
                                case 12:
                                    i.data.playlist.forEach((function (t, a) {
                                        t.playid == n && (t.playlistName = i.data.playlistName)
                                    })), setTimeout((function () {
                                        i.setData(
                                            {
                                                playlist: i.data.playlist.sort((function (t, a) {
                                                    return a.playid - t.playid
                                                }))
                                            }), wx.setStorageSync("playlist", i.data.playlist), s.request(l.updatePlaylist,
                                                {
                                                    name: i.data.playlistName,
                                                    playid: n
                                                }, "POST"), i.tapPlaylist()
                                    }), 10), wx.showToast(
                                        {
                                            title: "保存成功",
                                            icon: "success",
                                            duration: 1e3
                                        });
                                case 15:
                                    i.setData(
                                        {
                                            showRenamePlaylistDialog: !i.data.showRenamePlaylistDialog,
                                            playlistName: ""
                                        });
                                case 16:
                                case "end":
                                    return t.stop()
                            }
                        }), a)
                })))()
        },
        tapDeletePlayItem: function (t) {
            var a = this;
            wx.showModal(
                {
                    title: "提示",
                    content: "确定要删除节拍【" + t.currentTarget.dataset.name + "】吗？",
                    success: function (e) {
                        e.confirm ? (a.data.playlist.splice(t.currentTarget.dataset.index, 1), a.setData(
                            {
                                playlist: a.data.playlist.sort((function (t, a) {
                                    return a.playid - t.playid
                                }))
                            }), wx.setStorageSync("playlist", a.data.playlist), s.request(l.deletePlaylist,
                                {
                                    playid: t.currentTarget.dataset.playid
                                }, "POST"), wx.showToast(
                                    {
                                        title: "删除成功",
                                        icon: "success",
                                        duration: 1e3
                                    })) : e.cancel
                    }
                })
        },
        tapTrain: function () {
            this.setData(
                {
                    showTrainDialog: true
                }), this.getTabBar()
                    .setData(
                        {
                            showTabbar: false
                        })
        },
        hideTrain: function () {
            var t = this;
            t.getTabBar()
                .setData(
                    {
                        showTabbar: true
                    }), setTimeout((function () {
                        t.setData(
                            {
                                showTrainDialog: false
                            })
                    }), 50)
        },
        swiperChange: function (t) {
            console.log("==swiperChange==", t.detail.current), wx.setStorageSync("swiperStyle", t.detail.current)
        },
        bindSliderTouchStart: function (t) {
            r.globalData.trainIng || (this.setData(
                {
                    sliderStartY: t.changedTouches[0].pageY,
                    sliderStartBpm: this.data.bpmSpeed,
                    sliderStartTop: this.data.sliderTop
                }), i.innerPlay(r.globalData.toneAudios[0].files.tone_1.replace("tone-1-1", "wheel"), true))
        },
        bindSliderTouchMove: function (t) {
            if (!r.globalData.trainIng) {
                var a = t.changedTouches[0].pageY - this.data.sliderStartY,
                    e = this.data.sliderStartTop + a;
                (e = e < 50 ? 50 : e > 360 ? 360 : e) <= 50 || e >= 360 ? i.innerStop() : wx.vibrateShort();
                var o = this.data.sliderStartBpm + Math.ceil(a);
                console.log("offset", a, e), this.setData(
                    {
                        sliderTop: e
                    }), this.setBpmSpeed(o)
            }
        },
        bindSliderTouchEnd: function (t) {
            r.globalData.trainIng || (console.log("bindSliderTouchEnd", t), i.innerStop())
        },
        reloadPlayerConf: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            r.globalData.playingBackup = r.globalData.playing, console.log("==reloadPlayerConf==", r.globalData.playingBackup), r.globalData.playingBackup && !r.globalData.playerReady && t && wx.showToast(
                {
                    title: "加载新配置中",
                    icon: "loading",
                    duration: 1e3
                }), r.globalData.backgroundModeOn ? i.initAudioSrc()
                    .then((function () {
                        i.initBgAudioFile()
                    })) : i.initAudioSrc(), r.globalData.playingBackup && (r.globalData.playing = 0, i.endInterval(), i.stopAudio(), i.resetItems(), i.updateItemDuration(), setTimeout((function () {
                        i.playAudio(), console.log("=====playAudio 1417======")
                    }), 2e3))
        },
        startTimer: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                a = this;
            r.globalData.lastPlayTime = (new Date)
                .getTime(), r.globalData.playing || (r.globalData.playing = !r.globalData.playing, t || (i.playAudio(), console.log("=====playAudio 1427======"))), t || (r.globalData.timerRunning = !r.globalData.timerRunning), a.setData(e(
                    {}, "timerBottons[0].text", "停止计时"));
            var o = setInterval((function () {
                if (r.globalData.timerSeconds > 0) {
                    var t = r.globalData.timerSeconds - 1,
                        e = t >= 600 ? parseInt(t / 60) : "0" + parseInt(t / 60),
                        o = parseInt(t % 60);
                    o = o > 9 ? o : "0" + o, r.globalData.timerSeconds = t, r.globalData.timerMinStr = e, r.globalData.timerSecStr = o
                }
                else a.stopTimer()
            }), 1e3);
            r.globalData.countDownTimerIntervals.add(o)
        },
        stopTimer: function () {
            r.globalData.playingBackup = r.globalData.playing, i.stopAudio(), i.endInterval(), i.resetItems(), r.globalData.countDownTimerIntervals.forEach((function (t) {
                clearInterval(t)
            })), r.globalData.countDownTimerIntervals.clear(), r.globalData.playing = 0, r.globalData.timerRunning = 0, r.globalData.timerSeconds = 0, r.globalData.playingBackup && (wx.vibrateLong(), wx.showToast(
                {
                    title: "计时完成",
                    icon: "success",
                    duration: 1e3
                }), r.globalData.isFront && r.reportRecord(), i.innerPlay(r.globalData.toneAudios[0].files.tone_1.replace("tone-1-1", "timer-end")))
        },
        updateSubdiv: function () {
            console.log("==updateSubdiv=="), console.log("subdivs3", r.globalData.subdiv);
            var t = r.globalData.subdiv.split(","),
                a = r.globalData.subdiv.split(",")[0] ? r.globalData.subdiv.split(",")[0] : "T_1";
            if (!r.globalData.subdiv.split(",")[0] || r.globalData.subdiv.split(",")
                .length !== r.globalData.tempo.length) {
                t = [];
                for (var e = 0; e < r.globalData.tempo.length; e++) 0 == a.length && (a = "T_1"), t.push(a)
            }
            r.globalData.subdivs = t, console.log("==subdivs==", r.globalData.subdivs), this.setData(
                {
                    subdivs: t,
                    subdivFirst: t[0],
                    curSubIndex: this.data.curSubIndex > t.length - 1 ? 0 : this.data.curSubIndex
                }), wx.setStorageSync("subdiv", t.join(","))
        },
        getSpeedName: function (t) {
            for (var a = [
                [0, "Larghissmo"],
                [20, "Grave"],
                [40, "Lento"],
                [46, "Largo"],
                [51, "Larghtto"],
                [56, "Adagio"],
                [66, "Adagietto"],
                [70, "Andante"],
                [78, "Andantino"],
                [84, "Moderato"],
                [98, "Allegretto"],
                [110, "Allegro"],
                [133, "Vivace"],
                [141, "Vivscissmo"],
                [151, "Allegrissimo"],
                [168, "Presto"],
                [178, "Prestissimo"]
            ], e = a.length - 1; e >= 0; e--)
                if (t >= a[e][0]) return a[e][1];
            return a[a.length - 1][1]
        },
        preventTouchMove: function () { },
        handleShowVip: function () {
            wx.navigateTo(
                {
                    url: "/pages/vip/index"
                })
        },
        refreshUserInfo: function () {
            var t, a = this;
            s.request(l.showUser,
                {}, "POST")
                .then((function (e) {
                    200 == e.code && (t = e.data, wx.setStorageSync("userInfo", e.data), a.setData(
                        {
                            userInfo:
                            {
                                isVip: !!t && t.is_vip,
                                vipExpireTime: t && t.is_vip && t.vip_expire_time ? t.vip_expire_time : "",
                                todayClocked: !!(t && t.today_record && t.today_record > 0)
                            },
                            onlineUsers: t.online_users ? Math.ceil(7 * t.online_users) : 500
                        }), setTimeout((function () {
                            a.setData(
                                {
                                    onlineUsers: a.data.onlineUsers + Math.ceil(4 * Math.random())
                                })
                        }), 1e3))
                }))
        }
    });