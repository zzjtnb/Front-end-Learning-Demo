import Vue from "vue";
import Router from "vue-router";
import Index from "../views/layout/Index";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
      children: [
        {
          path: "/home",
          name: "home",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "../views/Home.vue")
        },
        {
          path: "/blog",
          name: "blog",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "about" */ "../views/blog/Main.vue")
        },
        // ...其他子路由
        {
          path: "/details/:id",
          name: "details",
          component: () => import("../views/blog/Details.vue")
        },
        {
          path: "/discuss",
          name: "discuss",
          component: () => import("../views/Discuss.vue")
        },
        {
          path: "/music",
          name: "music",
          component: () => import("../views/Music.vue")
        },
        {
          path: "/video",
          name: "video",
          component: () => import("../views/video/Video.vue")
        },
        {
          path: "/wallpaper",
          name: "wallpaper",
          component: () => import("../views/Wallpaper.vue")
        }
      ]
    },

    // 登录
    {
      path: "/login",
      name: "login",
      component: () => import("../views/user/Login.vue")
    }
  ]
});
