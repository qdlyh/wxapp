// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/components/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload)
Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '加载失败',
  loading: '正在加载',
  attempt: 1,
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
