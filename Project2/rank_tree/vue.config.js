module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.92.71.239/api',
        // 改变域名
        changeOrigin: true,
        // 改写地址
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}
