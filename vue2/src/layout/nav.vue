<template>
  <ElMenu :default-active="$route.name"  router>
    <NavItem v-for="item in routes"  :key="item.name" :item="item" />
  </ElMenu>
</template>

<script>
import router from '@/router'
import NavItem from './navItem.vue'
export default {
  components: {
    NavItem
  },
  data () {
    return {
      routes: []
    }
  },
  created () {
    this.routes = router.options.routes
    console.log(router.options.routes, this)
  }
}
</script>

<style lang="scss" scoped>
.el-menu{
  background: none;
}
</style>
