// pages/study/study.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses: [
      { name: '语文', id: 1 },
      { name: '数学', id: 2 },
      { name: '英语', id: 3 },
      { name: '美术', id: 4 },
      { name: '音乐', id: 5 },
      { name: '道德与法治', id: 6 },
      { name: '科学', id: 7 },
      { name: '劳动与技术', id: 8 },
      { name: '体育与健康', id: 9 },
    ]
  },
  handleClick(e) {
    let nameId = e.target.dataset.nameId
    wx.navigateTo({
      url: '/pages/studyDetail/studyDetail?nameId=' + nameId
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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