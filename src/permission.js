import router from './router'
import store from './store'

router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  if (!token) {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  } else {
    const userInfo = store.getters.userInfo
    if (userInfo) {
      next()
    } else {
      await store.dispatch('user/getUserInfo')
      next()
    }
  }
})
