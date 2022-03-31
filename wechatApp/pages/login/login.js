// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: '',
    userInfo: {}
  },
  /**
   * wx.login获取code
   * 通过code,请求https://api.weixin.qq.com/sns/jscode2session获取openid
   */
  hangleLogin() {
    wx.login({
      success: (res) => {
        console.log('login-code',res)
        let appId = 'wxc823061692681416'
        let secret = 'de7b25f16fb5f2f8ed15042608b086ca'
        if (res.code) {
          wx.request({
            url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${secret}&js_code=${res.code}&grant_type=authorization_code`,
            success: (res) => {
              console.log('openid', res)
              this.setData({
                openid: res.data.openid
              })
              wx.setStorage({
                key: 'openid',
                data: res.data.openid
              })

            }
          })
        }
      }
    })
  },
  getUserInfo() {
    wx.getUserProfile({
      desc: '完善用户信息',
      success: res => {
        console.log('getUserInfo',res)
        this.setData({
          userInfo: res.userInfo
        })
        wx.setStorage({
          key: 'userInfo',
          data: res.userInfo
        })
      }
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