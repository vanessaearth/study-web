<!--
 * @Autor: yangjin
 * @Date: 2021-09-07 11:35:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-11 19:01:27
 * @Description:拖拽
-->
<template>
  <div class="wrapper">
    <div>
      <div class="warp-item">班委</div>

      <div class="leader">
        班长:
        <vuedraggable :list="arr2" :sort="false" :group="{ name: 'child',pull:false }">
          <div class="item leverSecond" v-for="it in arr2" :key="it.id">
            {{ it.id }}delete
          </div>
        </vuedraggable>
      </div>
      <div>
        学委:

      </div>
    </div>
    <div>
      <div class="warp-item">分组：</div>
      <div class="firstLevel" v-for="item in list" :key="item.id">
        <div class="leverFirst">
          {{ item.id }}
        </div>
        <div>
          组长：
          <vuedraggable
        @start="start"
            :list="item.leader"
            :sort="false"
            :group="{ name: 'child', pull: isPull  }"
            :move="onMove1"
          >
            <div
              class="item leverSecond"
              v-for="it in item.leader"
              :data-key="it.id"
              :key="it.id"
            >
              {{ it.id }}
            </div>
          </vuedraggable>
        </div>
        <div>
          组员;
          <vuedraggable
            @start="start"
            :list="item.member"
            :sort="false"
            :group="{ name: 'child', pull: isPull  }"
            :move="onMove1"
          >
            <div
              class="item leverSecond"
              v-for="it in item.member"
              :data-key="it.id"
              :key="it.id"
            >
              {{ it.id }}
            </div>
          </vuedraggable>
        </div>
      </div>
    </div>
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
      isPull: true,
      list: [
        {
          name: '小组1',
          leader: [{ id: 1, name: 'zs' }],
          member: [{ id: 2, name: 'tom' }, { id: 3 }, { id: 4 }]
        },
        // {
        //   name: '小组2',
        //   leader: { id: 5, name: 'ls' },
        //   member: [{ id: 6 }, { id: 7 }]
        // },
        {
          name: '小组三',
          leader: [{ id: 8 }],
          member: [{ id: 9 }]
        }
      ],

      arr2: [{ id: 0 }],
      moveId: -1
    }
  },
  methods: {
    pullFunction () {
      console.log('clone:', this.controlOnStart ? 'clone' : true)
      return this.controlOnStart ? 'clone' : true
    },
    start (e) {
      const originalEvent = e.originalEvent
      this.controlOnStart = originalEvent.ctrlKey
      console.log('ctrl', e, this.controlOnStart)
    },
    // 下边往上边拖动时的事件
    end1 (e) {
      const isLeader = e.to.parentElement.className === 'leader'
      console.log(isLeader, e)
      // e.clone.dataset.key
      if (isLeader) {

      } else {
      }
    },
    // 右边往左边拖动时的事件
    end2 (e) {
      return false
    },
    // move回调方法
    onMove1 (e, originalEvent) {
      console.log('move1', e)
      console.log('move1-end', originalEvent)
      console.log('type-leader', e.to.parentElement.className === 'leader')
      if (e.to.parentElement.className === 'leader') {
        this.isPull = 'clone'
      } else {
        this.isPull = true
      }

      // this.moveId = e.relatedContext.element.id
      // // 不允许停靠
      // if (e.relatedContext.element.id === 1) return false
      // // 不允许拖拽
      // if (e.draggedContext.element.id === 4) return false
      // if (e.draggedContext.element.id === 11) return false
      return true
    }
  }
}
// https://github.com/SortableJS/Vue.Draggable/blob/master/example/components/clone-on-control.vue

</script>

<style scoped>
.wrapper {
  /* display: flex;
  justify-content: center; */
  margin-left: 500px;
}
.warp-item {
  background: cornflowerblue;
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
