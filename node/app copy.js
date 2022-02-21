/*
 * @Autor: yangjin
 * @Date: 2021-09-22 09:24:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-22 10:19:20
 * @Description: 
 */
const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer()
server.on('request', (req, res) => {
    const urlObj = url.parse(req.url)

    // 制定url方案，区分静态资源和动态资源
    if (urlObj.pathname.startsWith('/static')) {
        try {
            let lastPointIndexOf = urlObj.pathname.lastIndexOf('.')
            let suffix = urlObj.pathname.substring(lastPointIndexOf)
            console.log('*********', suffix)

            let content = fs.readFileSync(`./${urlObj.pathname}`)
            switch (suffix) {
                case '.html':
                    res.setHeader('Content-type', 'text/html;chartset=utf-8'); break;
                case '.css':
                    res.setHeader('Content-type', 'text/css;chartset=utf-8'); break;
                case '.png':
                    res.setHeader('Content-type', 'image/png'); break;
                default: res.setHeader('Content-type', 'text/plain'); break;
            }
            res.end(content)
        } catch (e) {
            console.log(e)
            // 静态资源，每次返回的都是一样的
            // res.end('hello')
            // 动态资源,每次返回的内容不一样
            // 返回在资源必须是字符串，所以需要加空串
            res.end(new Date() + '')
            res.end('没找到静态资源')
        }
    } else {
        if (urlObj.pathname === '/now') {
            res.end(Date.now().toString())
        }

    }
    //         let content=fs.readFileSync(`./resources${urlObj.pathname}`).toString()
    //         res.end(content)
})
server.listen(8888, () => {
    console.log('启动啦')
})