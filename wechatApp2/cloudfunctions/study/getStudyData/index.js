const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});
const db = cloud.database();
// 查询数据库集合云函数入口函数
exports.main = async (event, context) => {
 let ret = await db.collection('studyData').where({
    subjectId: +event.subjectId
  }).get();
  return ret.data[0]
};
