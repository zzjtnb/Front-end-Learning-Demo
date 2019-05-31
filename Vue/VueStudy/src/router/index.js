import Vue from 'vue'
import Router from 'vue-router'
/* import HelloWorld from '@/components/HelloWorld' */
import Data from '@/views/test/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Data //这个额Data指向import Data from '@/views/test/Test'中的Data
    }
  ]
})
