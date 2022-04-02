const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});
const db = cloud.database();
// 查询数据库集合云函数入口函数
exports.main = async (event, context) => {
console.log('==',event,context)
  return await db.collection('studySubject').get();
};