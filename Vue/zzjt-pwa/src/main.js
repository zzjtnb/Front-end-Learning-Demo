import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/index";
import axios from "axios";
import BootstrapVue from "bootstrap-vue";
// import mavonEditor from "mavon-editor";
// import "mavon-editor/dist/css/index.css";
import "reset-css";
// use
// Vue.use(mavonEditor);
Vue.use(BootstrapVue);

Vue.prototype.$markdown = function (value) {
  return mavonEditor.markdownIt.render(value);
};

Vue.prototype.$reload = function (context) {
  let NewPage = "/empty";
  context.$router.push(NewPage);
  context.$nextTick(() => context.$router.go(-1));
};

Vue.prototype.$setTitle = function (title) {
  if (title) {
    document.title = store.state.configuration.htmlTitle + " - " + title;
  } else {
    document.title = store.state.configuration.htmlTitle;
  }
};
Vue.prototype.$share = function (message) {
  if (!message) {
    message = window.location;
  } else {
    let arr = (window.location + "").split("#");
    message = arr[0] + "#" + message;
  }
  if (util.copy(message)) {
    Vue.prototype.$confirm("链接已复制,去分享给好友吧!!", "分享", {
      showCancelButton: false,
      showClose: false,
      type: "success"
    });
  } else {
    Vue.prototype.$confirm("链接复制失败,可能因为浏览器不兼容", "分享", {
      showCancelButton: false,
      showClose: false,
      type: "warning"
    });
  }
};

Vue.prototype.$mobileShare = function (message) {
  if (!message) {
    message = window.location;
  } else {
    let arr = (window.location + "").split("#");
    message = arr[0] + "#" + message;
  }
  if (util.copy(message)) {
    Vue.prototype.$dialog.alert({
      title: "分享",
      message: "链接已复制,去分享给好友吧!!"
    });
  } else {
    Vue.prototype.$dialog.alert({
      title: "分享",
      message: "链接复制失败,可能因为浏览器不兼容"
    });
  }
};

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router, // 引入后在这里使用下
  store,
  render: h => h(App)
}).$mount("#app");
