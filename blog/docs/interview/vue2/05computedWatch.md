### 5.computed和watch区别
computed是计算属性，依赖其他属性计算，并且computed的值有缓存，只有依赖项发生变化，才会返回新的值

watch 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作

```js
 computed: {
    str(){
      
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