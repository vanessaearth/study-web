### 4.vue的生命周期钩子函数

vue2生命周期|vue3生命周期|描述
- | - | -
beforeCreate | beforeCreate | 组件实例创建之前，this不能使用，data下的数据，methods下的方法，watcher中的事件都不能获取
created | created | 组件实例已经完全创建，可以使用data,methods，不能对dom节点进行操作
beforeMount | beforeMount | 组件挂载之前，相关的render函数首次被调用
mounted | mounted | 组件挂载到实例上后，dom节点可以访问
beforeUpdate | beforeUpdate | 组件data数据已经更新完毕，页面视图还未响应更改
updated | updated | 数据和视图都更新完毕
beforeDestroy | $\color{#FF0000}{beforeUnmount}$ | 组件实例销毁之前，实例上的事件，指令等都还可以使用,可用于一些定时器或订阅的取消
destroyed | $\color{#FF0000}{unmounted}$ | 组件实例销毁之后，数据，指令等销毁完毕,可清理它与其它实例的连接，解绑它的全部指令及事件监听器
activated | activated | keep-alive 缓存的组件激活时
deactivated | deactivated | keep-alive 缓存的组件停用时调用
errorCaptured | errorCaptured | 捕获一个来自子孙组件的错误时被调用
- | $\color{#FF0000}{renderTracked}$  | 调试钩子，响应式依赖被收集时调用
- | $\color{#FF0000}{renderTriggered}$  | 调试钩子，响应式依赖被触发时调用
- | $\color{#FF0000}{serverPrefetch}$  | ssr only，组件实例在服务器上被渲染前调用

![image](https://v3.cn.vuejs.org/images/lifecycle.svg)

父子组件生命周期,父组件先创建，但是子组件先挂载，父组件再挂载
```
parent beforeCreate
parent created
parent beforeMount
  child beforeCreate
  child created
  child beforeMount
  child mounted
parent mounted
```

1.setup和created谁先执行？
setup中为什么没有beforeCreate和created？

vue3中生命周期的派发时刻：

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/componentOptions.ts#L567-L569

vue2中声明周期的派发时刻：

https://github1s.com/vuejs/vue/blob/HEAD/src/core/instance/init.js#L55-L56