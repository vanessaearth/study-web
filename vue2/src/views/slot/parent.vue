<template>
  <div>
    <Child :user="user">
      <div>父组件默认插槽内容</div>
      <template #kaka> 父组件具名插槽内容 </template>
    </Child>
    <Son :user="user"></Son>
  </div>
</template>

<script>
import Child from './child.vue'
import Son from './son.vue'
export default {
  components: {
    Child, Son
  },
  data () {
    return {
      user: {
        name: 'tom',
        age: 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
