import Vue from 'vue'
import Router from 'vue-router'
/* import HelloWorld from '@/components/HelloWorld' */
import Home from '../views/Home'
import Data from '../views/test/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home //这个额Data指向import Data from '@/views/test/Test'中的Data
    },
    {
      path: '/test',
      name: 'Test',
      component: Data //这个额Data指向import Data from '@/views/test/Test'中的Data
    }
  ]
})
