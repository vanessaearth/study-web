/*
 * @Autor: yangjin
 * @Date: 2021-09-16 09:32:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-30 15:42:03
 * @Description: 
 */
module.exports = {
    title: 'hello,vuepress',
    description: 'just do it',
    plugins: ['@vuepress/blog'],
    markdown: {
        // 显示行号
        lineNumbers: true,
        // markdown-it-anchor 的选项
        anchor: { permalink: false },
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
                        ['','快速'],
                        'js',
                        'vue'
                       
                    ]
                }

            ],

            // fallback
            '/': [
                '',        /* / */
              
            ]
        }
    }
}