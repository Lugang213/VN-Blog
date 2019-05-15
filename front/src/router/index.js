import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import ('@/pages/front/index'),
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('@/pages/front/index')
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/pages/front/about')
        },
        {
          path: 'note',
          name: 'Note',
          component: () => import('@/pages/front/note')
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

    }
  ]
})
