<template>
  <div>
    <Child :msg="msg" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Child from './child.vue'

const msg = ref('hi')
</script>

<style lang="scss" scoped>
</style>
