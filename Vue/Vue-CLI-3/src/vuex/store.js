//vuex相当于一个全局变量,在任何地方都可以调用
import vue from 'vue'
import Vuex from 'vuex'
vue.use(Vuex)
//vuex是一个数据仓库,同时也是一个状态管理器
//state就相当于状态对象
const state = {
  // h就是状态共用的数据,h就是状态
  h: 0
}
//要改變狀態裏面（state）裏面的值必須通過mutations寫一些方法.修改状态
const mutations = {
  /*   // 第一种写法
  add(state) {
    state.h++;
  },
  reduce(state) {
    state.h--;
  } */
  //第二种写法
  add(state, n) {
    state.h += n
  },
  // 第一个参数state是默认的(const state = { h: 0})
  // 触发修改的时候是commit,第一个参数是mutations里面定义的方法名,第二个是自定义的参数
  reduce(state, n) {
    // state.h -= n
    state.h = state.h - n
  }
}

//在现在的代码当中getters的作用就是先通过getters里面的函数操作
const getters = {
  h: function(state) {
    // return (state.h += 1)
    return (state.h = state.h + 1)
  }
}

//actions 异步修改state状态 actions可以调用mutation里面的方法
const actions = {
  addAction(context) {
    context.commit('add', 10)
    setTimeout(() => {
      context.commit('reduce', 20)
    }, 3000)
    console.log('我比reduce先执行了')
  },
  reduceAction({ commit }) {
    commit('reduce', 5)
  }
}

export default new Vuex.Store({
  //把状态暴露出去
  state,
  mutations,
  getters,
  actions
})
