// 云函数入口文件
const cloud = require('wx-server-sdk')
const getSubject = require('./getSubject/index');
const getStudyData = require('./getStudyData/index');

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()
  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
  switch (event.type) {
    case 'getSubject':
      return await getSubject.main(event, context);
    case 'getStudyData':
      return await getStudyData.main(event, context);
    case 'updateRecord':
      return await updateRecord.main(event, context);
    case 'sumRecord':
      return await sumRecord.main(event, context);
  }
}