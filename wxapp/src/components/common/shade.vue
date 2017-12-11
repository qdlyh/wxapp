<template>
    <div>
       <div class="img-view" @click="bigImg">
            <!-- 遮罩层 -->
            <div class="img-layer"></div>
            <div class="img">
                <img :src="imgSrc">
            </div>
        </div>
    </div>
       
</template>
<script>
export default {
  props: ["imgSrc"],
  methods: {
    bigImg() {
      // 发送事件
      this.$emit("clickit");
    }
  }
};
</script>
<style scoped>
/* bigimg */

.img-view {
  position: relative;
  width: 100%;
  height: 100%;
}

/*遮罩层样式*/
.img-view .img-layer {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  background: #000;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/*不限制图片大小，实现居中*/
.img-view .img img {
  position: fixed;
  width: 100%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 9999;
}
</style>