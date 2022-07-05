
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
const path = require('path')

const fs = require('fs');
const download = require('download');
const { on } = require('stream');

function xRequire(path){
  return JSON.parse(fs.readFileSync(path))
}
Date.prototype.Format = function (fmt) {
  var o = {
    'Y': this.getFullYear() + 1,
    'M': this.getMonth() + 1,
    'd': this.getDate(),
    'H': this.getHours(),
    'm': this.getMinutes(),
    's': this.getSeconds(),
    'S': this.getMilliseconds()
  };
  return `${o.Y}-${o.M}-${o.d} ${o.H}:${o.m}:${o.s}`
}
async function sleep(n){
  return new Promise(resolve=>{
      setTimeout(()=>{
          resolve()
      },n*1000)
  })
}


// init()
let i = 0

// const name = "XX课"
const name="web前端高级工程师021期"
const data = xRequire(path.resolve(__dirname, name+'.json'))
start()





async function start(){
  i++
  if(!fs.existsSync(name)){
    console.log('创建目录')
    fs.mkdirSync(name)
  }
  // console.log(data)
  if(data.section.length){
    const item = data.section.shift()
    const p1 = path.resolve(__dirname,name,String(i).padStart(3,'0')+item.name)
    console.log('file-name:', item.name)

    fs.access(p1 + '.mp4', fs.constants.F_OK,async (err) => {
      if (err) {
        console.log('不存在')
        if(item.type==="download"){
          fs.writeFileSync(p1,await download(item.url))
          start()
        }else if(item.type==="video"){
          let per = 0
          ffmpeg(item.url).outputOptions([])
            .on('start',str=>{
              console.log('\x1B[31m开始：\x1B[0m',str)
            })
            .on('progress',async (progress)=>{
              if(progress.percent-per>10){
                console.log(progress.percent,'%')
                per = progress.percent
              }

            })
            .on('end',str=>{
              console.log('\x1B[33m%s\x1b[0m:', `结束: ${new Date().Format('yyyy-MM-dd HH:mm:ss')}`);
              start()
            })
            .on('error',(err, stdout, stderr)=>{
              console.log('Cannot process video: ' + err.message)
              start()
            })
            .save(p1+'.mp4')
        }
      } else {
        console.log('存在')
        start()
      }
    })

  }else{
  console.log('over')

  }
}


// const files = fs.readdirSync('./','utf-8')
//           .filter(v=>v.endsWith('.json')&&!v.startsWith('pack'))
//           .map(v=>v.replace('.json',''))
// console.log(files)


