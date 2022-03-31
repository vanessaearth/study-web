Page({
  data: {
    imgSrc: '',
    nickName: '',
    desc: '',
    currentDay: '2022-02-09'
  },

  onLoad() {
    let currentDay = new Date()
    wx.getStorage({
      key: 'userInfo',
      success: res => {
        this.setData({
          nickName: res.data.nickName
        })
      }
    })

  },
  addImg() {
    wx.chooseImage({
      count: 1,
      success: res => {
        console.log('img', res)
        let name = "tom"
        let d = new Date().getTime()
        wx.cloud.uploadFile({
          cloudPath: name + d + '.png',
          filePath: res.tempFilePaths[0]
        }).then(res => {
          console.log('upload', res)
          this.setData({
            imgSrc: res.fileID
          })
        })
      }
    })
  },
  bindKeyInput(e) {
    console.log(e)
    this.setData({
      desc: e.detail.value
    })

  },
  async sendData() {
    let data = {
      imgSrc: this.data.imgSrc,
      desc: this.data.desc,
      time: new Date().getTime(),
      nickName: this.data.nickName
    }
    const db = wx.cloud.database()
    await db.collection('card').add({
      data,
      success: res => {
        console.log(res)
        wx.navigateTo({
          url: '/pages/newsList/newsList',
        })
      }
    })

  }
})