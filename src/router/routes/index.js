import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from '/@/router/routes/basic'

// import.meta.globEager() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.glob('./modules/**/*.js', { eager: true })
const routeModuleList = []
// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList]
const constantRoutes = [
  // 根路由
  {
    path: '/',
    name: 'Root',
    redirect: '/login',
    meta: {
      title: 'Root'
    }
  },
  //登录
  {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/login.vue'),
    meta: {
      title: '登录'
    }
  },
  //注册
  {
    path: '/register',
    name: 'Register',
    component: () => import('/@/views/Register.vue'),
    meta: {
      title: '登录'
    }
  }
]

// Basic routing without permission
// 基础路由跟全局错误路由处理
export const basicRoutes = [REDIRECT_ROUTE, PAGE_NOT_FOUND_ROUTE, ...constantRoutes]
