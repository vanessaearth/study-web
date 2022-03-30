const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});
const db = cloud.database();
const wxContext = cloud.getWXContext();
// 查询数据库集合云函数入口函数
exports.main = async (event, context) => {
  // 返回数据库查询结果
  // return await db.collection('sales').get();
  return await db.collection('sales').where({
    _openid: wxContext.OPENID,
    city: 'bj'
  }).get();
};
