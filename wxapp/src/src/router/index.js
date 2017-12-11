import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import classify from '../components/classify'
import flashsale from '../components/flashsale'
import test from '../components/test'
import headpage from '../common/headpage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorldd',
      component: headpage
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path: '/flashsale',
      component: flashsale
    }
  ]
})
