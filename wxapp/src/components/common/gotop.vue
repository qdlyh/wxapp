<template>
	<div class="gotop" @click="gotop">
		<div class="center">
			<p style="font-size:20px;">↑</p>
			<p>顶部</p>
		</div>
	</div>
</template>

<script>
export default {
  methods: {
    gotop() {
      document.getElementsByClassName("scroll-container")[0].scrollTop = 0;
    }
  }
};
</script>

<style scoped lang="scss">
p {
  font-size: 18px;
}
.gotop {
  background: #e9e9e9;
  p {
    color: #7f7e7e;
  }
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #e9e9e9;
  position: fixed;
  bottom: 120px;
  right: 40px;
  text-align: center;
  .center {
    margin-top: 15px;
  }
}
</style>