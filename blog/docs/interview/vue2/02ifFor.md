### 2.v-if和v-for
1. v-if和v-for的区别
v-show是在css的displlay属性：none和block之间切换，dom都会被渲染出来

v-if是vue底层的编译，当初始值为false，组件不会被渲染，直到条件为true,才渲染组件，切换条件触发组件的销毁/挂载
v-if可以减少整个页面初始渲染开销


2. v-if和v-for为什么不能连用

Vue2中，v-for比v-if的优先级更高，会先执行v-for，如果每次需要遍历整个数组，将会影响速度，尤其渲染很小一部分的时候
可以采取多层包裹来解决性能损耗的问题，如外层加一层标签绑定指令v-if或内层标签使用v-if

Vue3中，完全相反，v-if优先级更高，一起用，v-if调用的变量不存在，会导致异常

Vue2源码： src/compiler/codegen/index.js#L65-L66
https://github1s.com/vuejs/vue/blob/HEAD/src/compiler/codegen/index.js#L65-L66

Vue3源码：
https://github1s.com/vuejs/core/blob/HEAD/packages/compiler-core/src/codegen.ts#L586-L587