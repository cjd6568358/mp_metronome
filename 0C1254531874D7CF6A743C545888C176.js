var a = "https://api.geyantech.com", e = a + "/api/";
module.exports = {
    apiRoot: a,
    appConfig: e + "config/app",
    toneConfig: e + "config/tone",
    authLogin: e + "auth/wechat-login",
    authRefresh: e + "auth/refresh",
    showUser: e + "user/info",
    updateUser: e + "user/update",
    uploadAvatar: e + "user/upload-avatar",
    vipDetail: e + "vip/detail",
    createOrder: e + "order/create",
    showOrder: e + "order/detail",
    syncPlaylist: e + "playlist/sync",
    addPlaylist: e + "playlist/add",
    updatePlaylist: e + "playlist/update",
    deletePlaylist: e + "playlist/delete",
    addRecord: e + "record/add",
    verifyRedeem: e + "redeem/verify",
    dataSummary: e + "statistic/index",
    dataCalendar: e + "statistic/calendar"
};