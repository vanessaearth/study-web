
#### 安装依赖：
"@ffmpeg-installer/ffmpeg": "^1.1.0",
"download": "^8.0.0",
"fluent-ffmpeg": "^2.1.2",
"node-fetch": "^2.6.2"

getM3u8.js中修改token和courseId
 - courseid 在后台打开某个课程，url中一串数字
 - token，查看任意xhr请求，查看request header中authorization的pc:后面的字符串
 - node getM3u8.js后会在当前目录新建一个json文件 
download.js 修改name为json文件的文件名
 - node download.js 后会在当前目录新建一个课程名的目录放下载的文件

