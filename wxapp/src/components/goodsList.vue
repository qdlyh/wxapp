<template>
  <div>
    <div class="you-like-goods" v-for="(goods,index) in likeGoods" :key="index">
      <router-link to="/goods">
        <div class="like-goods">
          <img :src="goods.src" alt="">
          <div class="videoBtn">
            <img src="./images/15165156.png" alt="">
          </div>
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
  </div>
</template>
<script>
  export default {
    data() {
      return {
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

      }
    },
    methods: {

    }
  }

</script>
<style lang="scss" scoped>
  .videoBtn {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    img {
      width: 40px;
      height: 40px;
    }
  }

</style>
