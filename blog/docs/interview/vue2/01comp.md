### 1.组件
1. 组件间通信
父子组件通信：props,$emit,$parent,ref,#attrs,Vue3废弃的有$on,$listeners,$children  
兄弟组件通信： $parent,$root  
跨层级通信： provide,inject  
任意组件通信： eventBus,vuex  

![image](../../imgs/tongxin.png)


2. Vue 子组件和父组件创建和挂载顺序
创建过程自上而下，挂载过程自下而上；即：
- parent created
- child created
- child mounted
- parent mounted
  因为Vue创建过程是一个递归过程，先创建父组件，有子组件就会创建子组件，因此创建时先有父组件再有子组件，子组件首次创建时候，会添加mounted钩子到队列等到patch结束再执行他们，可见子组件的mounted钩子时先进入到队列中，因此等到patch结束执行这些钩子时也先执行

源码解读：
观察beforeCreated和created钩子的处理

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/componentOptions.ts#L554-L555

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/componentOptions.ts#L741-L742

观察beforeMount和mounted钩子的处理

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/renderer.ts#L1310-L1311

测试代码，test-v3.html

3. 组件挂载的过程发生了什么？
  1.挂载过程是指app.mounted(),这个过程做了2件事，初始化和建立更新机制
  2. 初始化会创建组件实例，初始化组件状态，
  