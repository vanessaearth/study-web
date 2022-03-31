/*
 * @Autor: yangjin
 * @Date: 2021-09-16 09:32:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-30 17:08:59
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
                    { text: 'one', link: '/first/' },
                    { text: 'two', link: '/second/' }
                ]
            },
            { text: 'one', link: '/first/' },
        ],
        sidebar: {
            '/first/': [
                {
                    title: 'first',
                    collapsable: false,
                    children: [
                        ['', '快速'],
                        'js',
                        'vue',
                        'autoArticle',
                        'autoOption'

                    ]
                }

            ],

            // fallback
            '/': [
                '',        /* / */

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