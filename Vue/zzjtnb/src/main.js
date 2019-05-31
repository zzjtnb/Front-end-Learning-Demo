import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import './registerServiceWorker'
import util from './utils/util'
//fastclick：处理移动端click事件300毫秒延迟
import FastClick from 'fastclick'
FastClick.attach(document.body);
// import or require
import Mui from 'vue-awesome-mui'
import 'vue-awesome-mui/mui/dist/css/mui.css'
import "vue-awesome-mui/mui/examples/hello-mui/css/icons-extra.css";
// mount with global
Vue.use(Mui)
import Notifications from 'vue-notification'
Vue.use(Notifications)



Vue.prototype.$setTitle = function (title) {
  if (title) {
    document.title = store.state.configuration.htmlTitle + ' - ' + title
  } else {
    document.title = store.state.configuration.htmlTitle
  }
}

Vue.prototype.$util = util
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
