const Koa=require('koa')
const Router =require('koa-router')
const Static =require('koa-static')
const app=new Koa()
app.use(Static(__dirname+'/static'))
const router =new Router()
router.get('/api',ctx=>{
    let obj={
        name:'tom',
        age:1
    }
    ctx.body=obj
})
app.use(router.routes())
app.listen(8989)