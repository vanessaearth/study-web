const http=require('http')
const server=http.createServer((req,res)=>{
  res.setHeader('COntent-type','text/html;charset=utf-8')
  res.end('这里是返回的数据')
})
server.listen(8000,()=>{
  console.log('listen 8000')
})