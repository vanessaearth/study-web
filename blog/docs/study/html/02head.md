#### Head

在页面加载完成的时候，head 标签里的内容，是不会在页面中显示出来的。它包含了诸如页面的 <title>（标题）、指向 CSS 的链接（如果你选择用 CSS 来为 HTML 内容添加样式）、指向自定义图标的链接和其它的元数据（描述 HTML 的数据，比如，作者和描述文档的重要关键词）等信息。本文将涵盖上述内容并拓展，为您对标记的使用打下一个良好的基础。

HTML <head> 元素与 <body> 元素不同，它的内容不会在浏览器中显示，它的作用是保存页面的一些元数据。
1.title
2.meta,指定你的文档中字符的编码,指定作者，指定描述符

```html
<meta charset="utf-8">
<meta name="author" content="Chris Mills">
<meta name="description" content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing web sites and applications.">
```