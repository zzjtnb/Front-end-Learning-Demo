import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入vuex
import store from './store'
//引入请求接口
import util from './utils/util'
import './registerServiceWorker'
//iview
import iView from 'iview'
import '../public/css/index.less'
//视频背景
import VideoBg from 'vue-videobg'

Vue.prototype.$util = util
Vue.config.productionTip = false

Vue.use(iView)
Vue.component('video-bg', VideoBg)

new Vue({
  router,
  store,
  render: h => h(App),
  components: { VideoBg }
}).$mount('#app')
