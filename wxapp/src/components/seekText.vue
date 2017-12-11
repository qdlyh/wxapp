<template>
  <div class="seekText">
    <div class="page">
        <span class="top-img top-img-left">
            <img src="../images/15616516.png" alt="">
        </span>
        <seek @search="searchbtn"></seek>
        <span class="top-img top-img-right">
            <img src="../images/15616516.png" alt="">
        </span>
    </div>
    <div class="seekText-box">
        <p>历史搜索</p>
        <div class="history-seek">
            <!-- <span>衣服</span> -->
              <span v-for="history in historys" style="display:inline-block;">{{history}}</span>
        </div>
        <p>热门搜索</p>
        <div class="hot-seek">
            <span v-for="(list,index) in hotSeek" :key="index">{{list.hot}}</span>
        </div>
    </div>
    <hr/>
    <div class="delete-history" @click="deleteShow()">
        <i><img src="../images/15165156.png" alt="">清除历史搜索</i>
    </div>
    <hr/>
    <div class="delete-btn" v-show="deleteBtn">
      <div class="shade" @click="deleteHide()"></div>
      <div class="delete-btn-box">
        <p>清空历史记录</p>
        <hr/>
        <span @click="deleteHide()">取消</span>
        <span class="color-text" @click="deleteHide()">确认</span>
      </div>
    </div>
  </div>
</template>
<script>
import seek from "@/components/common/seek";
export default {
  components: {
    seek
  },
  data() {
    return {
      hotSeek: [{ hot: "女装" }, { hot: "男装" }, { hot: "男装" }],
      historys:[],
      deleteBtn:false,
    };
  },
  mounted(){
   
  },
  methods: {
     searchbtn(i){
      this.historys.push(i);
    },
    deleteShow(){
       this.deleteBtn = true;
    },
    deleteHide(){
      this.deleteBtn = false;
    }
  }
};
</script>
<style lang="scss" scoped>
$text: #333333;
.seekText {
  background: #fff;
  height: 100vh;
}
.seekText-box {
  margin: 10px 0 0 30px;
  p {
    margin: 20px 0;
    font-size: 28px;
    color: $text;
  }
  .history-seek,
  .hot-seek {
    margin: 20px 0;
    span {
      padding: 10px;
      background: #989595;
      color: #fff;
      display: inline-block;
      margin: 10px;
      font-size: 24px;
    }
  }
}
.delete-history {
  margin: 10px 0;
  text-align: center;
  i {
    color: $text;
    font-size: 24px;
    img {
      width: 25px;
      height: 25px;
      vertical-align: middle;
    }
  }
}
</style>
