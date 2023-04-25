import { Input, Layout } from 'ant-design-vue';

export function registerGlobComp(app) {
  app.use(Input).use(Layout);
}
