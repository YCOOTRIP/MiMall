module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/mimall' : '/',
  devServer: {
    host: 'localhost',
    port: 9080,
    proxy: {
      '/api': {
        // 拦截/api的请求
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  }
}
