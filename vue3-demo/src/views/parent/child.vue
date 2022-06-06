<template>
  <div>
<h2>{{msg || 'no value'}}</h2>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  foo: String
})
</script>

<style lang="scss" scoped>

</style>
