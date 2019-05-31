import Vue from 'vue'
import Vuex from 'vuex'
import token from './modules/token'//引入store(仓库)token(初始state对象)
import user from './modules/user'//引入store对象user
import configuration from './modules/configuration'//引入store对象configuration
import slide from './modules/slide'
import getters from './getters'


Vue.use(Vuex)

// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    token,
    user,
    configuration,
    slide
  },
  getters
})

export default store
