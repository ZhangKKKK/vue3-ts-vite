import { shallowRef } from 'vue'
import { BasicLayout, UserLayout } from '@/components/Layout';
// import { defineAsyncComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router';
// import Login from '@/pages/user/login/index.vue'

export const baseRoutes: Array<RouteRecordRaw> = [
  {
    path: '/user',
    name: 'user',
    component: UserLayout,
    meta: { title: '用户' },
    children: [
      {
        path: '/user/login',
        name: 'user-login',
        meta: { title: '登录' },
        component: () => import('@/pages/user/login/index.vue')
      }
    ]
  }
]

export const notFound: Array<RouteRecordRaw> = [
  {
    path: '/404',
    name: 'notFound',
    meta: { title: 404 },
    component: () => import('@/pages/404.vue')
  },
  {
    path: '/:catchAll(.*)',
    meta: { title: 404 },
    redirect: '/404'
  }
]

export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      isMenu: true
    },
    redirect: '/account/index'
  },
  {
    path: '/account',
    name: 'account',
    // component: BasicLayout,
    component: shallowRef(BasicLayout),
    meta: { title: '客户', isMenu: true },
    children: [
      {
        path: '/account/index',
        name: 'account-index',
        meta: { title: '客户列表', isMenu: true },
        component: () => import('@/pages/account/index.vue')
      },
      {
        path: '/account/details',
        name: 'account-details',
        meta: { title: '客户详情', isMenu: true },
        component: () => import('@/pages/account/details.vue')
      }
    ]
  },
  {
    path: '/form',
    name: 'form',
    // component: BasicLayout,
    component: shallowRef(BasicLayout),
    meta: { title: '表单', isMenu: true },
    children: [
      {
        path: '/form/basic',
        name: 'form-basic',
        meta: { title: '基础表单', isMenu: true },
        component: () => import('@/pages/form/basic.vue')
      },
      {
        path: '/form/height',
        name: 'form-height',
        meta: { title: '客户详情', isMenu: true },
        component: () => import('@/pages/form/height.vue')
      }
    ]
  }
]