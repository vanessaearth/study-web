const path = require('path')
const webpack = require('webpack')
// const { slugify } = require('./utils')

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './scss/_entry.scss')]
    })
}
module.exports = {
  title: 'hello,vuepress',
  description: 'just do it',
  plugins: ['@vuepress/blog'],
  markdown: {
    // 显示行号
    lineNumbers: true,
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // anchor: { slugify }
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
  },
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      {
        text: 'study', link: '/'
      },
      {
        text: 'study', link: '/study/',
        items: [
          { text: 'es6', link: '/study/es6/' },
          { text: 'ts', link: '/study/ts/' },
          { text: 'vue3', link: '/study/vue3/' }
        ]
      },
      {
        text: 'Home', link: '/interview/',
        items: [
          { text: 'js', link: '/interview/js/' },
          { text: 'vue2', link: '/interview/vue2/' },
          { text: 'node', link: '/interview/node/' }

        ]
      },
      { text: 'tools', link: '/tools/' }
    ],
    sidebar: {
      '/interview/js/': [
        {
          collapsable: false,
          children: [
            'js',
          ]
        }
      ],
      '/interview/vue2/': [
        {
          title:'VUE2',
          collapsable: false,
          children: [
            '01comp',
            '02ifFor',
            '03keepalive',
            '04lifeCycle',
            '05computedWatch',
            '06SPA_MPA',
            '07v-model',
            '08mixin',
            '09ArrayChange',
          ]
        }
      ], 
      '/interview/node/': [
        {
          collapsable: false,
          children: [
            ['', 'node'],
            '01',
          
          ]
        }
      ],
      '/study/es6/': [
        {
          title: 'ES6',
          collapsable: false,
          children: [
            ['', '介绍'],
            '01base',
          ]
        }
      ],
      '/study/ts/': [
        {
          title: 'Typescript',
          collapsable: false,
          children: [
            ['', '介绍'],
            '1install',
            '2type',
            '3function',
            '4interface',
            '5class',
            '6object',
            '7nameSpace',
            '8module',
            '9declareFile'
          ]
        }
      ],
      '/study/vue3/': [
        {
          collapsable: false,
          children: [
            '01init',
            '02change'
          ]
        }
      ], 
      '/tools/': [
        {
          collapsable: false,
          children: [
            'git',
            'regRex',
            'autoArticle',
            'autoOption'
          ]
        }
      ]
    }
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type =>
      addStyleResource(config.module.rule('scss').oneOf(type))
    )

    config.resolve.alias.set('@', path.resolve(__dirname, './'))
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          VUE_ENV: JSON.stringify(process.env.VUE_ENV)
        }
      }),
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ]
  }
}