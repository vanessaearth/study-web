<template>
  <div class="item">
    <ElSubmenu :index="item.name" v-if="hasChild(item)">
      <template slot="title">
        <i :class="`{ ${item.meta&&item.meta.icon}: true, ml20: level !== 0 }`"></i>
        <span>{{ item.meta&&item.meta.name || item.name }}</span>
      </template>
      <NavItem
        v-for="innerItem in item.children"
        :key="innerItem.name"
        :item="innerItem"
        :level="level + 1" />
    </ElSubmenu>
    <ElMenuItem :index="item.name" v-else-if="!(item.meta&&item.meta.hidden)">
      <i v-if="level === 0" :class="item.meta&&item.meta.icon"></i>
      <span slot="title">{{ item.meta&&item.meta.name || item.name }}</span>
    </ElMenuItem>
  </div>
</template>

<script>
export default {
  name: 'navItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    level: {
      type: Number,
      default: 0
    }
  },
  methods: {
    hasChild ({ children }) {
      return (
        !!children &&
        !!children.filter((item) => !item.meta || !item.meta.hidden).length
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.item{
  line-height: 28px;
}
.ml20 {
  margin-left: 20px;
}
</style>
