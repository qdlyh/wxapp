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

</style>
