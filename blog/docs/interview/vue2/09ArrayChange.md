### 9.vue2检查不到数组的变化，如何解决？
由于js的限制，vue不能检测到数组的变动  
Vue2中采用Object.defineProperty来实现数据响应式，  
Object.defineProperty虽然可以监听数组的变化，但是由于性能和体验的性价比上考虑，Vue2放弃了这个特性

以下方法可以检测数组变化：  
1. 使用全局的Vue.set或this.$set()来修改
2. 使用变异方法来实现  
  - push
  - pop
  - shift
  - unshift
  - splice
  - sort
  - reverse