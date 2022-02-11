<!--
 * @Autor: yangjin
 * @Date: 2021-09-07 11:35:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-11 11:56:11
 * @Description:拖拽
-->
<template>
   <div class="wrapper">
      <vuedraggable :list="list" :forceFallback="true"  :sort="false" :group="{name: 'people', pull: true}" ghost-class="ghostClass">
      <div class="firstLevel" v-for="item in list" :key="item.name">
          <div class="leverFirst">
            {{item.name}}
          </div>
        <vuedraggable :list="item.course" :forceFallback="true"  :sort="false" :group="{name: 'child', pull: true}" ghost-class="ghostClass" >
          <div class="item"  v-for="it in item.course" :key="it.id">
            <div class="leverSecond">
              {{it.name}}
            </div>
          </div>
        </vuedraggable>
      </div>
    </vuedraggable>

  </div>
</template>

<script>
import vuedraggable from 'vuedraggable'
export default {
  components: {
    vuedraggable
  },
  data () {
    return {
      list: [
        {
          name: 'tom',
          course: [{ name: 1 }, { name: 2 }, { name: 3 }]
        },
        {
          name: 'jerry',
          course: [{ name: 4 }, { name: 5 }, { name: 6 }]
        },
        {
          name: 'lucy',
          course: [{ name: 7 }, { name: 8 }]
        }
      ]
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
.item {
  display: inline-block;
  width: 50px;
  height: 50px;
  background-color: #42b983;
  color: #ffffff;
  margin: 5px;
}
</style>
