//axios的再封装
import axios from 'axios'
//引入Loading
import { Loading, Message } from 'element-ui';
//定义loading变量
let loading
// 开始动画的方法
function startLoading () {    //使用Element loading-start 方法
  loading = Loading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}
//结束加载动画
function endLoading () {    //使用Element loading-close 方法
  loading.close()
}

// 请求拦截  设置统一header
axios.interceptors.request.use(config => {
  //加载动画
  startLoading()
  return config
}, error => {
  return Promise.reject(error)
})
// 响应拦截  
axios.interceptors.response.use(response => {
  //结束加载动画
  endLoading()
  console.log(response)
  return response
}, error => {
  // 错误提醒
  endLoading()
  Message.error(error.response.data)
  console.log(error.response.data)
  return Promise.reject(error)
})

export default axios