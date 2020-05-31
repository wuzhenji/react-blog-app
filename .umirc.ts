import { defineConfig } from 'umi';

export default defineConfig({
  mock: false,
  hash: true,
  //history: {
   //  type: 'hash',
  //},
  // base: '',
  publicPath: '/',
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
    },
    {
      path: '/manage',
      component: '@/layouts/BasicLayout',
      // redirect: '/manage/blog',
      routes: [
        {
          path: '/manage/welcome',
          component: '@/pages/Manage/Welcome',
        },
        { // 博客相关
          path: '/manage/blog',
          component: '@/pages/Manage/Blog',
          routes: [
            {
              path: '/manage/blog/add',
              component: './Manage/Blog/Add',
            },
            {
              path: '/manage/blog/manage',
              component: './Manage/Blog/Manage',
            },
          ],
        }
      ]
    }
  ],
});
