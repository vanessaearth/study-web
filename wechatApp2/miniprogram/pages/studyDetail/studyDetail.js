// pages/studyDetail/studyDetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden:false,
    data:{},
    currentIndex:0
  },
  handleCollapse(e){
    let index= e.currentTarget.dataset.id
    console.log(e,index,'==')
    this.setData({
      currentIndex:index
    })
    
  },
  handleOpen(e){
    let link = e.target.dataset.link
    let name = e.target.dataset.name
    wx.navigateTo({
      url: `/pages/studyPlay/studyPlay?link=${link}&name=${name}`
    })
  },
  getData(subjectId) {
    wx.cloud.callFunction({
      name: 'study2',
      config: { },
      data: {
        type: 'getStudyData',
        subjectId:subjectId
      }
    }).then(res => {
      console.log('===',res)
      this.setData({
        data:res.result,
        hidden:true
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id=options.nameId
    this.getData(id)
    let nbTitle=app.globalData.find(v=>v.id===+id).name
    wx.setNavigationBarTitle({
      title: nbTitle
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