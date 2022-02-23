import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

// 获取一个以svg目录为上下文的require方法
const req = require.context('./svg', false, /\.svg$/)
// 获取当前目录所有文件名，并用req函数加载他们

req.keys.map(req)

Vue.component('svg-icon', SvgIcon)