#### 16.vue3的新特性

1. api层面vue3新特性主要包括
  Composition API
  SFC Composition API语法糖
  Teleport传送门
  Fragments片段
  Emits选项
  自定义渲染器
  SFC CSS变量
  Suspense
2. 框架层面的改变
 - 更快：虚拟dom的重写，编译器优化，静态提升，patchFlags,block等  
 - 更小： 更好的摇树优化
 - 更通用维护：typescript+模块化
 - 更容易维护：独立的响应化模块化，自定义渲染器
 


 体验编译器优化

https://sfc.vuejs.org/

reactive实现

https://github1s.com/vuejs/core/blob/HEAD/packages/reactivity/src/reactive.ts#L90-L91