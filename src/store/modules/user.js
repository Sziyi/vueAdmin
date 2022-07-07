import UserApi from '../../api/user'
import { setItem, getItem } from '../../utils/storage'
const TOKEN_KEY = 'token'
export default {
  namespaced: true,
  state: {
    token: getItem(TOKEN_KEY) || '',
    userInfo: {}
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      setItem(TOKEN_KEY, token)
    },
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async login({ commit }, payload) {
      const response = await UserApi.login(payload)
      // console.log('vuex=>', response)
      return response
    },
    async getUserInfo({ commit }) {
      const response = await UserApi.getUserInfo()
      // console.log('user', response)
      commit(' SET_USER_INFO', response)
    }
  }
}
