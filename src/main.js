import 'uno.css'

import { createApp } from 'vue'

import { setupStore } from '@/store'
import { registerGlobComp } from '@/components/registerGlobComp'
import { router, setupRouter } from '@/router'
import { setupRouterGuard } from '@/router/guard'
import { setupGlobDirectives } from '@/directives'
import App from './App.vue'
import './assets/main.css'
import 'ant-design-vue/dist/antd.less'
async function bootstrap() {
  const app = createApp(App)

  // Configure store
  // 配置 store
  setupStore(app)

  // Register global components
  // 注册全局组件
  registerGlobComp(app)

  // Configure routing
  // 配置路由
  setupRouter(app)

  // router-guard
  // 路由守卫
  setupRouterGuard(router)

  // Register global directive
  // 注册全局指令
  setupGlobDirectives(app)


  app.mount('#app')
}

bootstrap();
