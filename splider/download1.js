// var ffmpeg = require('fluent-ffmpeg')

const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

const path = require('path')

const fs = require('fs');
const download = require('download');
const { on } = require('stream');

function xRequire(path){
  return JSON.parse(fs.readFileSync(path))
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

const name = "米堆听书"
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
    // console.log(p1)
    // console.log()
    if(item.type==="download"){
      fs.writeFileSync(p1,await download(item.url))
      start()
    }else if(item.type==="video"){
      let per = 0
      ffmpeg(item.url).outputOptions([])
        .on('start',str=>console.log('start',str))
        .on('progress',progress=>{
          if(progress.percent-per>10){
            console.log(progress.percent,'%')
            per = progress.percent
          }
        })
        .on('end',str=>{
          console.log('结束')
          start()
        })
        .on('error',(err, stdout, stderr)=>{
          console.log('Cannot process video: ' + err.message)
          start()
        })
        .save(p1+'.mp4')
    }

  }else{
  console.log('over')

  }
}


// const files = fs.readdirSync('./','utf-8')
//           .filter(v=>v.endsWith('.json')&&!v.startsWith('pack'))
//           .map(v=>v.replace('.json',''))
// console.log(files)


