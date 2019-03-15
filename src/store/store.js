import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//定义类型
const types = {
  SET_IS_AUTNENTIATED: 'SET_IS_AUTNENTIATED', // 是否认证通过
  SET_USER: 'SET_USER' // 用户信息
}
/* 
定义state(状态),
state就相当于状态对象,state就是用来存放数据
*/
const state = {// 需要维护的状态
  //设置状态,是否授权
  isAutnenticated: false,
  //设置用户信息,解析之后存储到user
  user: {}

}
/* 
定义getters(获取状态信息)
在现在的代码当中getters的作用就是先通过getters里面的函数操作
state更改响应的getter渲染的值也会相应的更改，可以说是计算过的state
 */
const getters = {
  // 获取state中的状态(数据)
  isAuthenticated: state => state.isAuthenticated,
  user: state => state.user

}
/* 
定义mutations(更改状态信息)
要改变状态（state）里面的值必须通过mutations写一些方法来修改状态
 */
const mutations = {
  /*
  设置mutations的方法(是否授权的方法),规定一个类型,名字叫 [SET_AUTHENTIACATED],方法中接收两个参数,一个state,一个isAuthenticated
  [配置类型](参数1,参数2) 
  */
  [types.SET_IS_AUTNENTIATED] (state, isAuthenticated) {
    //判断是否授权
    if (isAuthenticated) state.isAuthenticated = isAuthenticated
    else state.isAuthenticated = false
  },
  // 设置用户的方法
  [types.SET_USER] (state, user) {
    //判断该用户是否存在
    if (user) {
      state.user = user//设置状态的user是传递过来的user
    } else {
      state.user = {}
    }
  }
}
/* 
定义actions(调用mutations)
异步修改state状态, actions可以调用mutation里面的方法,就是为了改变状态树上的state的值，
*/
const actions = {
  // 得到对应的commit,因为我们会dispatch
  setIsAutnenticated: ({ commit }, isAuthenticated) => {
    //commit的时候(规定一个类型,把值拿到)
    commit(types.SET_IS_AUTNENTIATED, isAuthenticated)
  },
  setUser: ({ commit }, user) => {
    //commit的时候(规定一个类型,把user传递过去)
    commit(types.SET_USER, user)
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
