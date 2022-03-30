// pages/database/database.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataId: '',
    detail: []

  },
  // 增加数据
  addData() {
    console.log('add')
    let data = {
      city: 'bj',
      region: 'tom',
      scales: 2
    }
    db.collection('sales').add({
      data,
      success: (res) => {
        console.log(res)
        this.setData({
          dataId: res._id
        })
      }
    })

  },
  //修改数据
  updateData() {
    db.collection('sales').doc(this.data.dataId).update({
      data: {
        city: 'tj'
      },
      success: (res) => {
        console.log(res)
      }
    })
  },
  // 删除数据
  deleteData() {
    db.collection('sales').doc(this.data.dataId).remove({
      success: (res) => {
        console.log(res)
      }
    })
  },
  // 查询数据
  selectData() {
    db.collection('sales').doc(this.data.dataId).get({
      success: (res) => {
        console.log(res)
        this.setData({
          detail:res.data
        })
      }
    })
  },
  //云函数查询
  coludSelectData(){
    wx.cloud.callFunction({
      name:'quickstartFunctions',
      config:{
        // env:this.data.envId
      },
      data:{
        type: 'selectRecord'
      }
    }).then(res=>{
      console.log('colud res:',res)
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