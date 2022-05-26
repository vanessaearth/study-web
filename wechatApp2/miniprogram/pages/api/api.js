// pages/api/api.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    appAuthorizeSetting: {}
  },
  toPage() {
    // wx.reLaunch({
    //   url: '/pages/database/database?id=1'
    // })
    wx.navigateTo({
      url: '/pages/database/database?id=1',
      success: function(res) {
       
      }
    })
    // wx.redirectTo({
    //   url: '/pages/database/database?id=1',
    // })
    
  },
  getCon(){
    wx.chooseContact({
      success:res=>{
        console.log(res)
      }
    })
  },
  copy(){
    wx.setClipboardData({
      data: 'data',
      success (res) {
        
      }
    })
  },
  paste(){
    wx.getClipboardData({
      success (res) {
        console.log(res.data) // data
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '当前页面'
    })
    wx.getBatteryInfo({
      success:res=>{
        console.log(res)
      }
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