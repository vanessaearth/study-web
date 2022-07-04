#### 17.如何定义动态路由？如何获取传过来的动态参数？
1. 很多时候我们需要将给定匹配模式的路由映射到同一个组件，这种情况需要定义动态路由
2. 比如我们有一个文章详情ArticalDetail组件，但是每篇文章的ID不同，在vue Router中我们可以在路径中使用动态字段来实现，如：{ path: '/artical-detail/:id', component: ArticalDetail },其中：id就是路径参数
3. 路径参数使用：表示，当一个路由被匹配时，他的params的值将在每个组件中以this.$route.params的形式暴露出来
4. 参数还可以有多个/artical-detail/:id/:type,$route还有其他有用的信息，如$route.query,$route.hash


源码解析：
如何响应动态路由参数的变化
https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96

我们如何处理404 Not Found路由
https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E6%8D%95%E8%8E%B7%E6%89%80%E6%9C%89%E8%B7%AF%E7%94%B1%E6%88%96-404-not-found-%E8%B7%AF%E7%94%B1


2. 如何自己实现vue路由
  vue路由要解决的问题是，点击跳转链接内容切换，页面不刷新
  首先定义createRouter函数，返回路由实例，实例内部做以下事情：
     1. 保存用户传入的配置项
     2. 监听hashChange或popstate事件
     3. 回调里根据path匹配对应路由
  将router定义为一个Vue插件，实现install方法，内部做2件事
    - 实现2个全局组件，router-link，router-view，分别实现页面跳转和页面展示
    - 定义2个全局变量，route和router,组件内可以访问当前路由和路由实例
  
源码解析：
createRouter如何创建实例
https://github1s.com/vuejs/router/blob/HEAD/src/router.ts#L355-L356

事件监听
https://github1s.com/vuejs/router/blob/HEAD/src/history/html5.ts#L314-L315 RouterView

页面跳转RouterLink
https://github1s.com/vuejs/router/blob/HEAD/src/RouterLink.ts#L184-L185

内容显示RouterView
https://github1s.com/vuejs/router/blob/HEAD/src/RouterView.ts#L43-L44