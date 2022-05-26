/*
 * @Autor: yangjin
 * @Date: 2021-09-16 09:32:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-18 09:57:35
 * @Description: 
 */
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
        text: 'Home', link: '/',
        items: [
          { text: 'one', link: '/first/' }
        ]
      },
      { text: 'ts', link: '/ts/' },
      { text: 'vue3', link: '/vue3/' }
    ],
    sidebar: {
      '/first/': [
        {
          title: 'first',
          collapsable: false,
          children: [
            ['', '快速'],
            'js',
            'autoArticle',
            'autoOption'
          ]
        }
      ],
      '/ts/': [
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
      '/vue3/': [
        {
          collapsable: false,
          children: [
            ['', 'vue3变化'],
          ]
        }
      ],
      // fallback
      '/': [
        ''        /* / */
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