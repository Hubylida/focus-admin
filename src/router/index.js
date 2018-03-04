import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/pages',
    component: Layout,
    redirect: '/pages/index',
    name: 'pages',
    meta: { title: '页面管理', icon: 'pages' },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/index/index'),
        meta: { title: 'index', icon: 'index' }
      },
      {
        path: 'members',
        name: 'Members',
        component: () => import('@/views/members/index'),
        meta: { title: 'members', icon: 'member' }
      },
      {
        path: 'researchs',
        name: 'Research',
        component: () => import('@/views/researchs/index'),
        meta: { title: 'research', icon: 'research' }
      },
      {
        path: 'events',
        name: 'Events',
        component: () => import('@/views/events/index'),
        meta: { title: 'events', icon: 'event' }
      },
      {
        path: 'join',
        name: 'Join',
        component: () => import('@/views/join/index'),
        meta: { title: 'join', icon: 'join' }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/about/index'),
        meta: { title: 'about', icon: 'about' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

