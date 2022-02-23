<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{name:'drag'}">drag</router-link> |
    <router-link :to="{name:'drag2'}">drag2</router-link> |
    <router-link :to="{name:'dragleft'}">dragleft</router-link> |
    <router-link :to="{name:'dragleft2'}">dragleft2</router-link> |
  </div>
  <router-view/>
  <drag/>
</template>
<script>
import drag from '@/views/drag/drag.vue'
export default {
  components: {
    drag
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
