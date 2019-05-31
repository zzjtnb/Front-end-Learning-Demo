import axios from 'axios'
import Vue from 'vue'
import store from '../store/index'

// 创建一个axios的自定义的实例service，并且可以自定义其配置
const service = axios.create({
  //接口请求地址
  baseURL: "https://api.github.com",
  //`timeout`选项定义了请求发出的延迟毫秒数。如果请求花费的时间超过延迟的时间，那么请求会被终止
  timeout: 15000,
})
// 给自定义的axios实例service添加一个请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么，比如传token
    /*    
     const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = token;
      } 
    */
    let token = store.state.token.token
    if (token) {
      let sp = "?"
      if (config.url.indexOf("?") >= 0) {
        sp = "&"
      }
      config.url = config.url + sp + "access_token=" + token
    }
    // 在发送请求之前做些什么
    return config
  },
  error => {
    // 对请求错误做些什么
    console.log(error) // for debug
    return Promise.reject(error);
  }
)
// 给自定义的axios实例service添加一个响应拦截器
service.interceptors.response.use(
  response => {
    //在这里对返回的数据进行处理
    let responseJson = response.data
    return response
  },
  error => {
    let message
    switch (error.response.status) {
      case 401:
        message = "Token错误"
        break
      default:
        message = error.response.data.message
        break
    }
    Vue.notify({
      group: 'custom-style',
      text: message,
      type: 'warn',
    })
    // 对响应错误做点什么
    return Promise.reject('error')
  }
)
export default service