import axios from "axios";
import { Message,MessageBox } from "element-ui";

// 1. create axios instance
const service = axios.create({
    // 公用接口 後面會講解，url = base url + request url
    baseURL: process.env.VUE_APP_SERVER_URL,
    // baseURL: 'https://api.example.com'
    // 超時時間 單位ms
    timeout: 5*1000
})

// 設置cross 跨域 並設置訪問權限 允許跨域攜帶cookie訊息,使用JWT可關閉
service.defaults.withCredentials = false;

service.interceptors.response.use(
    // 接收到response數據並成功後的一些共有的處理，關閉loading等
    response => {
      const res = response.data
      // 如果自定義狀態碼不是200，則判斷為錯誤。
      if (res.code !== 200) {
        // 50008: 非法Token; 50012: 異地登入; 50014: Token失效;
        if (res.code === 401 || res.code === 50012 || res.code === 50014) {
          // 重新登入
          MessageBox.confirm('会话失效，您可以留在当前页面，或重新登录', '权限不足', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
          }).then(() => {
            window.location.href = '#/login'
          })
        } else { // 其他异常直接提示
          Message({
            showClose: true,
            message: '⚠' + res.message || 'Error',
            type: 'error',
            duration: 3 * 1000
          })
        }
        return Promise.reject(new Error(res.message || 'Error'))
      } else {
        return res
      }
    },
    error => {
      /** *** 接收到异常响应的处理开始 *****/
      // console.log('err' + error) // for debug
      Message({
        showClose: true,
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  )
  export default service 