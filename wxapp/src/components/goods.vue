<template>
  <div>
    <div class="back-page" @click="back">
      &lt;</div>
        <div class="videoBtn">
          <router-link to="/video">
            <img src="../images/15165156.png" alt="">
          </router-link>
        </div>
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(img,index) in banner" :key="index">
              <img v-lazy="img.src" alt="" @click="clickImg($event)">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>
         <shade v-if="bannerImg" @clickit="viewImg" :imgSrc="imgSrc"></shade>
        <div class="goods-text-box" v-for="(goods,index) in GoodsText" :key="index">
              <div class="goods-text-content">
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
        </div>
        <div class="goods-img-box" @click="showImg()">
          <div class="goods-img-text">
            <p>查看宝贝详情</p>
            <i>></i>
          </div>
        </div>

        <div class="goods-img" v-for="(goods,index) in GoodsImg" :key="index">
          <img v-lazy="goods.src" alt="" v-show="goodsImg">
        </div>

        <div class="you-like-text">
          <p>————&nbsp;&nbsp;&nbsp;❤猜你喜欢&nbsp;&nbsp;&nbsp;————</p>
        </div>
        <div class="you-like-goods" v-for="(goods,index) in likeGoods" :key="index">
          <router-link to="path">
            <div class="like-goods">
              <img v-lazy="goods.src" alt="">
              <div class="discounts-box">
                <span class="discounts">劵{{goods.Discounts}}</span>
              </div>
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
import shade from "@/components/common/shade";
import footerBtn from "@/components/common/footerBtn";
export default {
  components: {
    shade,
    footerBtn
  },
  data() {
    return {
      bannerImg: false,
      imgSrc: "",
      goodsImg: false,
      swiperOption: {
        //loop: true,
        //   lazyLoading: {
        //     lazyLoading: true,
        //     lazyLoadingInPrevNext: true,
        //   },
        // autoplay: {
        //   disableOnInteraction: false,
        //   stopOnLastSlide: true
        // },
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      },
      banner: [
        {
          href: "http://www.baidu.com",
          src: require("../images/165165156.jpg")
        },
        {
          href: "http://hao123.com",
          src: require("../images/244613.png")
        },
        {
          href: "http://www.baidu.com",
          src: require("../images/1561561.png")
        }
      ],
      GoodsImg: [
        { src: "http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg" },
        { src: "http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg" },
        { src: "http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg" },
        { src: "http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg" },
        { src: "http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg" },
        { src: "http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg" },
        { src: "http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg" },
        { src: "http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg" },
        { src: "http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg" },
        { src: "http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg" },
        { src: "http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg" },
        { src: "http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg" },
        { src: "http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg" },
        { src: "http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg" },
        { src: "http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg" },
        { src: "http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg" },
        { src: "http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg" },
        { src: "http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg" },
        { src: "http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg" },
        { src: "http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg" }
      ],
      GoodsText: [
        {
          Text:
            "2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服",
          Price: "￥29.9",
          Discounts: "￥123",
          coupon: "优惠劵：60元",
          Sales: "132"
        }
      ],

      likeGoods: [
        {
          Text:
            "2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服",
          src: require("../images/165165156.jpg"),
          Price: "￥29.9",
          Discounts: "￥12",
          DiscountsText: "劵后",
          Sales: "132"
        },
        {
          Text:
            "2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服",
          src: require("../images/165165156.jpg"),
          Price: "￥29.9",
          Discounts: "￥12",
          DiscountsText: "劵后",
          Sales: "132"
        },
        {
          Text:
            "2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服",
          src: require("../images/165165156.jpg"),
          Price: "￥29.9",
          Discounts: "￥12",
          DiscountsText: "劵后",
          Sales: "132"
        },
        {
          Text:
            "2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服2017夏季衣服",
          src: require("../images/165165156.jpg"),
          Price: "￥29.9",
          Discounts: "￥12",
          DiscountsText: "劵后",
          Sales: "132"
        }
      ]
    };
  },
  methods: {
    showImg() {
      this.goodsImg = !this.goodsImg;
    },
    clickImg(e) {
      // 获取当前图片地址
      this.imgSrc = e.target.src;
      console.log(this.imgSrc);
      this.bannerImg = true;
    },
    viewImg() {
      this.bannerImg = false;
    },
    back(){
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "css/goods";
</style>
