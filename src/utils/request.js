import axios from 'axios'
import store from '../store'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    // 将token通过请求发送给后台
    const token = store.getters.token
    if (token) config.headers.Authorization = token
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    if (response.data.code === 200) {
      return response.data.data
    }

    // TODO 401 token 过期处理
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 统一路由传参
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

export default request
