import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import goods from '@/components/goods'
import goodsList from '@/components/goodsList'
import faq from '@/components/faq'
import video from '@/components/video'
import seekText from '@/components/seekText'
import goodsVideo from '@/components/goodsVideo'
import classify from '@/components/classify'
import flashsale from '@/components/flashsale'
import headpage from '@/components/common/headpage'

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
      path: '/goodsVideo',
      name: 'goodsVideo',
      component: goodsVideo
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
    {
      path: '/seekText',
      name: 'seekText',
      component: seekText
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path: '/flashsale',
      component: flashsale
    },
    {
      path:'/headpage',
      component: headpage
    }
  ]
})
