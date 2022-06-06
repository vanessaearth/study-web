
# vue3的变化

## 1.v-for 中的 Ref 数组
```vue
<div v-for="item in list" :ref="setItemRef"></div>
import { onBeforeUpdate, onUpdated } from 'vue'

export default {
  setup() {
    let itemRefs = []
    const setItemRef = el => {
      if (el) {
        itemRefs.push(el)
      }
    }
    onBeforeUpdate(() => {
      itemRefs = []
    })
    onUpdated(() => {
      console.log(itemRefs)
    })
    return {
      setItemRef
    }
  }
}
```

## 2.移除枚举 attribute 的内部概念
并将这些 attribute 视为普通的非布尔 attribute
非兼容：如果值为布尔值 false，则不再移除 attribute。取而代之的是，它将被设置为 attr="false"。若要移除 attribute，应该使用 null 或者 undefined。

## 3.$attrs中包含class和style
  $attrs中包含所有传递给组件的attribute,包含style和class
## 4.$children被移除
 $children 实例 property 已从 Vue 3.0 中移除，不再支持
## 5.自定义指令
指令的钩子函数已经被重命名，以更好地与组件的生命周期保持一致。

额外地，expression 字符串不再作为 binding 对象的一部分被传入

v2:
在 Vue 2 中，自定义指令通过使用下列钩子来创建，以对齐元素的生命周期，它们都是可选的：

* bind - 指令绑定到元素后调用。只调用一次。
* inserted - 元素插入父 DOM 后调用。
* update - 当元素更新，但子元素尚未更新时，将调用此钩子。
* componentUpdated - 一旦组件和子级被更新，就会调用这个钩子。
* unbind - 一旦指令被移除，就会调用这个钩子。也只调用一次。
v3:
* created - 新增！在元素的 attribute 或事件监听器被应用之前调用。
* bind → beforeMount
* inserted → mounted
* beforeUpdate：新增！在元素本身被更新之前调用，与组件的生命周期钩子十分相似。
* update → 移除！该钩子与 updated 有太多相似之处，因此它是多余的。请改用 updated。
* componentUpdated → updated
* beforeUnmount：新增！与组件的生命周期钩子类似，它将在元素被卸载之前调用。
* unbind -> unmounted
```js
<p v-highlight="'yellow'">以亮黄色高亮显示此文本</p>
const app = Vue.createApp({})

app.directive('highlight', {
  beforeMount(el, binding, vnode) {
    el.style.background = binding.value
  }
})
```
## 6.is只能用在component 标签中
非兼容：检测并确定哪些标签应该被视为自定义元素的过程，现在会在模板编译期间执行，且应该通过编译器选项而不是运行时配置来配置。
新增：为了支持 2.x 在原生元素上使用 is 的用例来处理原生 HTML 解析限制，我们用 vue: 前缀来解析一个 Vue 组件
```js
// v2
<table>
  <tr is="blog-post-row"></tr>
</table>
// v3
<table>
  <tr is="vue:blog-post-row"></tr>
</table>

```

## 7.data选项
非兼容：组件选项 data 的声明不再接收纯 JavaScript object，而是接收一个 function。

非兼容：当合并来自 mixin 或 extend 的多个 data 返回值时，合并操作现在是浅层次的而非深层次的 (只合并根级属性)

```js
const Mixin = {
  data() {
    return {
      user: {
        name: 'Jack',
        id: 1
      }
    }
  }
}

const CompA = {
  mixins: [Mixin],
  data() {
    return {
      user: {
        id: 2
      }
    }
  }
}
// v2，合并user变量
{
  "user": {
    "id": 2,
    "name": "Jack"
  }
}
// v3,中只会使用组件中的变量user
{
  "user": {
    "id": 2
  }
}
```

## 8.emits选项
Vue 3 现在提供一个 emits 选项，和现有的 props 选项类似。这个选项可以用来定义一个组件可以向其父组件触发的事件。

强烈建议使用 emits 记录每个组件所触发的所有事件。

这尤为重要，因为我们移除了 .native 修饰符。任何未在 emits 中声明的事件监听器都会被算入组件的 $attrs，并将默认绑定到组件的根节点上。

```js
  export default {
    props: ['text'],
    emits: ['accepted']
  }
```
示例
对于向其父组件透传原生事件的组件来说，这会导致有两个事件被触发：
```js
<template>
  <button v-on:click="$emit('click', $event)">OK</button>
</template>
<script>
export default {
  emits: [] // 不声明事件
}
</script>
// 当一个父级组件拥有 click 事件的监听器时：

<my-button v-on:click="handleClick"></my-button>
```
该事件现在会被触发两次:

一次来自 $emit()。
另一次来自应用在根元素上的原生事件监听器。
现在你有两个选项：

正确地声明 click 事件。当你真的在"my-button" 的事件处理器上加入了一些逻辑时，这会很有用。
移除透传的事件，因为现在父组件可以很容易地监听原生事件，而不需要添加 .native。适用于你只想透传这个事件。

## 9.事件 API
$on，$off 和 $once 实例方法已被移除，组件实例不再实现事件触发接口。

## 10.过滤器
从 Vue 3.0 开始，过滤器已移除，且不再支持。

## 11.片段
Vue 3 现在正式支持了多根节点的组件，也就是片段！

## 12.函数式组件

## 13.全局api
```js
import { createApp } from 'vue'

const app = createApp(MyApp)

app.component('button-counter', {
  data: () => ({
    count: 0
  }),
  template: '<button @click="count++">Clicked {{ count }} times.</button>'
})

app.directive('focus', {
  mounted: el => el.focus()
})

// 现在，所有通过 app.mount() 挂载的应用实例及其组件树，
// 将具有相同的 “button-counter” 组件和 “focus” 指令，
// 而不会污染全局环境
app.mount('#app')
```

## 14.全局api,tree-shaking
打包插件过程中,不需要打包vue,需要在externals中配置
```js
// webpack.config.js
module.exports = {
  /*...*/
  externals: {
    vue: 'Vue'
  }
}
```
## 15.内联模板
对内联模板特性的支持已被移除
```js
//2.0
<my-component inline-template>
  <div>
    <p>它们将被编译为组件自己的模板，</p>
    <p>而不是父级所包含的内容。</p>
  </div>
</my-component>
//3.0
//方法1
<script type="text/html" id="my-comp-template">
  <div>{{ hello }}</div>
</script>
const MyComp = {
  template: '#my-comp-template'
  // ...
}

```
## 16.节点的key，
在 Vue 2.x 中，建议在 v-if/v-else/v-else-if 的分支中使用 key。
在vue3中，自动生成唯一的 key。
```js
<!-- Vue 2.x -->
<div v-if="condition" key="a">Yes</div>
<div v-else key="a">No</div>

<!-- Vue 3.x (推荐方案：移除 key) -->
<div v-if="condition">Yes</div>
<div v-else>No</div>

<!-- Vue 3.x (替代方案：确保 key 始终是唯一的) -->
<div v-if="condition" key="a">Yes</div>
<div v-else key="b">No</div>
```
### 结合 template v-for
在 Vue 2.x 中，template 标签不能拥有 key。不过，你可以为其每个子节点分别设置 key。
在 Vue 3.x 中，key 则应该被设置在 template 标签上。
```html
  // Vue 2.x 
  <template v-for="item in list">
    <div :key="'heading-' + item.id">...</div>
    <span :key="'content-' + item.id">...</span>
  </template>
  // Vue 3.x 
  <template v-for="item in list" :key="item.id">
    <div>...</div>
    <span>...</span>
  </template>
```
## 17.按键修饰符
非兼容：不再支持使用数字 (即键码) 作为 v-on 修饰符
非兼容：不再支持 config.keyCodes
```html
<!-- vue2键码版本 -->
<input v-on:keyup.13="submit" />
<!-- 别名版本 -->
<input v-on:keyup.enter="submit" />
Vue.config.keyCodes = {
  f1: 112
}

```

## 18.移除$listeners
$listener放在$attr属性中
## 19.挂载api变化，
app.mount之前是替换挂载的元素，vue3中是作为子元素
## 20.propsData被移除
```js
//vue2
const Comp = Vue.extend({
  props: ['username'],
  template: '<div>{{ username }}</div>'
})

new Comp({
  propsData: {
    username: 'Evan'
  }
})
//vue3
const app = createApp(
  {
    props: ['username'],
    template: '<div>{{ username }}</div>'
  },
  { username: 'Evan' }
)
```
## 21.插槽统一
- this.$slots 现在将插槽作为函数公开
- 非兼容：移除 this.$scopedSlots
  ```js
  // 2.x 语法
    h(LayoutComponent, [
      h('div', { slot: 'header' }, this.header),
      h('div', { slot: 'content' }, this.content)
    ])
    this.$scopedSlots.header
    // 3.x Syntax
    h(LayoutComponent, {}, {
      header: () => h('div', this.header),
      content: () => h('div', this.content)
    })
    this.$slots.header()
  ```
## 22.过渡类名修改
过渡类名 v-enter 修改为 v-enter-from、过渡类名 v-leave 修改为 v-leave-from

## 23.Transition 作为根节点
当使用 transition 作为根结点的组件从外部被切换时将不再触发过渡效果
```vue
// v2
<!-- 模态组件 -->
<template>
  <transition>
    <div class="modal"><slot/></div>
  </transition>
</template>
<!-- 用法 -->
<modal v-if="showModal">hello</modal>
// v3
<template>
  <transition>
    <div v-if="show" class="modal"><slot/></div>
  </transition>
</template>
  <script>
  export default {
    props: ['show']
  }
  </script>
  <!-- 用法 -->
  <modal :show="showModal">hello</modal>
```
## 24.Transition Group 根元素
transition-group 不再默认渲染根元素，但仍然可以用 tag attribute 创建根元素。
```html
<!-- v2 -->
<transition-group tag="ul">
  <li v-for="item in items" :key="item">
    {{ item }}
  </li>
</transition-group>
<!-- v3 -->
<transition-group tag="span">
  <!-- -->
</transition-group>
```
## 25.v-on 的 .native 修饰符已被移除
## 26.v-model
非兼容：用于自定义组件时，v-model prop 和事件默认名称已更改：
prop：value -> modelValue；
事件：input -> update:modelValue；
非兼容：v-bind 的 .sync 修饰符和组件的 model 选项已移除，可在 v-model 上加一个参数代替；
新增：现在可以在同一个组件上使用多个 v-model 绑定；
新增：现在可以自定义 v-model 修饰符。
```html
<!-- v2 -->
<ChildComponent v-model="pageTitle" />
<ChildComponent :value="pageTitle" @input="pageTitle = $event" />
<!-- v3 -->
<ChildComponent v-model="pageTitle" />
<ChildComponent
  :modelValue="pageTitle"
  @update:modelValue="pageTitle = $event"
/>
<!-- v3修改v-model绑定的数据的名称 -->
<ChildComponent v-model:title="pageTitle" />
<ChildComponent :title="pageTitle" @update:title="pageTitle = $event" />

```
## 27.v-if和v-for
非兼容：两者作用于同一个元素上时，v-if 会拥有比 v-for 更高的优先级
v2中v-for优先级高
v3中v-if优先级高
## 28.v-bind 合并行为
不兼容：v-bind 的绑定顺序会影响渲染结果
```js
// v2，独立属性优先级高
<!-- 模板 -->
<div id="red" v-bind="{ id: 'blue' }"></div>
<!-- 结果 -->
<div id="red"></div>
// v3,使用最后定义的属性
<!-- 模板 -->
<div id="red" v-bind="{ id: 'blue' }"></div>
<!-- 结果 -->
<div id="blue"></div>

<!-- 模板 -->
<div v-bind="{ id: 'blue' }" id="red"></div>
<!-- 结果 -->
<div id="red"></div>
```

## 29.VNode 生命周期事件
在 Vue 2 中，我们可以通过事件来监听组件生命周期中的关键阶段。这些事件名都是以 hook: 前缀开头，并跟随相应的生命周期钩子的名字。

在 Vue 3 中，这个前缀已被更改为 vnode-。额外地，这些事件现在也可用于 HTML 元素，和在组件上的用法一样。

```html
// v2
<template>
  <child-component @hook:updated="onUpdated">
</template>
// v3 事件名附带的是vnode-前缀或者在驼峰命名带前缀 vnode
<template>
  <child-component @vnode-updated="onUpdated">
</template>
<template>
  <child-component @vnodeUpdated="onUpdated">
</template>
```

## 30.侦听数组
非兼容: 当侦听一个数组时，只有当数组被替换时才会触发回调。如果你需要在数组被改变时触发回调，必须指定 deep 选项。

```js
watch: {
  bookList: {
    handler(val, oldVal) {
      console.log('book list changed')
    },
    deep: true
  },
}
```