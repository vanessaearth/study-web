<template>
  <div>diff-key
    <div v-for="item in list" :key="item" >{{item}}</div>
    <button @click="insertData">insert</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: ['A', 'B', 'C', 'D', 'E', 'F']
    }
  },
  mounted () {
    setTimeout(() => {
      this.list.splice(2, 0, 'f')
    }, 2000)
  },
  methods: {
    insertData () {
      this.list.splice(2, 1, 'G')
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
