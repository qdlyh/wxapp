<template>
  <div>
    <div class="faq-img">
      <img src="./images/165165156.jpg">
    </div>
    <div class="faq-text-box" v-for="(list,index) in faq" :key="index">
      <router-link to="path">
        <div class="faq-text">
          <p>{{list.text}}</p>
          <i>></i>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        faq: [{
            'text': '查看宝贝详情1',
          }, {
            'text': '查看宝贝详情2',
          }, {
            'text': '查看宝贝详情3',
          }, {
            'text': '查看宝贝详情4',
          }, {
            'text': '查看宝贝详情5',
          }, {
            'text': '查看宝贝详情6',
          }, {
            'text': '查看宝贝详情7',
          }, {
            'text': '查看宝贝详情7',
          },
          {
            'text': '查看宝贝详情7',
          },
          {
            'text': '查看宝贝详情7',
          },
          {
            'text': '查看宝贝详情7',
          },
          {
            'text': '查看宝贝详情7',
          },
          {
            'text': '查看宝贝详情7',
          },
          {
            'text': '查看宝贝详情7',
          }
        ]
      }
    },
    methods: {

    }
  }

</script>
<style lang="scss" scoped>
  .faq-img {
    img {
      width: 100%;
      height: 500px;
      vertical-align: bottom;
    }
  }

  .faq-text-box {
    background: #fff;
    padding: 20px;
    .faq-text {
      display: flex;
      justify-content: space-between;
      height: 40px;
      border-bottom: 1px solid #000;
      i {
        font-size: 25px;
        line-height: 20px;
        color: rgb(116, 116, 116);
      }
    }
    a {
      font-size: 24px;
      color: #333131;
    }
  }

</style>
