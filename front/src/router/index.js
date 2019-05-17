import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/index/home'
    },
    {
      path: '/index',
      name: 'Index', redirect: '/index/home',
      component: () => import ('@/pages/front/index'),
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('@/pages/front/index')
        },
        {
          path: 'home',
          name: 'home',
          component: () => import('@/pages/front/home')
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/pages/front/about')
        },
        {
          path: 'article-list',
          name: 'ArticleList',
          component: () => import('@/pages/front/articleList')
        },
        {
          path: 'msg-board',
          name: 'Msg-board',
          component: () => import('@/pages/front/msgBoard')
        },
      ]

    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('@/pages/admin/index'),
      children: [
        {
          path: 'admin',
          name: 'Admin',
          component: () => import('@/pages/admin/index.vue')
        },
        {
          path: 'test',
          name: 'Test',
          component: () => import('@/pages/admin/test.vue')
        },

      ]

    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('@/pages/front/test.vue')
    }
  ]
})
