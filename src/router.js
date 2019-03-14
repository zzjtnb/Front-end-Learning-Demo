import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import NOTFOUND from "./views/404";

Vue.use(Router);

export default new Router({
  routes: [
    // 配置404頁面
    { path: "*", name: "/404", component: NOTFOUND },
    // 重定向
    {
      path: "/",
      redirect: "index"
    },

    {
      path: "/index",
      name: "index",
      component: Index
    },
    {
      path: "/register",
      name: "register",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Register.vue")
    }
  ]
});
