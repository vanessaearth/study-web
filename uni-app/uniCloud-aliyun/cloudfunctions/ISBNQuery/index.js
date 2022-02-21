'use strict';
let doubanbook=require("doubanbook");
exports.main = async (event, context) => {
  //event为客户端上传的参数
  console.log('event : ' + event);
  const db = uniCloud.database()
  let { isbn } = event;
  let res=await uniCloud.httpclient.request("https://search.douban.com/book/subject_search?search_text="+isbn+"&cat=1001");
  
  let reg = /window\.__DATA__ = "(.*)"/;
  if(reg.test(res.data)){
	  let bookdata=RegExp.$1;
		let data=doubanbook(bookdata)[0]
		let resData={
			isbn:isbn,
			title:data.title,
			cover_url:data.cover_url
		}
	await	db.collection('books').add(resData)
	  return resData
  }
  
  //返回数据给客户端
  return res;
};
