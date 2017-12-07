<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

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
    background: #ccc;
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
    /* img {
      transition: all .3s linear;
      transform: scale(1);
    }
    .big{
      position: fixed;
      z-index: 9999;
      transform: scale(2);
    } */
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
    background: #FF7171;
    display: flex;
    justify-content: space-between;
    span,
    a {
      width: 88px;
      height: 88px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:active {
        background: #FF8178;
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
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #000;
    opacity: 0.7;
    color: #fff;
    line-height: 40px;
    font-size: 24px;
    text-align: center;
    position: absolute;
    z-index: 999;
    top: 20px;
    left: 20px;
  }

  .you-like-goods {
    width: 360px;
    height: 360px;
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
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #363434;
    }
    ul {
      li {
        float: left;
        strong {
          color: #FE0303;
          font-size: 15px;
          font-weight: 500;
        }
        i {
          color: #555555;
          font-size: 12px;
          padding-left: 5px;
        }
      }
      .like-goods-right {
        float: right;
        color: #555555;
      }
    }
    .discounts {
      position: absolute;
      display: inline-block;
      background: rgb(236, 66, 66);
      color: #fff;
      padding: 5px;
      border-radius: 5px 0 0 5px;
      right: 5px;
      bottom: 65px;
    }
  }

  .you-like-text {
    background: #fff;
    margin-top: 10px;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }

</style>
