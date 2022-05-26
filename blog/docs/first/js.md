

# js-one

## 5.如何中断ajax请求
 原生里可以通过XMLHttpRequest对象上是abort方法来终端ajax
 ::: tip 特别提醒
 注意：abort方法不能阻止发送请求，只能停止当前
 :::

``` html 

<body>
    <h1>标题</h1>
    <button class="requestBtn" >请求</button>
    <button class="stopBtn">停止</button>
    <script>
        let xhr=new XMLHttpRequest()
        let requestBtn=document.querySelector('.requestBtn')
        requestBtn.onclick=function(){
            xhr.open('get','/api',true)
            xhr.onload=function(){
                console.log(xhr.responseText)
            }
            xhr.send()
        }
        let stopBtn=document.querySelector('.stopBtn')
        stopBtn.onclick=function(){
            console.log('停止请求')
            xhr.abort()
        }
    </script>
</body>
```
## 6.什么是同步？什么是异步？
答：同步异步是一种消息通知机制
同步阻塞：A调用B,B处理获得结果，返回给A,A在这个过程中，一直等待B的处理结果，拿到结果后才继续往下执行
异步非阻塞：A调用B,不需要等待B的结果，B通过状态/通知等来通知A

## 7.什么是宏任务？什么是微任务？

答：微任务：一个需要异步执行的函数，执行时机是在主函数执行结束之后，当前宏任务介素之前

宏任务：宏任务的颗粒度比较答，执行的时间间隔是不能精确控制的，对一些高实时性的需求不太符合

常见的微任务：
* 1.promise.then
* 2.MutationObserver
* 3.Object.observe(已废弃)
* 4.process.nextTick(node.js)
  
常见的宏任务：
* 1.script
* 2.setTimeout/setInterval
* 3.UI rendering/UI事件
* 4.postMessage,MessageChanel
* 5.setImmediate,I/O(node.js)
```js
  console.log(1)
        let p=new Promise(resolve=>{
            console.log(2)
            resolve(3)
        })
        p.then(()=>{
            console.log(4)
        }).then(()=>{
            console.log(444)
        })
        setTimeout(()=>{
            console.log(5)
        })
        console.log(6)
       // 1-2-6-4-444-5
```
## 8.什么是回调？回调中存在什么问题？
答：回调是函数指针的调用，即一个通过函数指针调用的函数，
函数的参数是一个方法名，函数的内容是参数方法的执行，如下

```js
function foo(callback){
  callback&&callback()
}
foo(()=>{
  console.log('这里是回调函数！！！)
})

```
使用回调函数的缺点是造成回调地狱，回调地狱是为了实现某些逻辑事件的层层嵌套，
回调地狱会造成可读性和维护性变差，嵌套函数的耦合性强，如果出现错误不好处理错误。
解决回调地位可以通过观察者模式，promise，async和await处理
```js
move(el,300,'right',function(){
  move(el,300,'bottom',function(){
    move(el,300,'left',function(){
      move(el,300,'top',function(){
        console.log('运动完毕！！！')
      })
    })
  })
})
```
## 9.promise.allSettle了解吗，动手实现一个Promise.allSettled
Promise.allSettled是ES2020新特性，可以执行多个promise特性，获取多个promise的对象状态，无论成功或失败的状态

```js
  let p1 = new Promise((res, rej) => {
      setTimeout(() => {
        res(111)
      }, 1000)
    })
    let p2 = new Promise((res, rej) => {
      setTimeout(() => {
        rej(222)
      }, 1000)
    })
    let p3 = new Promise((res, rej) => {
      setTimeout(() => {
        res(333)
      }, 1000)
    })
    // 拿到resove结果，有一个reject就拿不到所有结果
    Promise.all([p1, p2]).then(res => {
      console.log('all', res)
    })
    // 拿到所有状态的结果
    Promise.allSettled([p1, p2, p3]).then(res => {
      console.log('allSettled', res)
    })
    function mySettled(lists) {
      let resArr = new Array(lists.length)
      let num = 0
      return new Promise(resolve => {
        lists.forEach((item, key) => {
          item.then(res => {
            let obj = {
              status: 'fullfilled',
              value: res
            }
            resArr[key] = obj
            num++
            if (num === lists.length) {
              resolve(resArr)
            }
          }, err => {
            let obj = {
              status: 'rejected',
              reason: err
            }
            resArr[key] = obj
            num++
            if (num === lists.length) {
              resolve(resArr)

            }
          })
        });
      })
    }
    mySettled([p1, p2, p3]).then(res => {
      console.log('mySettled', res)
    })
```

## 10.http中状态码
2XX 成功
200 ok 表示客户端发起的请求在服务器端被正确处理
204 no content 请求成功，但是相应报文不含实体的主体部分
205 reset content 请求成功，但是相应报文不含实体的主体部分，但是与204的相应不同在与要求请求放重置内容
206 partial content 进行范围请求

3XX 重定向
* 301 move permanently 永久性重定向，资源被分配了新的URL
* 302 found 临时性重定向 资源临时被分配了新的URL
* 302 see other 资源存在另一个URL，应使用get方法获取资源
* 304 not modified 服务器允许访问资源，但因发生请求未满足条件的情况
* 307 temporary redirect 临时重定向 和302含义类似，但是希望客户端保持请求方法不变项新的地址发送请求

4XX 客户端错误
* 400 bad request 请求报文存在语法错误
* 401 unauthorized 表示发送的请求需要有通过http认证的认证信息
* 403 forbidden 请求资源的访问被服务器拒绝
* 404 not found 表示服务器上没找到访问的资源
  
5XX服务器错误
* 500 internal server error 服务器在执行请求时候发生了错误
* 501 not implemented 服务器不支持当前请求所需要的某个功能
* 503 service unavailable 服务器暂时处于超负载或正在停机维护，无法处理请求
   
## 11. xss攻击
  配置安全域名，白名单，
  vue中不使用v-html
  将输入内容转译

## 12.浏览器为什么要阻止跨域，如何解决跨域？每次跨域请求，怎么才能到达服务器？

浏览器的同源策略，出于安全考虑，协议，域名，端口必须完全一致才是同源
非同源会造成以下问题：
* 1.无法获取cookie，localStorage indexedDB
* 2.无法访问页面中dom
* 3.无法发送网络请求
解决跨域的方法：
* 1.jsonp,image的src,script的src
* 2.postMessage
* 3.跨域资源共享(CORS)
* 4.nginx反向代理
* 5.nodejs中间件正向代理
* 6.websocket协议跨域
```js
//5.koa-server-http-proxy
const koaProxy=require('koa-server-http-proxy')
app.use(koaProxy('/api',{
  target:'http://localhost:4000',
  pathRewrite:{'^/api',''}
}))
app.listen(3000)
//3.设置cors
router.get('/getUser',ctx=>{
  //会造成预检请求
  ctx.set('Access-Control-Allow-Origin','*')
})
//2.postMessage
//4000.html
let iframe=document.querySelector('iframe')
iframe.onload=function(){
  let data={name:'tom'}
  iframe.contentWindow.postMessage(JSON.stringify(data),'http://localhost:3000')
}
//3000.html
window.addEventListener('message',e=>{
  console.log('message',e)
})
```

跨域是浏览器出于安全策略阻止非同源的请求，但是每次跨域请求失去都是正常发送的，服务器也会正常返回，是指被浏览器拦截起来了，所以每次跨域请求都会到底服务器

## 13.token一般存放在哪里？存放在cookie,localStorage,sessionStorage中区别
jwt:JSON Web token,一般放在localStorge中
正确登录后返回token，api请求时候，头部携带token
locastorage中：灵活，空间大，会引起xss攻击，每次请求需要设置request-header中加一个属性
cookie:每次请求会自动携带，http-only csrf跨站伪造信息，cookie不符合restful规范，无状态


## 14.websocket
$on
$emit


## 15.客户端缓存有几种方式？出现from disk,from memory的策略是什么？
f12需要不勾选：disable cache
1.强缓存
服务器端做cache-control，请求的size列会显示disk
```js
ctx.set('Cache-control','max-age=3600')//设置缓存事件3600S

```
2.协商缓存
responese-header:Last-Modified
request-header: If-modified-since
```js
ctx.set('Last-Modified',mtime)//设置缓存事件3600S
```

## 16.

## 17.防抖和节流分别是什么，分别是什么，请分别实现一个防抖和节流函数
```js
//防抖debounce：事件触发后的n秒之后，再去执行真正需要执行的函数，如果在这几秒之内事件又被触发，则重新开始计时
const debounce=(fn,delay=500)=>{
  let timer
  return (...args)=>{
    clearTimeout(timer)
    setTimeout(()=>{
      fn.apply(this,args)
    },delay)
  }
}
// 节流throttle:g规定好一个单位时间，触发函数一次，如果在这个单位时间内触发多次的话，只有一次是被执行的，如果项执行多次的话，只能等到下个周期里
const throttle=(fn,delay=500)=>{
  let timer
  return (...args)=>{
    if(timer){
      timer=setTimeout(()=>{
        timer=null
        fn.apply(this,args)
      },delay)
    }

  }
}
```

## 18.

## 19.

## 20.
## 21.

