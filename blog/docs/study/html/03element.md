# 元素 element
- #### 主根元素，html
- #### 元数据（Metadata）
  :含有页面的相关信息，包括样式、脚本及数据
  `<base>`,指定用于一个文档中包含的所有相对 URL 的根 URL。一份中只能有一个 `<base>` 元素。
  `<head>`,规定文档相关的配置信息（元数据），包括文档的标题，引用的文档样式和脚本等。
  `<link>`,HTML 外部资源链接元素 (`<link>`) 规定了当前文档与外部资源的关系,此外也可以被用来创建站点图标
  `<meta>`,不能由其它 HTML 元相关（meta-related）元素（(base、link, script、style 或 title）之一表示的任何Metadata信息。
  `<style>`,包含文档的样式信息或者文档的部分内容
  `<title>`,定义文档的标题
- #### 分区根元素,`<body>`,表示文档的内容
- #### 内容分区,
  允许你将文档内容从逻辑上进行组织划分。使用包括页眉 (header)、页脚 (footer)、导航 (nav) 和标题 (h1~h6) 等分区元素，来为页面内容创建明确的大纲
   `<address>`,提供了某个人或某个组织（等等）的联系信息。
   `<article>`,文档、页面、应用或网站中的独立结构
   `<aside>`,表示一个和其余页面内容几乎无关的部分,通常表现为侧边栏或者标注框（call-out boxes）
   `<footer>`,表示最近一个章节内容或者根节点（sectioning root ）元素的页脚。一个页脚通常包含该章节作者、版权数据或者与文档相关的链接等信息
   `<header>`,用于展示介绍性内容，通常包含一组介绍性的或是辅助导航的实用元素。它可能包含一些标题元素，但也可能包含其他元素，比如 Logo、搜索框、作者名称，等等。
   `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`, 标题 (Heading) 元素呈现了六个不同的级别的标题，`<h1>` 级别最高，而 `<h6>` 级别最低。
   `<main>`,呈现了文档的 body 或应用的主体部分
   `<nav>`,表示页面的一部分，其目的是在当前文档或其他文档中提供导航链接。导航部分的常见示例是菜单，目录和索引。
   `<section>`,表示一个包含在 HTML 文档中的独立部分，它没有更具体的语义元素来表示，一般来说会有包含一个标题。
- #### 文本内容
  使用 HTML 文本内容元素来组织在开标签 `<body>` 和闭标签 `</body>` 里的块或章节的内容。这些元素能标识内容的宗旨或结构，而这对于 accessibility 和 SEO 很重要。
   `<blockquote>`,引用内容
   `<div>`,一个通用型的流内容容器
   `<dl>`,键 - 值对列表,`<dl><dd></dd><dt></dt></dl>`
   `<dd>`,后面必须是dt
   `<dt>`,前面是dd
   `<figure>`,主文中引用的图片，插图，表格，代码段
   `<figcaption>`,是与其相关联的图片的说明/标题,父节点 figure 元素
   `<hr>`,横线
   `<menu>`，菜单
   `<pre>`，表示预定义格式文本
   `<p>`，表示文本的一个段落
   `<ul>`，无序列表或项目符号列表
   `<ol>`，有序列表
   `<li>`，列表里的条目
- #### 内联文本语义
  `<a>`,锚元素，如果存在 href 属性，当` <a> `元素聚焦时按下回车键就会激活它。
  `<abbr>`,缩写元素，可以设置title属性显示完整描述
  `<b>`,提醒注意元素，过去被认为粗体元素，不建议使用b作为粗体，粗体使用font-weight
  `<br/>`,换行（回车）符号
  `<cite>`,一个作品的引用
  `<code>`,一段计算机代码
  `<em>`,着重元素
  `<s>`,使用删除线来渲染文本
  `<small>`,使文本的字体变小一号
  `<span>`,通用行内容器
  `<strong>`,文本十分重要，一般用粗体显示
  `<sub>`,右下角
  `<sup>`,右上角
  `<u>`,下划线


- #### 图片和多媒体
`<audio>`音频
`<video>`视频
`<track>`,字幕
`<img>`图片
`<map>`,与 area 属性一起使用来定义一个图像映射 (一个可点击的链接区域)
`<area>`,在图片上定义一个热点区域，可以关联一个超链接,仅在`<map>`元素内部使用

- #### 内嵌内容
  `<iframe>`
  `<object>`
  `<picture>`
  `<source>`
- #### 脚本
  `<canvas>`,（Canvas API 或 WebGL API）绘制图形及图形动画。
  `<noscript>`,如果页面上的脚本类型不受支持或者当前在浏览器中关闭了脚本，则在 HTML `<noscript>` 元素中定义脚本未被执行时的替代内容。
  `<script>`
- #### 编辑标识
  `<del>`一些被从文档中删除的文字内容
  `<ins>`定义已经被插入文档中的文本。
- #### 表格内容
  `<table>`表格数据
  `<caption>`表格的标题
  `<colgroup>`表格列组
  `<col>`定义表格中的列,在colgroup内部
  `<thead>`表格的列头的行
  `<tbody>`
  `<tr>`行
  `<th>`表头单元格
  `<td>`表格单元格
  `<tfoot>`表格中各列的汇总行
- #### 表单
   `<form>`文档中的一个区域，此区域包含交互控件
   `<input>`文本框，单选，多选，文件，提交按钮
   `<textarea>`多行纯文本编辑控件
   `<select>`选项菜单的控件
   `<datalist>`包含了一组option元素，这些元素表示其它表单控件可选值。
   `<optgroup>`为select 元素中的选项创建分组。

   `<option>`用于定义在 select,  optgroup 或 datalist 元素中包含的项
   `<label>`某个元素的说明
   `<button>`可点击的按钮
   `<fieldset>`这个元素包含所有全局属性。
   `<legend>`用于表示其父元素 fieldset 的内容标题。
   `<meter>`用来显示已知范围的标量值或者分数值
   `<output>`表示计算或用户操作的结果。
   `<progress>`表示计算或用户操作的结果。

- #### 交互元素
  `<details>`创建一个挂件,仅在被切换成展开状态时，它才会显示内含的信息。summary 元素可为该部件提供概要或者标签。
  `<dialog>`一个对话框或其他交互式组件
  `<summary>`用作 一个details元素的一个内容的摘要，标题或图例
- #### Web 组件
   `<slot>` 占位符
   `<template>` 内容模板