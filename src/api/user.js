import request from '../utils/request'

// 获取验证码
const getCaptcha = () => {
  return request({ url: '/captcha', method: 'GET' })
}

// 登录接口
const login = (data) => {
  return request({
    url: `/login?username${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'POST'
  })
}

// 获取用户信息接口
const getUserInfo = () => {
  return request({ url: '/sys/userInfo', method: 'GET' })
}

// 退出登录接口
const logout = () => {
  return request({ url: '/logout', method: 'POST' })
}

export default {
  getCaptcha,
  login,
  getUserInfo,
  logout
}
