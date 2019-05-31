import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/layout/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {path: '/login',name: 'login',component: () => import(/* webpackChunkName: "about" */ '../components/Login.vue')
    }
  ]
})
