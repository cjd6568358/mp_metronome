var e = require("0C1254531874D7CF6A743C545888C176.js");
require("A87E97671874D7CFCE18FF6044C8C176.js");
module.exports = {
    request: function (t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET",
            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        return new Promise((function (s, i) {
            var r = wx.getStorageSync("token");
            wx.request({
                url: t,
                data: n,
                method: a,
                header: {
                    "Content-Type": "application/json",
                    Authorization: r ? "Bearer " + r : ""
                },
                success: function (r) {
                    o ? o(r) : 200 == r.statusCode ? s(r.data) : 401 == r.statusCode ? wx.login({
                        success: function (i) {
                            wx.request({
                                url: e.authLogin, data: { code: i.code },
                                method: "POST", header: { "Content-Type": "application/json" },
                                success: function (e) {
                                    if (200 == e.statusCode) {
                                        var i = e.data.access_token; i && wx.setStorageSync("token", i),
                                            wx.request({
                                                url: t, data: n, method: a, header: {
                                                    "Content-Type": "application/json", Authorization: i ? "Bearer " + i : ""
                                                },
                                                success: function (e) { o ? o(e) : 200 == e.statusCode && s(e.data) }
                                            })
                                    }
                                }
                            })
                        }
                    }) : i(r.errMsg)
                },
                fail: function (e) { i(e) }
            })
        }))
    },
    payOrder: function (t, n, a, o, s, i) {
        var r = this;
        return new Promise((function (u, c) {
            r.request(e.createOrder,
                {
                    type: n, goods_id: t,
                    platform: a,
                    address: o,
                    mobile: s,
                    delivery_name: i
                }, "POST").then((function (e) {
                    if (200 == e.code) {
                        var t = e.data.wxpay;
                        wx.requestPayment({
                            timeStamp: t.timestamp,
                            nonceStr: t.nonceStr,
                            package: t.package,
                            signType: t.signType,
                            paySign: t.paySign,
                            success: function (e) { u(e) },
                            fail: function (e) { c(e) },
                            complete: function (e) { c(e) }
                        })
                    } else c(e)
                }))
        }))
    }
};