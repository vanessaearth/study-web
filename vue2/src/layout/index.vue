<template>
  <ElContainer class="main-container">
    <ElAside width="200px" class="main-left">
      <div class="logo">
        <i class="el-icon-location"></i>

        logo
      </div>
      <Nav />
    </ElAside>
    <ElContainer class="is-vertical main-right">
      <ElHeader class="main-header">Header</ElHeader>
      <ElMain>
        <RouterView />
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>

<script>
import Nav from './nav.vue'
export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  width: 100vw;
  min-height: 100vh;
  .main-left {
    background-color: #d3dce6;
    color: #333;
    .logo {
      height: 60px;
      line-height: 60px;
      text-align: center;
    }
  }
  .main-right {
    flex: 1;
    color: #333;
  }
  .is-vertical {
    flex-direction: column;
  }
  .main-header {
    text-align: right;
    padding-right: 40px;
  }
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>
