import Cookie from '@/utils/cookie'
import UserApi from '@/api/user'
import store from '../index'
import Vue from 'vue'

const TOKEN_KEY = "TOKEN_KEY"
const token = {
  // 多个 state 的操作 , 使用 mutations 会来触发会比较好维护 , 那么需要执行多个 mutations 就需要用 action 了
  // 通过 store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更
  state: {
    token: Cookie.getAttribute(TOKEN_KEY)
  },
  // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
  mutations: {
    SET_TOKEN: (state, value) => {//这里的state对应着上面这个state
      state.token = value
      Cookie.setAttribute(TOKEN_KEY, value, 30)
    },
    REMOVE_TOKEN: (state) => {
      state.token = null
      Cookie.remove(TOKEN_KEY)
    }
  },

  /**
    Action 类似于 mutation，不同在于：
      Action 提交的是 mutation，而不是直接变更状态。
      Action 可以包含任意异步操作。
   */
  // dispactch方法调用action,mapAactions方法调用action
  actions: {
    Authentication ({ commit }, accessToken) {
      UserApi.verifyToken(accessToken).then((response) => {
        let message
        let result = response.data
        let githubUsername = store.state.configuration.githubUsername
        if (githubUsername == result['login']) {
          commit('SET_TOKEN', accessToken)
          message = 'Token绑定成功'
          this.$router.push("/")
        } else {
          message = 'Token用户不一致'
        }
        Vue.notify({
          group: 'custom-style',
          title: message,
          type: 'success'
        })
      }).catch(() => {

      })
    },
    Cancellation ({ commit }) {
      commit('REMOVE_TOKEN')
      Vue.notify({
        group: 'custom-style',
        text: 'Token取消绑定',
        type: 'info'
      })
    },
  }
}

export default token