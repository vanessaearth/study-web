// pages/toast/toast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled:false

  },
  handlePay(){
    this.setData({
      disabled:true
    })
    wx.showLoading({
      title: '支付中...',
    })
    setTimeout(()=>{
      if(false){
        wx.showToast({
          title: '支付成功',
          icon:'success'
        })
      }else{
        wx.showModal({
          title:'支付失败',
          content:'余额不足,请切换银行卡支付',
          success(res){
            if(res.confirm){
              console.log('用户点击确认');
              wx.showActionSheet({
                itemList: ['中国银行','农业银行','工商银行'],
                success(res){
                  console.log(res.tapIndex)
                },
                fail(res){
                  console.log(res)
                }
              })
            }else{
              console.log('用户点击取消');
            }
          }
        })
      }
    
      this.setData({
        disabled:false
      })
      wx.hideLoading()
    },2000)
  },
  actionSheet(){
    wx.showActionSheet({
      itemList: ['A','B','C'],
      success(res){
        console.log(res.tapIndex)
      },
      fail(res){
        console.log(res)
      }
    })
  },
  handleClose(){
    wx.enableAlertBeforeUnload({
      message: '确认关闭吗？',
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