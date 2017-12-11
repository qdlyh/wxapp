<template>
  <div class="list-box">
    <div class="page">
      <span class="top-img top-img-left">
        <img src="../images/15616516.png" alt="">
      </span>
      <seek></seek>
      <span class="top-img top-img-right">
        <img src="../images/15616516.png" alt="">
      </span>
    </div>
    <div id="pullTo">
     <pull-to :top-load-method="refresh" :bottom-load-method="loadmore">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(img,index) in banner" :key="index">
         <router-link to="/goods">
        <img :src="img.src" alt="">
         </router-link>
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
              <img v-lazy="item.src" alt="">
              <i>{{item.text}}</i>
            </span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="home-goods-list" v-for="(big,index) in listGoods" :key="index">
      <router-link to="/goodsVideo">
        <span class="goods-list-big">
          <img v-lazy="big.src" alt="">
        </span>
      </router-link>
      <span class="goods-list-small" v-for="(small,index) in listGoods[0].small" :key="index" @click="golist(index)">
        <!-- <router-link to="/goodsList"> -->
          <span>
            <img v-lazy="small.src" alt="">
          </span>
        <!-- </router-link> -->
      </span>
    </div>
    <div class="you-like-text">
      <p>————&nbsp;&nbsp;&nbsp;❤精品推荐&nbsp;&nbsp;&nbsp;————</p>
    </div>
    <gotop></gotop>
    <corlists></corlists>
   </pull-to>
    </div>
    <footerpage></footerpage>
  </div>
</template>

<script>
import PullTo from "vue-pull-to";
import corlists from "@/components/common/corlists";
import seek from "@/components/common/seek";
import footerpage from "@/components/common/footerpage";
import gotop from "@/components/common/gotop";
export default {
  components: {
    corlists,
    seek,
    gotop,
    PullTo,
    footerpage
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          disableOnInteraction: false,
          stopOnLastSlide: true
        },
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      banner: [
        {
          href: "http://www.baidu.com",
          src: require("../images/165165156.jpg")
        },
        {
          href: "http://www.hao123.com",
          src: require("../images/244613.png")
        },
        {
          href: "http://www.baidu.com",
          src: require("../images/165165156.jpg")
        }
      ],

      listText: [
        {
          text: "商品",
          src: require("../images/41651561.png")
        },
        {
          text: "商品",
          src: require("../images/41651561.png")
        },
        {
          text: "商品",
          src: require("../images/41651561.png")
        },
        {
          text: "商品",
          src: require("../images/41651561.png")
        },
        {
          text: "商品",
          src: require("../images/41651561.png")
        }
      ],

      listGoods: [
        {
          src: require("../images/41651561.png"),
          small: [
            {
              src: require("../images/41651561.png")
            },
            {
              src: require("../images/41651561.png")
            },
            {
              src: require("../images/41651561.png")
            },
            {
              src: require("../images/41651561.png")
            }
          ]
        }
      ]
    };
  },

  methods: {
    refresh(loaded) {
      setTimeout(() => {
        loaded("done");
      }, 1500);
    },
    loadmore(loaded) {
      setTimeout(() => {
        loaded("done");
      }, 1500);
    },
    golist(i){
      if(i==0||i==1||i==3
        ){
        this.$router.push({ path: "/headpage" });
      }else if(i==2){
        this.$router.push({ path: "/goodsList" });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#pullTo {
  position: absolute;
  width: 100%;
  top: 88px;
  bottom: 98px;
  overflow: hidden;
}
@import "css/home";
</style>
