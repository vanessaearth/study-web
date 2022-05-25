// pages/map/map.js
// 引入SDK核心类
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');

// 实例化API核心类
var qqmapsdk = new QQMapWX({
  key: 'SUWBZ-AKZL6-JRPST-EO5T4-ZE3QV-BDF2G' // 必填
});

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '...'
  },
  getLocation() {
    wx.getLocation({
      type: 'wgs84',
      isHighAccuracy: true,
      success: (res) => {
        console.log('location', res)
        this.getPosition(res.latitude, res.longitude)
      }
    })
  },
  getPosition(latitude, longitude) {
    qqmapsdk.reverseGeocoder({
      location: {
        latitude,
        longitude
      },
      // 在腾讯位置服务的key需要勾选webserviceAPi
      success: (res) => {
        console.log('pos===', res)
        let address = res.result.address_component.city
        this.setData({
          address: address
        })
        wx.setStorageSync('address', address)
        
      },
      fail: (res) => {
        console.log('fail')
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
    let address=  wx.getStorageSync('address')
      if(address){
        this.setData({
          address
        })
      }else{
        this.getLocation()
      }
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