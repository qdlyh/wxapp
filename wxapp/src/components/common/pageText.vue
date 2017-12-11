<template>
<div>
	<div class="page">
		<span class="back" @click="back">&lt;</span>
		<p class="page-text">{{name}}</p>
	</div>
</div>
</template>
<script>
export default {
	props:["name"],
	data() {
	return {};
	},
	methods:{
		back(){
			this.$router.go(-1);
		}
	}
};
</script>
<style scoped lang="scss">
	.page-text{
    margin: 0 auto;
    font-size: 28px;
    color: #000;
  }
  .back{
  	position: absolute;
    font-size: 40px;
    color: #4F4F4F;

  }
</style>