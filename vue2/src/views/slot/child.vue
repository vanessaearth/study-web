<template>
  <div>
    <slot>默认内容</slot>
    <br />
    <slot name="kaka">具名插槽默认内容</slot>
    <div>user-name: {{ user.name }}, user-age: {{ user.age }}</div>
    <ElButton @click="changeName">改变username</ElButton>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    changeName () {
      this.user = { name: 'jerry' }
      // this.user.name = 'jerry'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
