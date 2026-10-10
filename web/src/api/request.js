import axios from 'axios'
import { onFnOSGateway } from '@/utils/gateway'

const api = axios.create({
  baseURL: `${import.meta.env.BASE_URL}api`
})

api.interceptors.request.use(config => {
  // 网关域上绝不能带 Authorization：飞牛接入层会把它当成自己的会话 token，
  // 认不出就回 200 纯文本 "invalid token"，请求根本到不了应用。网关域的
  // 登录态由服务端用网关注入的 X-Trim-Userid 解析，见 utils/gateway.js。
  if (!onFnOSGateway()) {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

api.interceptors.response.use(
  res => res,
  err => {
    return Promise.reject(err)
  }
)

export default api
