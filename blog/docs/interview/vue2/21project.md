#### 21.从0到1自己构架一个vue项目，说说有哪些步骤、哪些重要插件、目录结构

1. 从0创建一个项目我大致会做以下事情：项目构建、引入必要插件、代码规范、提交规范、常用库和组件

2. 目前vue3项目我会用vite或者create-vue创建项目

3. 接下来引入必要插件：路由插件vue-router、状态管理vuex/pinia、ui库我比较喜欢element-plus和antd-vue、http工具我会选axios

4. 其他比较常用的库有vueuse，nprogress，图标可以使用vite-svg-loader

5. 下面是代码规范：结合prettier和eslint即可

6. 最后是提交规范，可以使用husky，lint-staged，commitlint

7. 目录结构我有如下习惯：.vscode：用来放项目中的 vscode 配置

- plugins：用来放 vite 插件的 plugin 配置

- public：用来放一些诸如 页头icon 之类的公共文件，会被打包到dist根目录下

- src：用来放项目代码文件

- api：用来放http的一些接口配置

- assets：用来放一些 CSS 之类的静态资源

- components：用来放项目通用组件

- layout：用来放项目的布局

- router：用来放项目的路由配置

- store：用来放状态管理Pinia的配置

- utils：用来放项目中的工具方法类

- views：用来放项目的页面文件

#### 最佳实践：
查看vue官方文档：

风格指南：https://vuejs.org/style-guide/

性能：https://vuejs.org/guide/best-practices/performance.html#overview

安全：https://vuejs.org/guide/best-practices/security.html

访问性：https://vuejs.org/guide/best-practices/accessibility.html

发布：https://vuejs.org/guide/best-practices/production-deployment.html


1. 编码风格方面：
命名组件时使用“多词”风格避免和HTML元素冲突
使用“细节化”方式定义属性而不是只有一个属性名
属性名声明时使用“驼峰命名”，模板或jsx中使用“肉串命名”
使用v-for时务必加上key，且不要跟v-if写在一起
2. 性能方面：
路由懒加载减少应用尺寸
利用SSR减少首屏加载时间
利用v-once渲染那些不需要更新的内容
一些长列表可以利用虚拟滚动技术避免内存过度占用
对于深层嵌套对象的大数组可以使用shallowRef或shallowReactive降低开销
避免不必要的组件抽象
3. 安全：
不使用不可信模板，例如使用用户输入拼接模板：template: <div> + userProvidedString + </div>
小心使用v-html，:url，:style等，避免html、url、样式等注入