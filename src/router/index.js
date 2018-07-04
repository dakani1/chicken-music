import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import('components/recommend/recommend')
    },
    {
      path: '/singer',
      name: 'singer',
      component: () => import('components/singer/singer'),
      children: [
        {
          path: ':id',
          name: 'singerDetail',
          component: () => import('components/singer/singerDetail')
        }
      ]
    },
    {
      path: '/rank',
      name: 'rank',
      component: () => import('components/rank/rank')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('components/search/search')
    }
  ]
})
