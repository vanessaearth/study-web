#### 媒体元素
1. 视频video,
   属性：
   width，height宽高
   autoplay，自动播放
   loop，循环
   muted，静音
   poster,海报
   preload，缓冲较大的文件，有 3 个值可选：
      "none" ：不缓冲
      "auto" ：页面加载后缓存媒体文件
      "metadata" ：仅缓冲文件的元数据
  

  ```html
  <video controls>
  <source src="rabbit320.mp4" type="video/mp4">
  <source src="rabbit320.webm" type="video/webm">
  <p>你的浏览器不支持 HTML5 视频。可点击<a href="rabbit320.mp4">此链接</a>观看</p>
  <!-- 字幕 -->
    <track kind="subtitles" src="subtitles_en.vtt" srclang="en">
</video>
  ```
2.音频audio
除了width,height.poster，其他属性和video一样
3.矢量图片svg
```html
<!-- demo.svg -->
  <svg width="100%" height="100%">
    <rect width="100%" height="100%" fill="red" />
    <circle cx="100%" cy="100%" r="150" fill="blue" stroke="black" />
    <polygon points="120,0 240,225 0,225" fill="green"/>
    <text x="50" y="100" font-family="Verdana" font-size="55"
          fill="white" stroke="black" stroke-width="2">
            Hello!
    </text>
  </svg>
  <!-- index.html -->
<img
    src="demo.svg"
    alt="triangle with all three sides equal"
    height="87px"
    width="100px" />
```