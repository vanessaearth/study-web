// pages/studyPlay/studyPlay.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    link: ''
  },
  setBolbVideo() {
    var video = wx.createSelectorQuery().select('video');
    var mediaSource = new MediaSource;
    video.src = URL.createObjectURL(mediaSource);
    mediaSource.addEventListener('sourceopen', sourceOpen)

    function sourceOpen() {
      var mediaSource = this;
      var sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
      sourceBuffer.addEventListener('updateend', function () {
        mediaSource.endOfStream();
        video.play();
      });
      sourceBuffer.appendBuffer(buf); // buf is the arraybuffer to store the video data
    };
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let link=options.link
    if(link.startsWith('blob:')){
      this.setBolbVideo()
    }
    this.setData({
      link: link
    })
    wx.setNavigationBarTitle({
      title: options.name
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  bindPlayVideo() {
    console.log('1')
    this.videoContext.play()
  },
  videoErrorCallback(e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
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