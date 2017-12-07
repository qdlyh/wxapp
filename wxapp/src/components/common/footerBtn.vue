<template>
  <div>
    <footer class="footer">
      <ul>
        <li class="feedback">
          <router-link to="path">
            <span>
              <img src="../images/15165156.png">
              <i>反馈</i>
            </span>
          </router-link>
        </li>
        <li class="btn-red">
          <router-link to="path">
            <span>分享商品</span>
          </router-link>
        </li>
        <li class="btn-red btn-reds">
          <router-link to="path">
            <span>领20元优惠券</span>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }

</script>
<style scoped lang="scss">
  .footer {
    ul {
      width: 750px;
      padding: 10px 0;
      position: fixed;
      bottom: 0;
      z-index: 1111;
      background: #fff;
      li {
        float: left;
      }
      .feedback {
        display: inline-block;
        width: 60px;
        span {
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          i {
            text-align: center;
            font-size: 18px;
          }
          img {
            width: 20px;
            height: 20px;
            margin: 0 auto;
          }
        }
        a {
          color: #555555;
        }
      }
    }
    .btn-red {
      display: inline-block;
      width: 320px;
      height: 40px;
      font-size: 24px;
      background: rgb(252, 63, 63);
      margin: 0 10px;
      border-radius: 5px;
      text-align: center;
      line-height: 40px;
      a {
        color: #fff;
      }
    }
    .btn-reds {
      background: rgb(206, 56, 56);
    }
  }

</style>
