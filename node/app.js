/*
 * @Autor: yangjin
 * @Date: 2021-09-22 09:24:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-30 10:17:48
 * @Description: 
 */
const Koa= require('koa')
const app =new Koa()
const whileList=[
    'http://localhost:8888',
    'http://localhost:9999'
]
app.use(async(ctx,next)=>{
    if(whileList.includes(ctx.request.origin)){
        ctx.set('Access-Coutrol-Allow-Origin',ctx.get('origin'))
        ctx.set('Access-Coutrol-Allow-Credentials',true) 
    }
})

server.listen(8888, () => {
    console.log('启动啦')
})