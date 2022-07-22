const fetch = require('node-fetch')
const fs = require('fs')

let final = {
    courseName:"",
    section:[]
}
let n = 1
// let token = '9be4a6a2aee6bf3641b7b54ed31fe878' // http请求的header中去取
let token = 'fea16c081b878980feb257ab51cd957f'

async function start(){
    let all = []
    // let courseid = 212061 // 课程详情的id
    let courseid = 210146 // 课程详情的id
    // 224977 米堆 over
    // 210700 Web全栈项目实战 over
    // 211346 js深入浅出 over
    // 210146 web全栈进阶 over-h
    // 210673 vue面试训练营 
    console.log(courseid,' courseid')

    let courseInfo = await getCourse(courseid)
    if(courseInfo.code===-10005){
      console.log('courseInfo',courseInfo)
      return
    }
    final.courseName = courseInfo.data.course_name
    console.log(final)

    let chapterids = courseInfo.data.chapter_list.map(v=>v.chapter_id)

    while(chapterids.length){
        let chapterid = chapterids.shift()
        let ret = await getChap(courseid,chapterid)
        let s = {
            name:ret.data.chapter_name
        }
        let si = 0 
        while(ret.data.section_list.length){
          let v = ret.data.section_list.shift()
        // ret.data.section_list.forEach((v,si)=>{

          let i = 0 
          if(!v.group_list || !v.group_list.length){
            continue
          }
          // console.log(v.group_list && v.group_list.length)
          while(v.group_list[0].content_list.length){
            let content = v.group_list[0].content_list.shift()
          // v.group_list[0].content_list.forEach(async (content,i)=>{

              while(content.content.length){
                  let c = content.content.shift()
                  // console.log(222,c)
                  if(c.url && c.material_id){
                      final.section.push({
                          name:s.name+'-'+(si+1)+'-'+(i+1)+'-'+c.name,
                          url:c.url,
                          type:"download"
                      })
                  }
                  if(c.homework_attach_id){
                    final.section.push({
                      name:s.name+'-'+(si+1)+'-'+(i+1)+'-'+c.name,
                      url:c.url,
                      type:"download"
                    })
                  }
                  if(c.video_id){
                      let mediaId= c.callback_key
                      // await sleep(1)
                      if(mediaId){
                         let r = await getToken()
                        // await sleep(1)
                        const token = r.data.access_token
  
                        let metaInfo = await getm3u8(mediaId,token)
                        await sleep(0.3)
                        if(metaInfo.code==1){
                          if(metaInfo.data.mediaMetaInfo){
                            const url = metaInfo.data.mediaMetaInfo.videoGroup[0].playURL
                            final.section.push({
                                name:s.name+'-'+(si+1)+'-'+(i+1)+'-'+content.content_title,
                                type:"video",
                                url,
                            })
                          }else{
                            console.log(s.name,content.content_title,'莫有视频')
                          }

                        }else{
                          console.log('xx',metaInfo)
                          console.log(c)
                        }
                      }


                  }
              }


            i++
          }
          si++
        // })
        }
        // content_id
        // all.push(ret.data)
        console.log(ret.data.chapter_name)
    }
    setTimeout(()=>{
        fs.writeFileSync(`./${final.courseName}.json`,JSON.stringify(final,null,2),'utf-8')
        console.log(`finish ${final.courseName}.json`)
    },10000)
    // console.log(123,ret)
}
start()

async function sleep(n){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve()
        },n*1000)
    })
}

async function CustomForeach (arr, callback) {
    const length = arr.length;
    const O = Object(arr);
    let k = 0;
    while (k < length) {
      if (k in O) {
        console.log('doing foreach...');
        const kValue = O[k];
        await callback(kValue, k, O);
      }
      k++;
    }
  };

async function getChap(courseid,chapterid){
    let now = new Date().getTime()
    return fetch(`https://weblearn.kaikeba.com/student/chapterinfo?course_id=${courseid}&chapter_id=${chapterid}&__timestamp=${now}`, {
        "headers": {
          "accept": "application/json, text/plain, */*",
          "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7,ko;q=0.6",
          "authorization": `Bearer pc:${token}`,
          "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "cookie": "gr_user_id=ffe82594-a9d6-40cd-8c2f-6f9e855db8d9; grwng_uid=b57f6f1c-b876-4076-b4b3-ae584e873e7b; kd_user_id=f5f37941-74e5-40a8-8ff1-74c30b922eb0; 99f53b614ce96c83_gr_last_sent_cs1=57782425; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%225577580%22%2C%22first_id%22%3A%2217a8935704d597-04d2d70dd60024-34667600-1296000-17a8935704ec69%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%2217a8935704d597-04d2d70dd60024-34667600-1296000-17a8935704ec69%22%7D; 99f53b614ce96c83_gr_session_id=a818d273-d460-40dd-b9b8-efa7419ea1f5; 99f53b614ce96c83_gr_last_sent_sid_with_cs1=a818d273-d460-40dd-b9b8-efa7419ea1f5; 99f53b614ce96c83_gr_session_id_a818d273-d460-40dd-b9b8-efa7419ea1f5=true; sso_token=755d2e36584d06782e0bd44268478443; ssoToken=755d2e36584d06782e0bd44268478443; access-edu_online=127fa97cfdbb8369f2293e896593df3b; Hm_lvt_156e88c022bf41570bf96e74d090ced7=1629339755; Hm_lpvt_156e88c022bf41570bf96e74d090ced7=1629339765; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_log_id=JPoRzHxlXoqFe1v0XH6%3Af82879cd-7221-4a37-bbaa-6339fdf67836%3A8de11eea-ef3c-48cf-962a-cb054a62d6f7; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_kuickDeal_leaveTime=1629340549365; 99f53b614ce96c83_gr_cs1=57782425; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_kuickDeal_pageIndex=11; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_view_log_id=7q6nosUxSU3TPeUiafS; kkb_edu_session=eyJpdiI6ImhxK2JMZEhhXC9valpqMEV1QUlhSGVnPT0iLCJ2YWx1ZSI6ImxCZ281Z0ZCYk1mQmJjaUIyNTZETDhEZ1N3S1ZXZnN1dWNaaE9xRElqRmU3MEpYbXpETFRGaXRobVR6TFZEU0MiLCJtYWMiOiJmZGZiZDljZjg3MzM5MjIyNWYxMTdkNWIzMjIxMjZkZWJlMDFkYzNlMTRjYzU0ZDkxMzFlYTMxNjIyOTMwZWVjIn0%3D"
        },
        "referrer": "https://learn.kaikeba.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors"
      }).then(res=>res.json())
}
function getMediaId(contentid){
return fetch("https://weblearn.kaikeba.com/student/course/content?content_id="+contentid, {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7,ko;q=0.6",
      "authorization": `Bearer pc:${token}`,
      "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "cookie": "gr_user_id=ffe82594-a9d6-40cd-8c2f-6f9e855db8d9; grwng_uid=b57f6f1c-b876-4076-b4b3-ae584e873e7b; kd_user_id=f5f37941-74e5-40a8-8ff1-74c30b922eb0; 99f53b614ce96c83_gr_last_sent_cs1=57782425; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%225577580%22%2C%22first_id%22%3A%2217a8935704d597-04d2d70dd60024-34667600-1296000-17a8935704ec69%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%2217a8935704d597-04d2d70dd60024-34667600-1296000-17a8935704ec69%22%7D; Hm_lvt_156e88c022bf41570bf96e74d090ced7=1629339755; Hm_lpvt_156e88c022bf41570bf96e74d090ced7=1629339765; tblBackUrl=; 99f53b614ce96c83_gr_session_id=53b8a572-296f-465c-a5c3-d4f1e3e7b0eb; 99f53b614ce96c83_gr_last_sent_sid_with_cs1=53b8a572-296f-465c-a5c3-d4f1e3e7b0eb; 99f53b614ce96c83_gr_session_id_53b8a572-296f-465c-a5c3-d4f1e3e7b0eb=true; sso_token=2d6cf1863ab505997d502368e5dc72f8; ssoToken=2d6cf1863ab505997d502368e5dc72f8; access-edu_online=b4d68bfcf256c15e205ae6e5bb26a454; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_log_id=T8TXugKg3esrhTGY0yP%3Af82879cd-7221-4a37-bbaa-6339fdf67836%3A8de11eea-ef3c-48cf-962a-cb054a62d6f7; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_kuickDeal_leaveTime=1629429746832; kkb_edu_session=eyJpdiI6InBEK0xTbkhhRXFPNm5aOWZXMnZTYkE9PSIsInZhbHVlIjoibTdnODN1SytxVUZzTWFjM2Fkcm1FYnljU2hGbWZkU2t3UGEwS21iN1VTM0Zib3Yzd09rdHZKcnJQV0dzMHY0RiIsIm1hYyI6IjNkNTRhNTQ3MTI4MDFkYWU1YTYxMDNlZjA5MmQ3NTIyZTdmNWFhNWVmNTBlY2MzOTQ5NWVlODkwMzc3MWNkY2UifQ%3D%3D; 99f53b614ce96c83_gr_cs1=57782425; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_kuickDeal_pageIndex=4; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_view_log_id=7ulVpxDl6liy5p9xn1r"
    },
    "referrer": "https://learn.kaikeba.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors"
  }).then(res=>res.json())
}
function getToken(){
return fetch("https://weblearn.kaikeba.com/get/bsy_video/access_token", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7,ko;q=0.6",
      "authorization": `Bearer pc:${token}`,
      "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "cookie": "gr_user_id=ffe82594-a9d6-40cd-8c2f-6f9e855db8d9; grwng_uid=b57f6f1c-b876-4076-b4b3-ae584e873e7b; kd_user_id=f5f37941-74e5-40a8-8ff1-74c30b922eb0; 99f53b614ce96c83_gr_last_sent_cs1=57782425; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%225577580%22%2C%22first_id%22%3A%2217a8935704d597-04d2d70dd60024-34667600-1296000-17a8935704ec69%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%2217a8935704d597-04d2d70dd60024-34667600-1296000-17a8935704ec69%22%7D; Hm_lvt_156e88c022bf41570bf96e74d090ced7=1629339755; Hm_lpvt_156e88c022bf41570bf96e74d090ced7=1629339765; tblBackUrl=; 99f53b614ce96c83_gr_session_id=53b8a572-296f-465c-a5c3-d4f1e3e7b0eb; 99f53b614ce96c83_gr_last_sent_sid_with_cs1=53b8a572-296f-465c-a5c3-d4f1e3e7b0eb; 99f53b614ce96c83_gr_session_id_53b8a572-296f-465c-a5c3-d4f1e3e7b0eb=true; sso_token=2d6cf1863ab505997d502368e5dc72f8; ssoToken=2d6cf1863ab505997d502368e5dc72f8; access-edu_online=b4d68bfcf256c15e205ae6e5bb26a454; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_log_id=T8TXugKg3esrhTGY0yP%3Af82879cd-7221-4a37-bbaa-6339fdf67836%3A8de11eea-ef3c-48cf-962a-cb054a62d6f7; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_kuickDeal_leaveTime=1629429746832; 99f53b614ce96c83_gr_cs1=57782425; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_kuickDeal_pageIndex=2; kkb_edu_session=eyJpdiI6IndzUnZoSzBiRG5temtZT2R1MmpHc2c9PSIsInZhbHVlIjoiYVVKbHhCZEdWRG1KOWp3MUlLbm1Zd290RWVtY1dPcU5WUis1cEJ0aXhzenN3UlBINXZLRWRGUXdhT2JXVHgrSCIsIm1hYyI6IjE0YmJhZjdiNjcxMDkzYWFkZTJhYjM4NGY3MDljMjg1ODkxNmM3ODYwOGJlOTBmNTM3YzY5ODAyMDBjZWIzNTAifQ%3D%3D; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_view_log_id=U0LuEbLd2W2PzyiM6yE"
    },
    "referrer": "https://learn.kaikeba.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors"
  }).then(res=>res.json())
}
async function getCourse(courseid){
    let now = new Date().getTime()
    return fetch(`https://weblearn.kaikeba.com/student/courseinfo?course_id=${courseid}&__timestamp=${now}`, {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7,ko;q=0.6",
    "authorization": `Bearer pc:${token}`,
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "cookie": "gr_user_id=ffe82594-a9d6-40cd-8c2f-6f9e855db8d9; grwng_uid=b57f6f1c-b876-4076-b4b3-ae584e873e7b; kd_user_id=f5f37941-74e5-40a8-8ff1-74c30b922eb0; 99f53b614ce96c83_gr_last_sent_cs1=57782425; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%225577580%22%2C%22first_id%22%3A%2217a8935704d597-04d2d70dd60024-34667600-1296000-17a8935704ec69%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%2217a8935704d597-04d2d70dd60024-34667600-1296000-17a8935704ec69%22%7D; 99f53b614ce96c83_gr_session_id=a818d273-d460-40dd-b9b8-efa7419ea1f5; 99f53b614ce96c83_gr_last_sent_sid_with_cs1=a818d273-d460-40dd-b9b8-efa7419ea1f5; 99f53b614ce96c83_gr_session_id_a818d273-d460-40dd-b9b8-efa7419ea1f5=true; sso_token=755d2e36584d06782e0bd44268478443; ssoToken=755d2e36584d06782e0bd44268478443; access-edu_online=127fa97cfdbb8369f2293e896593df3b; Hm_lvt_156e88c022bf41570bf96e74d090ced7=1629339755; Hm_lpvt_156e88c022bf41570bf96e74d090ced7=1629339765; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_log_id=JPoRzHxlXoqFe1v0XH6%3Af82879cd-7221-4a37-bbaa-6339fdf67836%3A8de11eea-ef3c-48cf-962a-cb054a62d6f7; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_view_log_id=fv6oQPUihXWkf76We3e; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_kuickDeal_pageIndex=8; kd_5d6526d7-3c9f-460b-b6cf-ba75397ce1ac_kuickDeal_leaveTime=1629341007312; kkb_edu_session=eyJpdiI6ImhocTh3bUxLdm5lVXByeGVINnBPVHc9PSIsInZhbHVlIjoid3hzV0t2QzdFSG1MYzh4VzU0VU1lZTZHamNGaEpqZFp0a1JlU3loc1poTWZ6TVVWaG5cLzlqTG8zazdhY0gzblciLCJtYWMiOiJlNWI5OTQzNWM2M2U2MThlMTY4ODUxZTU5MjJkM2M2OTAwM2VjMWVkM2YwOGIzNjM5YzkxMzM3MTM3ZTNmNjdjIn0%3D; tblBackUrl=; 99f53b614ce96c83_gr_cs1=57782425"
  },
  "referrer": "https://learn.kaikeba.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors"
}).then(ret=>ret.json())
}

function getm3u8(mediaid,token){
    return fetch(`https://api-vod.baoshiyun.com/vod/v1/platform/media/detail?mediaId=${mediaid}&accessToken=${token}`, {
        "headers": {
          "accept": "*/*",
          "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7,ko;q=0.6",
          "content-type": "application/json;charset=UTF-8",
          "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site"
        },
        "referrer": "https://learn.kaikeba.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors"
      }).then(res=>res.json())
}

// data.data.chapter_list.forEach(chapter=>{
//     chapterids.push(chapter.chapter_id)
//     console.log(chapter.chapter_name,chapter.chapter_id)
//     chapter.section_list.forEach(section=>{
//         console.log('---' ,section.section_id)
//         section.group_list.forEach(g=>{
//             console.log('------',g.group_id,g.group_name)
//         })
//     })
// })
// console.log(chapterids)