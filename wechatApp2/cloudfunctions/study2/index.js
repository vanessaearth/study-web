const getStudyData = require('./getStudyData/index');
const getStudySubject = require('./getStudySubject/index');
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
  switch (event.type) {
    case 'getStudyData':
      return await getStudyData.main(event, context);
    case 'getStudySubject':
      return await getStudySubject.main(event, context);
  }
}