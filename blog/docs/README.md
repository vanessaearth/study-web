<!--
 * @Autor: yangjin
 * @Date: 2021-09-16 09:31:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-30 17:17:20
 * @Description: 
-->
# readme
[[toc]]
---
title: Blogging Like a Hacker
lang: en-US
---
https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json
:tada: :100:
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
### Badge <Badge text="beta" type="warning"/> <Badge text="默认主题"/>

webpack版本需要4开头的
npm install webpack@4.44.1 -D
node-sass必须4开头配合webpack
sass-loader需要7开头的版本
npm install sass-loader@7.1.0 --save