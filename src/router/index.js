import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/rank',
      name: 'rank',
      component: () => import('components/rank/rank')
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import('components/recommend/recommend')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('components/search/search')
    },
    {
      path: '/singer',
      name: 'singer',
      component: () => import('components/singer/singer')
    }
  ]
})
