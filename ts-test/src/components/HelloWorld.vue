<template>
  <div>
    {{ message }}
    <input type="text" @keyup.enter="addItem" />
    <div v-for="item in items" :key="item" :class="{ selected: item.selected }">
      {{ item.name }}
    </div>
  </div>
</template>

<script lang="ts">
import axios, { AxiosPromise } from 'axios'
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator'
import { itemSelected } from '@/types'

// function getItems<T> (): Promise<T> {
//   return Promise.resolve([
//     { id: 1, name: 'tom', selected: true },
//     { id: 2, name: 'jerry', selected: false }
//   ] as any);
// }
// function Component (options: any) {
//   return function (target: any) {
//     return Vue.extend(options)
//   }
// }
@Component
export default class HelloWorld extends Vue {
  message = 'class base comp';
  items: itemSelected[] = [];

  // 生命周期之际用同名方法
  async created ():void {
    // this.items = await getItems<itemSelected[]>()
    const res = await axios.get<itemSelected[]>('/api/list')
    this.items = res.data
  }

  @Watch('message')
  onMsgChange (val: string, old: string): void {
    console.log(val, old)
  }

  // 方法直接声明
  @Emit()
  addItem (e: KeyboardEvent): itemSelected {
    // 断言为input类型
    const inp = e.target as HTMLInputElement
    const item: itemSelected = {
      id: this.items.length + 1,
      name: inp.value,
      selected: false
    }
    this.items.push(item)
    inp.value = ''
    return item
  }

  // 括号中是传给vue的
  @Prop({ required: true, type: String }) private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.selected {
  background-color: rgb(187, 245, 187);
}
</style>
