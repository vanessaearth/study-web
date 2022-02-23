<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" @addItem="addItem"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { itemSelected } from '@/types'

@Component({
  components: {
    HelloWorld
  }

})

export default class Home extends Vue {
  addItem (val:itemSelected):void {
    console.log(val.name)
  }
}
</script>
