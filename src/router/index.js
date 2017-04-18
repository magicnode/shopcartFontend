import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/goshopping',
      name: 'GoShopping',
      component: require('@/views/GoShopping')
    },
    {
      path: '/login',
      name: 'Login',
      component: require('@/views/Login')
    },
    {
      path: '/rating',
      name: 'Rating',
      component: require('@/views/Rating')
    }
  ]
})
