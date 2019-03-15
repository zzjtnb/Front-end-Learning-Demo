import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import "./registerServiceWorker";

// 引入axios
import axios from './utils/axios'

// 引入组件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;


Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
