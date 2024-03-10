Component({
  data: {
    darkTheme: "light",
    selected: 0,
    showTabbar: !0,
    list: [
      { pagePath: "/pages/index/index", text: "节拍器" },
      { pagePath: "/pages/setting/index", text: "我的" }
    ]
  },
  attached: function () { },
  methods: {
    switchTab: function (t) {
      var e = t.currentTarget.dataset, a = e.path;
      this.setData({ selected: e.index }),
        wx.switchTab({ url: a })
    }
  }
});