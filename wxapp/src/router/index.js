import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import goods from '@/components/goods'
import goodsList from '@/components/goodsList'
import faq from '@/components/faq'
import video from '@/components/video'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/goodsList',
      name: 'goodsList',
      component: goodsList
    },
    {
      path: '/faq',
      name: 'faq',
      component: faq
    },
    {
      path: '/video',
      name: 'video',
      component: video
    },
  ]
})
