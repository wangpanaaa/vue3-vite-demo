

import { LAYOUT } from '/@/router/constant';

const about = {
  path: '/about',
  name: 'About',
  component: LAYOUT,
  redirect: '/about/index',
  meta: {
    icon: 'simple-icons:about-dot-me',
    title: '关于',
    orderNo: 100000
  },
  children: [
    {
      path: 'index',
      name: 'AboutPage',
      component: () => import('/@/views/sys/about/index.vue'),
      meta: {
        title: '关于',
        icon: 'simple-icons:about-dot-me',
      }
    }
  ]
}

export default about;
