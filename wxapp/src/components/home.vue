<template>
  <div>
    <div class="page">
      <span class="top-img top-img-left">
        <img src="./images/15616516.png" alt="">
      </span>
      <div class="page-seek">
        <input type="text" placeholder="请输入你正在搜索的宝贝">
        <i>
          <img src="./images/15165156.png" alt="">
        </i>
      </div>
      <span class="top-img top-img-right">
        <img src="./images/15616516.png" alt="">
      </span>
    </div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(img,index) in banner" :key="index">
        <img :src="img.src" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
    <div>
      <ul class="home-list">
        <li v-for="(item,index) in listText" :key="index">
          <router-link to="/corlist">
            <span>
              <img src="./images/41651561.png" alt="">
              <i>{{item.text}}</i>
            </span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="home-goods-list" v-for="(big,index) in listGoods" :key="index">
      <router-link to="path">
        <span class="goods-list-big">
          <img :src="big.src" alt="">
        </span>
      </router-link>
      <span class="goods-list-small" v-for="(small,index) in listGoods[0].small" :key="index">
        <router-link to="path">
          <span>
            <img :src="small.src" alt="">
          </span>
        </router-link>
      </span>
    </div>
    <div class="you-like-text">
      <p>————&nbsp;&nbsp;&nbsp;❤精品推荐&nbsp;&nbsp;&nbsp;————</p>
    </div>
    <corlist></corlist>
  </div>
</template>

<script>
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  import corlist from '@/components/common/corlist'
  export default {
    components: {
      corlist,
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          loop: true,
          autoplay: {
            disableOnInteraction: false,
            stopOnLastSlide: true,
          },
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            clickable:true,
          },
          // 如果需要前进后退按钮
          // navigation: {
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev',
          // },
        },
        banner: [{
          src: require('./images/165165156.jpg')
        }, {
          src: require('./images/244613.png')
        }, {
          src: require('./images/165165156.jpg')
        }, ],

        listText: [{
          text: '商品',
          src: require('./images/41651561.png')
        }, {
          text: '商品',
          src: require('./images/41651561.png')
        }, {
          text: '商品',
          src: require('./images/41651561.png')
        }, {
          text: '商品',
          src: require('./images/41651561.png')
        }, {
          text: '商品',
          src: require('./images/41651561.png')
        }, ],



        listGoods: [{
          src: require('./images/41651561.png'),
          small: [{

              src: require('./images/41651561.png')
            },
            {

              src: require('./images/41651561.png')
            },
            {

              src: require('./images/41651561.png')
            },
            {

              src: require('./images/41651561.png')
            },
          ]
        }, ],
      }
    },

  }

</script>
<style lang="scss" scoped>
  @import 'css/home'

</style>
