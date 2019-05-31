import Vue from "vue";
import Router from "vue-router";
import Index from "../views/Index.vue";
import NOTFOUND from "../views/404";

Vue.use(Router);

const router = new Router({
  routes: [
    // 配置404頁面
    { path: "*", name: "/404", component: NOTFOUND },
    // 重定向
    { path: "/", redirect: "index" },
    { path: "/index", name: "index", component: Index },
    // 路由导航
    {
      path: "/register",
      name: "register",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/Register.vue")
    },
    { path: "/login", name: "login", component: () => import("../views/Login.vue") },

  ]
});
//路由守卫
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  //判断localStorage
  const isLogin = localStorage.token ? true : false
  if (to.path == "/login" || to.path == "/register") {
    next()
  } else {
    isLogin ? next() : next("/login")
  }
})
export default router