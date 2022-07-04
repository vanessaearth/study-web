### 3.keep-alive组件有什么作用
1. 组件切换时候，保存一些组件的状态防止多次渲染，就可以用keep-alive组件包裹需要保存的组件

keep-alive拥有2个独立的生命周期，activated和deactived

keep-alive包裹的组件，在隐藏时候，不会被销毁，而是换成在内存中，并执行deactived钩子函数，组件显示出来，会触发actived构造函数

2. 结合属性include和exclude可以明确指定缓存哪些组件或排除缓存指定组件。vue3中结合vue-router时变化较大，之前是keep-alive包裹router-view，现在需要反过来用router-view包裹keep-alive：

```html
<router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component"></component>
  </keep-alive>
</router-view>
```

3. 缓存后如果要获取数据，解决方案可以有以下两种:
1.beforeRouteEnter：在有vue-router的项目，每次进入路由的时候，都会执行beforeRouteEnter
```js
beforeRouteEnter(to, from, next){
  next(vm=>{
    console.log(vm)
    // 每次进入路由执行
    vm.getData()  // 获取数据
  })
},
```
- actived：在keep-alive缓存的组件被激活的时候，都会执行actived钩子
```js
  activated(){
   this.getData() // 获取数据
},
```

4. keep-alive是一个通用组件，它内部定义了一个map，缓存创建过的组件实例，它返回的渲染函数内部会查找内嵌的component组件对应组件的vnode，如果该组件在map中存在就直接返回它。由于component的is属性是个响应式数据，因此只要它变化，keep-alive的render函数就会重新执行。

源码解读：
KeepAlive定义

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/components/KeepAlive.ts#L73-L74

缓存定义

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/components/KeepAlive.ts#L102-L103

缓存组件

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/components/KeepAlive.ts#L215-L216

获取缓存组件

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/components/KeepAlive.ts#L241-L242

测试缓存特性，test-v3.html