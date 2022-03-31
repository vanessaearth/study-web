// pages/studyDetail/studyDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 1,
        name: '语文',
        detail: [
          {
            name: 'UNIT ONE HELLO, I AM MAOMAO',
            links: [
              'https://video.cache.bdschool.cn/vd/e8c9de59c6fc656334119c49c7942af4.mp4',
              'https://video.cache.bdschool.cn/vd/e476ea9d8a525c48d601a1d7ceb6b622.mp4',
              'https://video.cache.bdschool.cn/vd/a011bd24eac11b1502ddd3ea22f964ef.mp4']
          }
        ]

      }
    ],
    data:{}
  },
  handleOpen(e){
    let link = e.target.dataset.link
    wx.navigateTo({
      url: '/pages/studyPlay/studyPlay?link=' + link
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id=options.nameId
    let data=this.data.list.find(v=>v.id===+id)
    this.setData({
      data:data
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})