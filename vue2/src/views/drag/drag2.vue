
<template>
  <div class="wrapper">
    <div>
      <div class="warp-item">班委</div>

      <div class="leader">
        班长:
        <Draggable  @start="start2"
            @add="add2"
            @update="update2"
            @end="end2"
            @remove="remove2"
            @choose="choose2"
            @unchoose="unchoose2"
            @clone="clone2"
            :list="arr2" :sort="false" :group="{ name: 'child',pull:false, put:classLeaderPut(arr2) }">
          <div class="item leverSecond" v-for="it in arr2" :key="it.id">
            {{ it.id }}
            <ElButton @click="deleteLeader(arr2)">delete</ElButton>
          </div>
        </Draggable>
      </div>
        <div class="leaderSub">
       副班长：
        <Draggable
          @start="start2"
            @add="add2"
            @update="update2"
            @end="end2"
            @remove="remove2"
            @choose="choose2"
            @unchoose="unchoose2"
            @clone="clone2"
            :list="arr3" :sort="false" :group="{ name: 'child', pull:false }">
          <div class="item leverSecond" v-for="it in arr3" :key="it.id">
            {{ it.id }}delete
          </div>
        </Draggable>
      </div>

      <div>
        学委:

      </div>
    </div>
    <div>
      <div class="warp-item">分组：</div>
      <div class="firstLevel" v-for="(item,groupId) in list" :key="item.id">
        <div class="leverFirst">
          {{ item.id }}
        </div>
        <div>
          组长：
          <Draggable
           @start="start"
           @unchoose="unchoose"
            :list="item.leader"
            :sort="false"
            :group="{ name: 'child', pull: true, put: groupPut(item) }"          >
            <div
              class="item leverSecond"
              v-for="it in item.leader"
              :data-id="it.id"
              :data-group-id="groupId"
              :key="it.id"            >
              {{ it.id }}
            </div>
          </Draggable>
        </div>
         <div>
          副组长：
          <Draggable
           @start="start"
           @unchoose="unchoose"
            :list="item.leaderSub"
            :sort="false"
            :group="{ name: 'child', pull: true }"          >
            <div
              class="item leverSecond"
              v-for="it in item.leaderSub"
              :data-id="it.id"
              :data-group-id="groupId"
              :key="it.id"            >
              {{ it.id }}
            </div>
          </Draggable>
        </div>
        <div>
          组员;
          <Draggable
            @start="start"
            @add="add"
            @update="update"
            @end="end"
            @remove="remove"
            @choose="choose"
            @unchoose="unchoose"
            @clone="clone"
            :list="item.member"
            :sort="false"
            :group="{ name: 'child', pull: true  }" >
            <div
              class="item leverSecond"
              v-for="(it) in item.member"
              :data-id="it.id"
              :data-group-id="groupId"
              :key="it.id" >
              {{ it.id }}
            </div>
          </Draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import _ from 'lodash'
export default {
  components: {
    Draggable
  },
  data () {
    return {
      list: [
        {
          groupId: 1,
          name: '小组1',
          leader: [{ id: 1, name: 'zs' }],
          leaderSub: [{ id: 2, name: 'zs2' }],
          member: [{ id: 3, name: 'tom' }, { id: 4 }]
        },
        // {
        //   groupId: 2,
        //   name: '小组2',
        //   leader: { id: 5, name: 'ls' },
        //   member: [{ id: 6 }, { id: 7 }]
        // },
        {
          groupId: 3,
          name: '小组三',
          leader: [{ id: 8 }],
          member: [{ id: 9 }]
        }
      ],

      arr2: [{ id: 0 }], // 班长
      arr3: [], // 副班长
      moveId: -1,
      startList: []
    }
  },
  methods: {
    deleteLeader (val) {
      val.splice(0, 1)
    },

    classLeaderPut (item) {
      if (item.length) {
        return false
      }
      return true
    },
    groupPut (item) {
      if (item.leader.length) {
        return false
      }
      return true
    },
    start (e) {
      console.log('start', e, this.list)
      this.startList = _.cloneDeep(this.list)
    },
    add (e) {
      console.log('add', e, this.list)
    },
    remove (e) {
      console.log('remove', e, this.list)
      return false
    },
    update (e) {
      console.log('update', e, this.list)
    },
    end (e) {
      console.log('end', e, this.list)
    },
    choose (e) {
      console.log('choose', e, this.list)
    },
    unchoose (e, b) {
      console.log('unchoose', e, this.list)
      console.log('unchoose-1', b)
      const list = _.cloneDeep(this.startList)
      if (e.to.parentElement.className === 'leader') {
        this.list = list
        const ids = this.arr2.map(v => v.id)
        const id = +e.item.dataset.id
        const index = ids.indexOf(id)
        console.log(index)
        const items = this.arr2.filter((v) => {
          return v.id === id
        })
        if (items.length < 2) return
        this.arr2.splice(index, 1)
      } else if (e.to.parentElement.className === 'leaderSub') {
        this.list = list
        const ids = this.arr3.map(v => v.id)
        const id = +e.item.dataset.id
        const index = ids.indexOf(id)
        console.log(index)
        const items = this.arr3.filter((v) => {
          return v.id === id
        })
        if (items.length < 2) return
        this.arr3.splice(index, 1)
      }
    },
    clone (e) {
      console.log('clone', e, this.list)
    },
    start2 (e) {
      console.log('start22', e)
    },
    add2 (e) {
      console.log('add2', e)
    },
    remove2 (e) {
      console.log('remove2', e)
      return false
    },
    update2 (e) {
      console.log('update2', e)
    },
    end2 (e) {
      console.log('end2', e)
    },
    choose2 (e) {
      console.log('choose2', e)
    },
    unchoose2 (e) {
      console.log('unchoose2', e)
    },
    clone2 (e) {
      console.log('clone2', e)
    }

    // start (e) {
    //   const originalEvent = e.originalEvent
    //   this.controlOnStart = originalEvent.ctrlKey
    //   console.log('start-ctrl', e, this.controlOnStart)
    // },
    // move回调方法

  }
}
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
