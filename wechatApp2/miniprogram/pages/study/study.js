// pages/study/study.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses: []
  },
  getData() {
    wx.cloud.callFunction({
      name:'study',
      config:{},
      data:{
        type: 'getSubject'
      }
    }).then(res=>{
      console.log('colud res:',res)
      this.setData({
        courses: res.result.data
      })
    })
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