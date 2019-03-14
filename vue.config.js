// Inside vue.config.js
const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  baseUrl: '/', // 根域上下文目录(默认'/'，部署应用包时的基本 URL)
  outputDir: 'dist', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)(相对于outputDir的静态资源(js、css、img、fonts)目录)
  lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  runtimeCompiler: true, // 运行时版本是否需要编译(是否使用包含运行时编译器的Vue核心的构建)
  transpileDependencies: [], // 默认babel-loader忽略node_modules，这里可增加例外的依赖包名
  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  configureWebpack: config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
    if (debug) { // 开发环境配置
      config.devtool = 'cheap-module-eval-source-map'
    } else { // 生产环境配置
    }
    // Object.assign(config, { // 开发生产共同配置
    //     resolve: {
    //         alias: {
    //             '@': path.resolve(__dirname, './src'),
    //             '@c': path.resolve(__dirname, './src/components'),
    //             'vue$': 'vue/dist/vue.esm.js'
    //         }
    //     }
    // })
  },
  chainWebpack: config => { // webpack链接API，用于生成和修改webapck配置，https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    if (debug) {
      // 本地开发配置
    } else {
      // 生产开发配置
    }
  },
  parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
  pluginOptions: { // 第三方插件配置
  },
  // 配置pwa
  pwa: { // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    name: '争逐',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'blue',
    themeColor: '#50E3C2',
    msTileColor: '#4A90E2'
  },
  // 处理跨域问题
  devServer: {
    // open: true, //配置自动启动浏览器 
    // host: 'localhost',
    // port: 8080,
    // https: false, // https:{type:Boolean}
    // hotOnly: false,// 热更新
    proxy: { // 配置跨域
      '/api': {
        target: 'http://localhost:5000/api/',//设置你调用的接口域名和端口号 别忘了加http
        ws: true,//websocket支持
        changOrigin: true,//是否跨域
        pathRewrite: {
          '^/api': ''
          //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
        }
        // axios.get('/api/user/add').then(res => {
        //   console.log(res)
        // })
      }
    },
    before: app => {

    }
  },
  // ...other vue-cli plugin options...
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

}
