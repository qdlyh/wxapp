import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import corlist from '@/components/common/corlist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
  ]
})
