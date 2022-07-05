#### 14.vue响应式理解
1.数据变化能够被检测并对这种变化做出响应的机制  
2.MVVM框架种要解决的核心问券是连接数据层和视图层，通过数据驱动应用，数据变化，视图更新，要做到这点就徐娅对数据做响应式的处理，这样数据一旦发生变化立即可以做出更新处理
3.通过数据响应式加上虚拟DOM和patch算法，开发人员只需要操作数据，关心业务，完全不用接触繁琐的DOM操作，从而提升开发效率，降低开发难度。
4.Vue2中数据响应式会更加数据类型做不同的处理，如果是对象采用Object.defineProperty()的方式定义数据拦截，当数据被访问或发生变化时，我们感知并作出响应，如果是数组则通过覆盖数组对象原型的7个变更方法，使这些方法可以额外的做更新通知，从而做出响应。缺点：初始化时候的递归遍历早曾性能损失，新增和删除属性需要使用特殊Vue.set,Vue.delete这种特殊api，对于es6中新产生的Set,Map这些数据结构不支持
5.为了接口这些问题，vue3重写了这一部分的实现，利用ES6的proxy代理要响应化的数据，不需要使用特殊的set,delete这样的api，初始化性能和内存消耗也得到大幅改善，响应化代码抽取为独立的reactivity包，使用更加灵活