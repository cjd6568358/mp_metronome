var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),a=require("../../@babel/runtime/helpers/asyncToGenerator"),t=require("../../@babel/runtime/helpers/defineProperty"),n=require("../../A87E97671874D7CFCE18FF6044C8C176.js"),o=require("../../2F5D89511874D7CF493BE15645B8C176.js"),i=require("../../DEA04C941874D7CFB8C624933398C176.js"),r=require("../../D2781B611874D7CFB41E7366F1A8C176.js"),s=require("../../0C1254531874D7CF6A743C545888C176.js"),l=getApp();Page({data:{platform:"",darkMode:"2",darkTheme:"dark",theme:"blue",keepScreenOn:!1,backgroundModeOn:!1,upbeatOn:!1,showTempoCount:!1,vibrateAccent:!1,innerMode:!1,statusBar:l.globalData.statusBar,customBar:l.globalData.customBar,navBarHeight:l.globalData.navBarHeight,nickNameInputDisabled:!0,showThemeDot:!0,userInfo:{avatarUrl:"https://lukehui.oss-cn-beijing.aliyuncs.com/cheers/image/default-avatar.png",nickName:"我的昵称",bornDays:1,isVip:!1,vipLeftDays:0},summary:{weekDays:0,weekHours:0,weekMinutes:0,totalDays:0,totalMinutes:0,todayMinutes:0,totalHours:0},refreshUserInfo:0},onLoad:function(e){var a=this;a.initWatchListener(),a.setData({platform:l.globalData.platform}),wx.onThemeChange((function(e){"0"==l.globalData.darkMode&&(l.globalData.darkTheme=e.theme,a.setData({darkTheme:e.theme}),console.log("changetheme:",e.theme))}))},onShow:function(){console.log("===onshow====");var e=this;console.log("==platform==",this.data.platform),l.setTabBar(1,e),e.getTabBar().setData({showTabbar:!0}),e.refreshUserInfo();var a=wx.getStorageSync("themeVisited");e.setData({keepScreenOn:l.globalData.keepScreenOn,vibrateAccent:l.globalData.vibrateAccent,darkMode:l.globalData.darkMode,backgroundModeOn:l.globalData.backgroundModeOn,innerMode:l.globalData.innerMode,showTempoCount:l.globalData.showTempoCount,darkTheme:l.globalData.darkTheme,theme:l.globalData.theme,showThemeDot:!a}),wx.setNavigationBarColor({frontColor:"dark"==l.globalData.darkTheme?"#ffffff":"#000000",backgroundColor:"dark"==l.globalData.darkTheme?"#000000":"#ffffff"}),r.request(s.dataSummary,{},"GET").then((function(a){200==a.code&&e.setData({summary:{weekDays:a.data.weekDays,weekHours:a.data.weekMinutes>60?Math.floor(a.data.weekMinutes/60):0,weekMinutes:a.data.weekMinutes,todayMinutes:a.data.todayMinutes,totalDays:a.data.totalDays,totalMinutes:a.data.totalMinutes,totalHours:a.data.totalMinutes>60?Math.floor(a.data.totalMinutes/60):0}})}))},initWatchListener:function(){l.watch("darkMode",this.watchBack),l.watch("darkTheme",this.watchBack),l.watch("theme",this.watchBack),l.watch("refreshUserInfo",this.watchBack)},watchBack:function(e,a){this.setData(t({},"".concat(e),a)),"refreshUserInfo"===e&&this.refreshUserInfo()},onShareAppMessage:function(){return l.onShareAppMessage()},onShareTimeline:function(){return l.onShareTimeline()},tapBack:function(){wx.switchTab({url:"/pages/index/index"})},tapVipCenter:function(){wx.navigateTo({url:"/pages/vip/index"})},tapAbout:function(){wx.navigateTo({url:"/pages/setting/about"})},jumpTune:function(){wx.navigateToMiniProgram({appId:"wx768a329f19b4fd4a",path:"/pages/index/index",envVersion:"release",success:function(e){}})},switchVibrateAccent:function(e){this.setData({vibrateAccent:e.detail.value}),l.globalData.vibrateAccent=e.detail.value;try{wx.setStorageSync("vibrateAccent",1==e.detail.value)}catch(e){VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e)}},switchKeepScreenOn:function(e){this.setData({keepScreenOn:e.detail.value}),l.globalData.keepScreenOn=e.detail.value;try{wx.setStorageSync("keepScreenOn",1==e.detail.value)}catch(e){VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e)}},switchBackgroundModeOn:function(e){if(this.data.userInfo&&!this.data.userInfo.isVip)return this.handleShowVip(),!1;l.globalData.backgroundModeOn=e.detail.value,this.setData({backgroundModeOn:e.detail.value,innerMode:!1}),this.reloadPlayerConf();try{wx.setStorageSync("backgroundModeOn",1==e.detail.value),wx.setStorageSync("innerMode",!1)}catch(e){VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e)}},switchInnerMode:function(e){l.globalData.innerMode=e.detail.value,l.globalData.backgroundModeOn=!1,this.setData({innerMode:e.detail.value,backgroundModeOn:!1});try{wx.setStorageSync("innerMode",1==e.detail.value),wx.setStorageSync("backgroundModeOn",!1)}catch(e){VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e)}this.reloadPlayerConf()},switchUpbeatOn:function(e){if(console.log("=switchUpbeatOn==",e),this.data.userInfo&&!this.data.userInfo.isVip)return this.handleShowVip(),!1;l.globalData.upbeatOn=e.detail.value,this.setData({upbeatOn:e.detail.value}),this.reloadPlayerConf();try{wx.setStorageSync("upbeatOn",1==e.detail.value)}catch(e){VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e)}},switchShowTempoCount:function(e){if(this.data.userInfo&&!this.data.userInfo.isVip)return this.handleShowVip(),!1;l.globalData.showTempoCount=e.detail.value,this.setData({showTempoCount:e.detail.value});try{wx.setStorageSync("showTempoCount",1==e.detail.value)}catch(e){VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e)}},tapTheme:function(){wx.navigateTo({url:"/pages/setting/theme"})},tapData:function(){wx.requestSubscribeMessage({tmplIds:["yuCmjp9sCqLAVo1cTt5gCqOuP3NqyqOspIUgjNOsNq8"],complete:function(e){wx.navigateTo({url:"/pages/data/index"})}})},tapReset:function(){var t,r=this;wx.showModal({title:"提示",content:"确定要清理缓存吗？",success:(t=a(e().mark((function a(t){var s,c,u,d,h;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.confirm){e.next=25;break}for(o.stopAudio(),i.stop(),s=[],c=0;c<l.globalData.tempo.length;c++)s.push({state:1,level:0==c?3:2==c?2:1});for(l.globalData.items=s,u=[],c=0;c<l.globalData.tempo.length;c++)d=l.globalData.subdiv.split(",")[0]?l.globalData.subdiv.split(",")[0]:"T_1",u.push(d);return l.globalData.subdivs=u,(h=wx.getFileSystemManager()).readdir({dirPath:"".concat(wx.env.USER_DATA_PATH,"/"),success:function(e){if(e.files.length)for(var a=0;a<e.files.length;a++)if(e.files[a].indexOf("temp-audio")>-1){var t="".concat(wx.env.USER_DATA_PATH,"/")+e.files[a];console.log("file:",t),h.unlink({filePath:t,success:function(e){console.log(e)},fail:function(e){console.error(e)}})}console.log(e.files)},fail:function(e){console.error("=readdir=",e)}}),1==l.globalData.isWebAudio&&i.initAllAudioBuffer(),r.getTabBar().setData({showTabbar:!0}),r.refreshUserInfo(),wx.removeStorageSync("items"),wx.removeStorageSync("bpm"),wx.removeStorageSync("subdiv"),wx.removeStorageSync("tone"),wx.setStorageSync("theme",r.data.theme),wx.setStorageSync("darkMode",r.data.darkMode),wx.setStorageSync("backgroundModeOn",!1),wx.showToast({title:"清理成功",icon:"success",duration:1e3}),e.next=23,n.sleep(1500).then((function(){wx.vibrateLong(),wx.reLaunch({url:"/pages/index/index"})}));case 23:e.next=26;break;case 25:t.cancel;case 26:case"end":return e.stop()}}),a)}))),function(e){return t.apply(this,arguments)})})},tapComment:function(){requirePlugin("wxacommentplugin").openComment({success:function(e){console.log("plugin.openComment success")},fail:function(e){console.log("plugin.openComment fail",e)}})},bindChooseAvatar:function(e){var a=e.detail.avatarUrl;this.setData({avatarUrl:a});var n=this,o=wx.getStorageSync("token");wx.uploadFile({url:s.uploadAvatar,filePath:a,name:"avatar",header:{"content-type":"multipart/form-data",Authorization:o?"Bearer "+o:""},success:function(e){if(200==e.statusCode){var a=JSON.parse(e.data).avatar;n.setData(t({},"userInfo.avatarUrl",a));var o=wx.getStorageSync("userInfo");o.avatar=a,wx.setStorageSync("userInfo",o)}}})},tapNicknameEdit:function(){this.setData({nickNameInputDisabled:!1})},blurNicknameInput:function(e){var a=this,n=e.detail.value.trim();return 0==n.length?(wx.showToast({title:"昵称不能为空",icon:"none",duration:1e3}),a.tapNicknameEdit(),!1):n.length>10?(wx.showToast({title:"昵称长度超出限制",icon:"none",duration:1e3}),a.tapNicknameEdit(),!1):void r.request(s.updateUser,{nickname:n},"POST").then((function(e){if(200==e.code){wx.showToast({title:"保存成功",icon:"success",duration:1e3}),a.setData(t(t({},"userInfo.nickName",e.nickname),"nickNameInputDisabled",!0));var n=wx.getStorageSync("userInfo");n.nickname=e.nickname,wx.setStorageSync("userInfo",n)}}))},tapRedeem:function(){wx.navigateTo({url:"/pages/setting/redeem"})},checkVip:function(){if(this.data.userInfo&&!this.data.userInfo.isVip)return this.handleShowVip(),!1},handleShowVip:function(){wx.navigateTo({url:"/pages/vip/index"})},reloadPlayerConf:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];l.globalData.playingBackup=l.globalData.playing,console.log("==reloadPlayerConf==",l.globalData.playingBackup),l.globalData.playingBackup&&e&&wx.showToast({title:"加载新配置中",icon:"none",duration:1e3}),o.endInterval(),o.stopAudio(),o.resetItems(),o.updateItemDuration(),l.globalData.playingBackup&&o.playAudio()},refreshUserInfo:function(){var e,a=this;r.request(s.showUser,{},"POST").then((function(t){if(200==t.code){e=t.data,wx.setStorageSync("userInfo",t.data);var n=(new Date).getTime(),o=e&&e.is_vip&&e.vip_expire_time?new Date(e.vip_expire_time.replace(/\-/g,"/")).getTime():0;a.setData({userInfo:{avatarUrl:e&&e.avatar?e.avatar:"https://lukehui.oss-cn-beijing.aliyuncs.com/cheers/image/default-avatar.png",nickName:e&&e.nickname?e.nickname:"我的昵称",isVip:!!e&&e.is_vip,vipExpireTime:e&&e.is_vip&&e.vip_expire_time?e.vip_expire_time.substr(0,10):"",bornDays:e?e.born_days:1,vipLeftDays:e&&e.is_vip&&e.vip_expire_time?Math.floor((o-n)/864e5):0}})}}))}});