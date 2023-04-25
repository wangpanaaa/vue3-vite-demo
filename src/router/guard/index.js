import { createPermissionGuard } from './permissionGuard'
// Don't change the order of creation
export function setupRouterGuard(router) {
  createPermissionGuard(router)
  console.log('开始拦截路由', router)
}
