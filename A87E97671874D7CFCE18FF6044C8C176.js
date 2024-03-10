var n = function (e) {
        return (e = e.toString())[1] ? e : "0".concat(e)
    };
module.exports = {
    formatTime: function (e) {
        var t = e.getFullYear(),
            r = e.getMonth() + 1, o = e.getDate(),
            u = e.getHours(), i = e.getMinutes(),
            a = e.getSeconds();
        return "".concat([t, r, o].map(n).join("/"), " ").concat([u, i, a].map(n).join(":"))
    },
    compareVersion: function (e, n) {
        e = e.split("."),
            n = n.split("."); for (var t = Math.max(e.length, n.length);
            e.length < t;)e.push("0");
        for (; n.length < t;)n.push("0");
        for (var r = 0; r < t; r++) {
            var o = parseInt(e[r]), u = parseInt(n[r]); if (o > u) return 1;
            if (o < u) return -1
        } return 0
    },
    average: function (e) {
        return e.reduce((function (e, n) { return e + n })) / e.length
    },
    debounce: function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500, t = null;
        return function () {
            for (var r = this, o = arguments.length, u = new Array(o), i = 0; i < o; i++)u[i] = arguments[i];
            console.log("====debounce==="), t && clearTimeout(t), t = setTimeout((function () { e.apply(r, u) }), n)
        }
    },
    throttle: function (e, n) {
        var t = 0;
        return function () {
            var r = (new Date).getTime(); if (r - t >= n) {
                for (var o = arguments.length, u = new Array(o), i = 0; i < o; i++)u[i] = arguments[i]; e.apply(this, u), t = nowTimes
            }
        }
    },
    sleep: function (e) {
        return new Promise((function (n) { return setTimeout(n, e) }))
    },
    pick: function (n, t) {
        return t.map((function (t) {
            return t in n ? e({}, t, n[t]) : {}
        })).reduce((function (e, n) { return Object.assign(e, n) }), {})
    }
};