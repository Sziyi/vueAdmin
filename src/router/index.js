import { createRouter, createWebHashHistory } from 'vue-router'
import Users from './modules/Users'
import Roles from './modules/Roles'
import Menus from './modules/Menus'
import Dicts from './modules/Dicts'

export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'layout',
    redirect: '/index',
    component: () => import('../layout'),
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          title: '首页',
          icon: 'el-icon-s-home'
        },
        component: () => import('../views/home')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('../views/404')
  }
]

export const privateRoutes = [Users, Roles, Menus, Dicts]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes]
})

console.log(router.getRoutes())

export default router
