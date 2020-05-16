import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect: '/blog/home' },
    {
      path: '/blog',
      component: '@/pages/Blog/Layout',
      routes: [
        {
          path: '/blog/home',
          component: '@/pages/Blog/Home'
        },
        {
          path: '/blog/detail',
          component: '@/pages/Blog/Detail'
        }
      ]
    }
  ],
});
