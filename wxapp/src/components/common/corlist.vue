<template>
  <div>
    <ul v-for="detail in corlists" class="corlist">
      <li class="pic">
        <img :src="detail.img">
      </li>
      <li class="savemoney">
        <div>
          <p class="savetip">下单立省</p>
          <span class="savenum">￥&nbsp;{{detail.sprice}}</span>
        </div>
      </li>
      <li class="shopinfo">
        <p class="describe" style="margin-bottom:15px;">{{detail.describe}}</p>
        <span>天猫价：{{detail.oprice}}元</span>
        <span class="sales">月销量：{{detail.sales}}</span>
        <br>
        <span>券后价：</span>
        <span class="dprice">{{detail.dprice}}元</span>&nbsp;&nbsp;&nbsp;
        <span v-if="detail.post" class="post">包邮</span>
      </li>

    </ul>
  </div>
</template>

<script>
  // v-for="corlist in corlists"
  export default {
    data() {
      return {
        corlists: [{
            img: 'https://img.alicdn.com/bao/uploaded/i3/2895296178/TB25zxQayP85uJjSZFKXXcw7FXa_!!2895296178.jpg_b.jpg',
            describe: '地尔水疗',
            oprice: 469.0,
            sales: 255,
            dprice: 169.0,
            post: true,
            sprice: 0
          },
          {
            img: 'https://img.alicdn.com/bao/uploaded/i3/2895296178/TB25zxQayP85uJjSZFKXXcw7FXa_!!2895296178.jpg_b.jpg',
            describe: '地尔水疗马桶蓝色主义风格去你吗的111111111111111111',
            oprice: 469.0,
            sales: 255,
            dprice: 169.0,
            post: true,
            sprice: 0
          }
        ]
      }
    },
    mounted() {
      for (let i = 0; i < this.corlists.length; i++) {
        this.corlists[i].sprice = this.corlists[i].oprice - this.corlists[i].dprice;
      }
    }
  }

</script>

<style scoped lang="scss">
  li {
    list-style: none;
    display: inline-block;
  }

  .corlist span {
    display: inline-block;
  }

  .corlist {
    height: 150px;
    background: #fff;
    border-radius: 0 15px 15px 0px;
    overflow: hidden;
    margin-bottom: 20px;
  }

  .corlist {
    height: 150px;
  }

  .corlist .pic {
    float: left;
    margin-left: 10px;
    padding: 10px;
  }

  .corlist .pic,
  .corlist .pic img {
    width: 130px;
    height: 130px;
  }

  .corlist .describe {
    word-break: break-all;
  }

  .corlist .dprice {
    color: #F34A4F;
  }

  .corlist .sales {
    margin-bottom: 10px;
    margin-left: 25px;
  }

  .corlist .post {
    font-size: 14px;
    padding: 3px 8px;
    background: #F34A4F;
    color: #fff;
    border-radius: 20px;
  }

  .corlist .savemoney {
    float: right;
    width: 150px;
    height: 150px;
    background: #F34A4F;
    text-align: center;
  }

  .corlist .savemoney div {
    margin-top: 30px;
  }

  .corlist .savetip {
    color: #fff;
    margin-bottom: 10px;
  }

  .corlist .shopinfo {
    display: block;
    text-align: left;
    padding: 10px 160px 10px 170px;
  }

  .corlist .savenum {
    padding: 10px 30px;
    background: #fff;
    color: #F34A4F;
    border-radius: 20px;
  }

</style>
