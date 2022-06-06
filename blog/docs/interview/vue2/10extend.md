# 10.扩展组件
- 逻辑扩展有： mixins,extends, componsition api
- 内容扩展： slot

1. 混入mixins,是分发vue组件中可复用功能非常灵活的方式，混入对象可以包含任意组件选项，当组件使用混入对象时，所有混入对象的选项被混入到该组件中  
  
```js
const myMixin={
  method:{
    getData(){}
  }
}
// 全局混入
Vue.mixin(myMixin)
// 局部混入
const comp={
  mixins:[myMixin]
}
```
混入的数据和方法，不能明确判断来源，容易产生命名冲突，Vue3中引入componsitionApi可以很好的解决这个问题，利用独立出来的模块可以很方便的编写独立逻辑提供响应式的数据，然后再setup选项中组合使用，增强代码可读性和维护性
```js
// 复用逻辑1
function useXX() {}
// 复用逻辑2
function useYY() {}
// 逻辑组合
const Comp = {
   setup() {
      const {xx} = useXX()
      const {yy} = useYY()
      return {xx, yy}
   }
}
```

2. 插槽slot,主要用于Vue组件中内容的分发，也可扩展组件
```html
<!-- 父组件 -->
<div>
  <child>
    父组件内容
    <div #kaka>父组件具名插槽内容</div>
  </child>
</div>
<!-- 子组件child -->
<div>
  <slot>插槽默认内容</slot>
  <slot name="kaka">具名插槽默认内容</slot>
</div>
```
3. extends
```js
const myExtends={
  methods:{
    ...
  }
}
const comp={
  extends: myExtends
}
```
mixins原理：
vue3:
https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/apiCreateApp.ts#L236-L250
https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/componentOptions.ts#L545

slots原理：

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/componentSlots.ts#L129-L130

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/renderer.ts#L1373-L1374

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/helpers/renderSlot.ts#L23-L24