##### 7.双向绑定的使用和原理，v-model如何实现？
vue中双向绑定时一个指令v-model,可以绑定一个响应式数据到视图，视图更新改变数据
v-model本质上的v-on和v-bind的语法糖，相当于:value和@input,使用v-model可以减少大量繁琐的事件处理代码，提高开发效率
v-model的内部为不同元素抛出不同事件  
  - text和textarea元素使用value属性和input事件
  - checkbox和radio使用checked属性和change事件
  - selected使用value属性和change事件

v-model用在普通表单上：
```js
<input v-model="myValue" />
// 等同于
<input v-bind:value="myValue" v-on:input="myValue=$event.target.value"/>
```
v-model用在组件上：

我们可以使用v-model属性来配置子组件接收的prop名称，以及派发的事件的名称

```html
<!--  父组件 -->
<child v-model="myValue"></child>
<child :value="myValue" @input="(e)=>{myValue=e}"></child>
<child :value="myValue" @inputFn="(e)=>{myValue=e}"></child>
<!--  子组件 -->
<template>
<input :value="value" @input="$emit('inputFn',$event.target.value)">
</template>
<script>
  export default {
    props：{
      value:{required:true,type:String}
    },
    model:{
      props:'value',
      event: 'inputFn'
    }

  }
</script>
```

2. v-model和sync修饰符有什么区别
sync的监听属性更新方法时固定的@update:var
```html
<!-- 父组件 -->
 <com1 :a.sync="num" ></com1>
 <!-- 等价于 -->
 <com1 :a="num" @update:a="val=>num=val"></com1>
 <!-- 子组件 -->
 <template>
   <div>
   <button @click="$emit('update:a',a+1)">
   </div>
 </template>
 <script>
   export default {
     props:{a:{type:NUmberm,required:true}}
   }
 </script>
 ```

 