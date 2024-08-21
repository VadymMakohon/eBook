module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.isServerBuild = false
        return options
      })
  }
}

/* 
  The chainWebpack configuration is placed here simply to resolve a bug at the time of this update 
  where the @vue/server-renderer package is expected to be installed to run our tests. 
  This issue highlights the bug in more details https://github.com/vuejs/vue-loader/issues/1734.
*/
