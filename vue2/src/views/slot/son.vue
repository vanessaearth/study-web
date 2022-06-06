
<template>
  <div>
   user-name: {{user.name}},
   user-age: {{user.age}},
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
