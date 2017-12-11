<template>
	<div>
		<ul class="footer">
			<li @click="homepage">
				<img src="../images/my.jpg">
				<p>首页</p>
			</li>
			<li @click="flashsale">
				<img src="../images/my.jpg">
				<p>淘抢购</p>
			</li>
			<li @click="classify">
				<img src="../images/my.jpg">
				<p>分类</p>
			</li>
			<li @click="my">
				<img src="../images/my.jpg">
				<p>我的</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		methods:{
			homepage(){
				this.$router.push({});
			},
			flashsale(){
				this.$router.push({path:'/flashsale'});
			},
			classify(){
				this.$router.push({path:'/classify'});
			},
			my(){

			}
		}
	}
</script>

<style scoped lang="scss">
    *{margin: 0;padding: 0;}
	li{list-style: none;width: 24%;display: inline-block;}
	.footer{
		border-top:1px solid #CBCBCB;
		text-align: center;
		padding-top: 10px;
		padding-bottom: 5px;
		background: #fff;
		font-size: 20px;
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>