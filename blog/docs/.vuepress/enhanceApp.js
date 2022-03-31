import Vue from 'vue'
// import router from '@/router'
// import store from '@/store'
// import apis from '@/apis'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'

// import WmDashboardComponents from '@wm/wm-dashboard-components'

Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})

// Vue.prototype.$apis = apis
// Vue.prototype.$store = store

export default async ({ Vue, options, router, siteData }) => {
  Vue.use(Element)
  // Vue.use(WmDashboardComponents)
  // Vue.use(WmLiveComponents)
}
