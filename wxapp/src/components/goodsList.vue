<template>
  <div>
    <pageText :name='title'></pageText>
    <div id="pullTo">
     <pull-to :top-load-method="refresh" :bottom-load-method="loadmore">
     <div class="you-like-goods" v-for="(goods,index) in likeGoods" :key="index">
      <router-link to="/goods">
        <div class="like-goods">
          <img v-lazy="goods.src" alt="">
        <!--   <div class="videoBtn">
            <img src="../images/15165156.png" alt="">n              
          </div> -->
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
     </pull-to>
    </div>
  </div>
</template>
<script>
import pageText from "@/components/common/pageText";
import PullTo from "vue-pull-to";
export default {
  components: {
    PullTo,
    pageText
  },
  data() {
    return {
      title:'商品详情',
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
    refresh(loaded) {
      setTimeout(() => {
        loaded("done");
      }, 1500);
    },
    loadmore(loaded) {
      setTimeout(() => {
        loaded("done");
      }, 1500);
    }
  }
};
</script>
<style lang="scss" scoped>
// .videoBtn {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   -webkit-transform: translate(-50%, -50%);
//   transform: translate(-50%, -50%);
//   img {
//     width: 40px;
//     height: 40px;
//   }
// }
#pullTo {
  position: absolute;
  width: 100%;
  top: 88px;
  bottom: 0px;
  overflow: hidden;
}
</style>
