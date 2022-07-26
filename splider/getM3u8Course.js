const fetch = require('node-fetch')
const fs = require('fs')

let final = {
  courseName: "",
  section: []
}
let n = 1

async function start() {
  let all = []
  //fulls.json前面的串
  let courseid = '54dd84c8-9a97-4915-8bf5-efe208be80b1' // 课程详情的id
  let courseInfo = await getCourse(courseid)

  final.courseName = courseInfo.activity_set_name
  console.log('filename:', final.courseName)

  while (courseInfo.nodes.length) {

    let chapterInfo = courseInfo.nodes.shift()
    let s = {
      name: chapterInfo.node_name
    }
    let si = 0

    while (chapterInfo.child_nodes && chapterInfo.child_nodes.length) {
      let one = chapterInfo.child_nodes.shift()

      let chapterDetail = await getChapterDetail(one.node_id)
      let i = 0
      let host = 'https://r1-ndr.ykt.cbern.com.cn'

      while (chapterDetail.length) {
        let oneDetail = chapterDetail.shift()
        if (oneDetail.resource_type === 'document') {
          let name = oneDetail.document_extend.title
          let url = oneDetail.document_extend.files[2].file_urls[0]
          let type = oneDetail.document_extend.files[2].type
          final.section.push({
            name: s.name + '-' + (si + 1) + '-' + (i + 1) + '-' + name+ '.' + type,
            url: host + url,
            type: "download"
          })
        }
        if (oneDetail.resource_type === 'video') {
          let name = oneDetail.video_extend.title
          let url = oneDetail.video_extend.urls[2].urls[0]

          final.section.push({
            name: s.name + '-' + (si + 1) + '-' + (i + 1) + '-' + name,
            url: url,
            type: "video",
          })
        }
        i++
      }
      si++
    }
  }


  setTimeout(() => {
    fs.writeFileSync(`./${final.courseName}.json`, JSON.stringify(final, null, 2), 'utf-8')
    console.log(`finish ${final.courseName}.json`)
  }, 10000)
}
start()

async function sleep(n) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, n * 1000)
  })
}


function getChapterDetail(nodeId) {
  return fetch(`https://s-file-1.ykt.cbern.com.cn/zxx/s_course/v1/x_class_hour_activity/${nodeId}/resources.json`)
    .then(res => res.json())
}
async function getCourse(courseid) {
  let now = new Date().getTime()
  return fetch(`https://s-file-1.ykt.cbern.com.cn/zxx/s_course/v2/activity_sets/${courseid}/fulls.json`)
  .then(ret => ret.json())
}



