<template>
  <div></div>
</template>

<script>
export default {
  name: 'lifeCycle',
  components: {},
  mixins: [],
  props: {},
  data () {
    return {}
  },
  computed: {
    str () {
      return ''
    }
  },
  watch: {
    // 字符串
    data1 (newValue, oldValue) {

    },
    // 对象
    data: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {

      }
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  methods: {}
}
</script>
<style lang='less' scoped>
</style>
