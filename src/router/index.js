import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Pay from '@/components/Pay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Pay',
      name: 'Pay',
      component: Pay
    }
  ]
})
