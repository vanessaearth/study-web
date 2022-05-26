// pages/study/study.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden:false,
    courses: []
  },
  handleClick(e) {
    let nameId = e.target.dataset.nameId
    wx.navigateTo({
      url: '/pages/studyDetail/studyDetail?nameId=' + nameId
    })
  },
  getData() {
    wx.cloud.callFunction({
      name: 'study2',
      config: {
        // env:this.data.envId
      },
      data: {
        type: 'getStudySubject'
      }
    }).then(res => {
      let course=res.result.data
      this.setData({
        courses:course,
        hidden:true
      })
      app.globalData=course
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
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