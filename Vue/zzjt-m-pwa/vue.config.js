// Inside vue.config.js
module.exports = {
  // 配置pwa
  // ...other vue-cli plugin options...
  pwa: {
    name: '争逐',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'blue',
    themeColor: '#50E3C2',
    msTileColor: '#4A90E2'
  },

  // 处理跨域问题
  devServer: {
    proxy: {
      '/api': {
        target: 'http://40.00.100.100:3002/', //设置你调用的接口域名和端口号 别忘了加http
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
          //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
        }
        // axios.get('/api/user/add').then(res => {
        //   console.log(res)
        // })
      }
    }
  },
  // 配置css模块
  css: {
    loaderOptions: {
      // 向预处理器 Loader 传递配置选项
      less: {
        // 配置less（其他样式解析用法一致）
        javascriptEnabled: true // 设置为true
      }
    }
  },

  runtimeCompiler: true
}
