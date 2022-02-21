const Koa = require('koa')
const Router =require('koa-router')
const static = require('koa-static')
const bodyParse = require('koa-bodyparser')

const app = new Koa()
const router =new Router()

app.use(bodyParse())
app.use(static(__dirname+'/'))

const conf=require('./config')
const wechat= require('co-wechat')
router.all('/wechat',wechat(conf),middleware(
  async message=>{
    console.log('wechat',message)
    return 'hello'+message.Content
  }
))

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000,()=>{
  console.log('listen at 3000')
})