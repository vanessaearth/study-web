### 5.computed和watch区别
computed特点：具有响应式的返回值
computed是计算属性，依赖其他属性计算，并且computed的值有缓存，只有依赖项发生变化，才会返回新的值

watch特点：侦测变化，执行回调
watch 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作,watch对象课设置deep,immediate等选项

vue3中watch选项发生了一些变化，例如不再能侦测一个点操作符之外的字符串形式的表达式；reactivity API中新出现了watch、watchEffect可以完全替代目前的watch选项，且功能更加强大。

```js
 computed: {
    str(){
      return ''
    }
  },
  watch: {
    //字符串
    str(newValue, oldValue) {
      
    },
    //对象
    data2: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        
      }
    }
  }
```
源码解读：
computed的实现

https://github1s.com/vuejs/core/blob/HEAD/packages/reactivity/src/computed.ts#L79-L80

ComputedRefImpl

https://github1s.com/vuejs/core/blob/HEAD/packages/reactivity/src/computed.ts#L26-L27

缓存性

https://github1s.com/vuejs/core/blob/HEAD/packages/reactivity/src/computed.ts#L59-L60

https://github1s.com/vuejs/core/blob/HEAD/packages/reactivity/src/computed.ts#L45-L46

watch的实现

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/apiWatch.ts#L158-L159