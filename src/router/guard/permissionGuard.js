// import { ElMessage } from 'element-plus'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import { getToken } from '@/utils/auth'
import { isHttp } from '/@/utils/is'
import { basicRoutes, asyncRoutes } from '/@/router/routes'

// import { isRelogin } from '@/utils/request'
// import useUserStore from '@/store/modules/user'
// import useSettingsStore from '@/store/modules/setting'
// import usePermissionStore from '@/store/modules/permission'

NProgress.configure({ showSpinner: false })

// const whiteList = ['/login', '/register']
let hasAddRoute = false
export function createPermissionGuard(router) {
  router.beforeEach((to, from, next) => {
    NProgress.start()

    if (!hasAddRoute) {
      asyncRoutes.forEach((route) => {
        router.addRoute(route) // 动态添加可访问路由表
      })
      hasAddRoute = true
      // return to.fullPath
      next({ path: to.fullPath, replace: true, query: to.query })
      return true
    }
    next()
  })

  router.afterEach(() => {
    NProgress.done()
  })
}
