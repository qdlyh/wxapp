<template>
<div>
	<div class="headpage">
		<div class="head">
			<a @click="goback">&lt;</a>
			<p class="headtitle">{{title}}</p>
		</div>
		<div class="itemsel">
			<ul>
				<li v-for="item,index in items" :class="{selshow:flag==index}" @click="toggle(index)">
				{{item}}∨</li>
			</ul>
		</div>
	</div>
	<salelist :tb="tb"></salelist>
	<gotop></gotop>
</div>
</template>

<script>
	import gotop from './gotop.vue'
	import salelist from './corlist'
	export default{
		components:{gotop,salelist},
		data(){
			return{
				tb:{top:'145px',bottom:'0px'},
				flag:0,
				title:'地尔水疗马桶',
				items:['综合','券后价','优惠券','销量']
			}
		},
		mounted(){
		},
		methods:{
			toggle(i){
				this.flag=i;
			},
			goback(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped lang="scss">
	*{font-size: 25px;}
	.headpage{position: fixed;width: 100%;}
	li{list-style: none;}
	a{font-size: 35px;text-decoration:none;float: left;display: inline-block;padding: 0 15px;line-height: 80px;}
	.head{background: #fff;}
	.headtitle{text-align: center;line-height: 80px;}
	.itemsel{
		border-top: 1px solid #D9D7D7;
		border-bottom: 1px solid #D9D7D7;
		background: #fff;
		ul{display: flex;}
		li{line-height: 60px; flex-grow: 1;text-align: center;}
	}
	.selshow{
		color: #F34A4F;
		border-bottom: 3px solid #F34A4F;
	}

</style>