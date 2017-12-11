<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style-type: none;
  text-decoration: none;
}

body {
  max-width: 750px;
  margin: 0 auto;
  background: #E3E3E3;
  -webkit-tap-highlight-color: transparent;
}

i {
  font-style: normal;
}

/* 轮播 */

.swiper-container {
  width: 100%;
  height: 500px;
  background: #fff;
  img {
    width: 750px;
    height: 500px;
    transition: all 0.3s linear;
    transform: scale(1);
  }
  .big {
    position: fixed;
    z-index: 9999;
    transform: scale(2);
  }
}

.swiper-pagination-bullet {
  background: #ccc;
}

.swiper-pagination-bullet-active {
  background: #fff;
}
/* 头部 */

.page {
  width: 100%;
  height: 88px;
  text-align: center;
  background: #ff7171;
  display: flex;
  justify-content: space-between;
  line-height: 88px;
  span,
  a {
    width: 88px;
    height: 88px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:active {
      background: #ff8178;
    }
  }
  .top-img {
    img {
      width: 40px;
      height: 40px;
    }
  }
  
}

.back-page {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #000;
  opacity: 0.7;
  color: #fff;
  line-height: 70px;
  font-size: 48px;
  text-align: center;
  position: absolute;
  z-index: 999;
  top: 20px;
  left: 20px;
}

.you-like-goods {
  width: 360px;
  // height: 400px;
  padding: 5px;
  background: #fff;
  margin: 2.5px;
  display: inline-block;
  position: relative;
  img {
    width: 360px;
    height: 300px;
  }
  p {
    margin: 5px 0;
    font-size: 28px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #363434;
  }
  ul {
    li {
      float: left;
      strong {
        color: #fe0303;
        font-size: 28px;
        font-weight: 500;
      }
      i {
        color: #555555;
        font-size: 24px;
        padding: 4px 0 0 10px;
        display: inline-block;
      }
    }
    .like-goods-right {
      float: right;
      color: #555555;
      font-size: 24px;
      padding-top: 4px;
      display: inline-block;
    }
  }
  .discounts-box {
    position: relative;
    .discounts {
      position: absolute;
      display: inline-block;
      background: rgb(236, 66, 66);
      color: #fff;
      padding: 5px;
      border-radius: 5px 0 0 5px;
      right: 0px;
      bottom: 5px;
      font-size: 24px;
    }
  }
}

.you-like-text {
  background: #fff;
  margin: 10px 0;
  text-align: center;
  padding: 15px;
  font-size: 28px;
}

.delete-btn{
  width:400px;
  height:250px;
  .shade{
    position: fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background: #000;
    opacity: 0.7;
        z-index:9998;
  }
  .delete-btn-box{
    position: absolute;
     z-index:9999;
     width:70%;
     height:200px;
     background: #fff;
     border-radius:10px;
     left:0;right:0;top:0;bottom:0;margin:auto;
     p{
      font-size: 28px;
      height:50px;
          text-align: center;
    margin: 40px 0;
    // border-bottom: 1px solid #ccc;
     } 
     span{
    padding:10px;
    display: inline-block;
    font-size: 24px;
    text-align: center;
    // width: 170px;
    width:45%;
     }
     .color-text{
    border-left: 1px solid #ccc;
    color:#fd0000;
     }
  }
}

/* 懒加载图片过渡效果 */
img[lazy="loaded"] {
  animation: fade 0.5s;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
