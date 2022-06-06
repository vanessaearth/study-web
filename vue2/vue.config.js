const webpack = require('webpack')
const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    port: 8060,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: true
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        resolve('@/scss/var.scss'),
        resolve('@/scss/_mixin.scss')
      ]
    }
  },
  chainWebpack (config) {
    // 关闭预加载，减少带宽压力
    // https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
    // https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          VUE_ENV: JSON.stringify(process.env.VUE_ENV),
          APP_ID: JSON.stringify('**')
        }
      }),
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ]
  }
}
