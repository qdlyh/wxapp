<template>
  <div>
    <div class="back-page">
      <</div>
        <div class="videoBtn">
          <router-link to="/video">
            <img src="./images/15165156.png" alt="">
          </router-link>
        </div>
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(img,index) in banner" :key="index">
            <img :src="img.src" alt="" @click="select(index)" :class="{big: index===selectIndex}">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>
        <div class="goods-text-box" v-for="(goods,index) in GoodsText" :key="index">
          <p>{{goods.Text}}</p>
          <ul>
            <li>
              <strong>{{goods.Price}}</strong>
            </li>
            <li>
              <i>{{goods.Discounts}}</i>
            </li>
            <li>
              <span class="goods-text-box-coupon">{{goods.coupon}}</span>
            </li>
            <li class="goods-text-box-right">
              <span>月销量{{goods.Sales}}</span>
            </li>
          </ul>
        </div>
        <div class="goods-img-box" @click="showImg()">
          <div class="goods-img-text">
            <p>查看宝贝详情</p>
            <i>></i>
          </div>
        </div>

        <div class="goods-img" v-for="(goods,index) in GoodsImg" :key="index">
          <img :src="goods.src" alt="" v-show="goodsImg">
        </div>

        <div class="you-like-text">
          <p>————&nbsp;&nbsp;&nbsp;❤猜你喜欢&nbsp;&nbsp;&nbsp;————</p>
        </div>
        <div class="you-like-goods" v-for="(goods,index) in likeGoods" :key="index">
          <router-link to="path">
            <div class="like-goods">
              <img :src="goods.src" alt="">
              <span class="discounts">劵{{goods.Discounts}}</span>
              <p>{{goods.Text}}</p>
              <ul>
                <li>
                  <strong>{{goods.Price}}</strong>
                </li>
                <li>
                  <i>{{goods.DiscountsText}}</i>
                </li>
                <li class="like-goods-right">
                  <span>已销&nbsp;{{goods.Sales}}</span>
                </li>
              </ul>
            </div>
          </router-link>
        </div>
        <footerBtn class="footerBtn"></footerBtn>
    </div>
</template>
<script>
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  import footerBtn from '@/components/common/footerBtn'
  export default {
    components: {
      footerBtn,
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          loop: true,
          //   lazyLoading: {
          //     lazyLoading: true,
          //     lazyLoadingInPrevNext: true,
          //   },
          autoplay: {
            disableOnInteraction: false,
            stopOnLastSlide: true,
          },
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
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
        GoodsImg: [{
          src: require('./images/165165156.jpg')
        }, {
          src: require('./images/244613.png')
        }, {
          src: require('./images/165165156.jpg')
        }, ],
        GoodsText: [{
          'Text': '2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服',
          'Price': '￥29.9',
          'Discounts': '￥123',
          'coupon': '优惠劵：60元',
          'Sales': '132'
        }, ],

        likeGoods: [{
            'Text': '2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服',
            src: require('./images/165165156.jpg'),
            'Price': '￥29.9',
            'Discounts': '￥12',
            'DiscountsText': '劵后',
            'Sales': '132'
          },
          {
            'Text': '2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服',
            src: require('./images/165165156.jpg'),
            'Price': '￥29.9',
            'Discounts': '￥12',
            'DiscountsText': '劵后',
            'Sales': '132'
          },
          {
            'Text': '2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服',
            src: require('./images/165165156.jpg'),
            'Price': '￥29.9',
            'Discounts': '￥12',
            'DiscountsText': '劵后',
            'Sales': '132'
          },
          {
            'Text': '2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服',
            src: require('./images/165165156.jpg'),
            'Price': '￥29.9',
            'Discounts': '￥12',
            'DiscountsText': '劵后',
            'Sales': '132'
          },
        ],
        selectIndex: undefined,
        goodsImg: false,
      }
    },
    methods: {
      showImg() {
        this.goodsImg = !this.goodsImg;
      },
      select(index) {
        this.selectIndex = this.selectIndex === index ? undefined : index;
        console.log(this.selectIndex === index);
      }
    }
  }

</script>
<style lang="scss" scoped>
  .videoBtn {
    position: absolute;
    top: 430px;
    right: 5%;
    z-index: 9999;
    img {
      width: 40px;
      height: 40px;
    }
  }

  @import 'css/goods'

</style>
