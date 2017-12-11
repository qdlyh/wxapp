<template>
<div class="list" :style="{top: tb.top,bottom: tb.bottom}">
<pull-to  :top-load-method="refresh" :bottom-load-method="loadmore">
	<ul v-for="detail,index in corlists" class="corlist" @click="godetail(index)">
		<li class="pic">
			<img v-lazy="detail.img">
		</li>
		<li class="savemoney">
			<div style="text-align: center;">
				<p class="savetip">下单立省</p>
				<span class="savenum">￥&nbsp;{{detail.sprice}}</span>
			</div>
		</li>
		<li class="shopinfo">
			<p class="describe">{{detail.describe}}</p>
			<div class="footinfo">
			<span class="midtext">天猫价：{{detail.oprice}}元</span>
			<span class="sales midtext">月销量：{{detail.sales}}</span>
			<br>
			<span>券后价：</span><span class="dprice">{{detail.dprice}}元</span>&nbsp;&nbsp;&nbsp;
			<span v-if="detail.post" class="post">包邮</span>
			</div>
		</li>
	</ul>
</pull-to>
</div>
</template>

<script>
	import PullTo from 'vue-pull-to'
	export default{
		components:{PullTo},
		props:["tb"],
		data(){
			return{
				corlists:[{img:'https://img.alicdn.com/bao/uploaded/i3/2895296178/TB25zxQayP85uJjSZFKXXcw7FXa_!!2895296178.jpg_b.jpg',describe:'地尔水疗',oprice:469.0,sales:255,dprice:169.0,post:true,sprice:0},
				{img:'https://img.alicdn.com/bao/uploaded/i3/2895296178/TB25zxQayP85uJjSZFKXXcw7FXa_!!2895296178.jpg_b.jpg',describe:'地尔水疗马桶蓝色主义风格总会有一个人看你的眼神与众不同',oprice:469.0,sales:255,dprice:169.0,post:true,sprice:0},
				{img:'https://img.alicdn.com/bao/uploaded/i3/2895296178/TB25zxQayP85uJjSZFKXXcw7FXa_!!2895296178.jpg_b.jpg',describe:'地尔水疗马桶蓝色主义风格总会有一个人看你的眼神与众不同',oprice:469.0,sales:255,dprice:169.0,post:true,sprice:0},
				{img:'https://img.alicdn.com/bao/uploaded/i3/2895296178/TB25zxQayP85uJjSZFKXXcw7FXa_!!2895296178.jpg_b.jpg',describe:'地尔水疗马桶蓝色主义风格总会有一个人看你的眼神与众不同',oprice:469.0,sales:255,dprice:169.0,post:true,sprice:0},
				{img:'https://img.alicdn.com/bao/uploaded/i3/2895296178/TB25zxQayP85uJjSZFKXXcw7FXa_!!2895296178.jpg_b.jpg',describe:'地尔水疗马桶蓝色主义风格总会有一个人看你的眼神与众不同',oprice:469.0,sales:255,dprice:169.0,post:true,sprice:0},
				{img:'https://img.alicdn.com/bao/uploaded/i3/2895296178/TB25zxQayP85uJjSZFKXXcw7FXa_!!2895296178.jpg_b.jpg',describe:'地尔水疗马桶蓝色主义风格总会有一个人看你的眼神与众不同',oprice:469.0,sales:255,dprice:169.0,post:true,sprice:0},
				{img:'https://img.alicdn.com/bao/uploaded/i3/2895296178/TB25zxQayP85uJjSZFKXXcw7FXa_!!2895296178.jpg_b.jpg',describe:'地尔水疗马桶蓝色主义风格总会有一个人看你的眼神与众不同',oprice:469.0,sales:255,dprice:169.0,post:true,sprice:0}
				]
			}
		},
		mounted(){
			this.reckon();
			// console.log(this.corlists.length);
		},
		methods:{
			reckon(){
				for(let i=0;i<this.corlists.length;i++){
					this.corlists[i].sprice=this.corlists[i].oprice-this.corlists[i].dprice;
				}
			},
			refresh(loaded) {
			setTimeout(() => {
				for(let i=0;i<this.corlists.length;i++){
					this.corlists[i].oprice=666;
				}
				this.reckon();
			loaded('done');
			}, 1500);
			},
			loadmore(loaded){
			setTimeout(() => {
			loaded('done');
			}, 1500);
			},
			godetail(index){
				this.$router.push({path:'/goods'})
			}
		}
	}
</script>

<style scoped lang="scss">
	*{margin: 0;padding: 0;font-family: Microsoft YaHei;color: #343232;font-size: 22px;}
	li{list-style: none;display: inline-block;}
	.list{position:absolute;width:100%;top:267px;bottom:99px;overflow:hidden;}
	.corlist span{display: inline-block;}
	.corlist{
		height: 150px;
		background: #fff;
		border-radius: 0 15px 15px 0px;
		overflow: hidden;
		margin-bottom: 20px;
	}
	.corlist {height: 150px;}
	.corlist .pic{
		float: left;
		margin-left: 10px;
	}
	.corlist .pic,.corlist .pic img{
		width: 150px;
		height: 150px;

	}
	.corlist .describe{
		word-break: break-all;
		margin-bottom:8px;
	}
	.corlist .dprice{
		color: #F34A4F;
	}
	.corlist .sales{margin-bottom: 5px;margin-left: 24px;}
	.corlist .post{
		font-size: 14px;
		padding: 3px 8px;
		background: #F34A4F;
		color: #fff;
		border-radius: 20px;
	}
	.corlist .savemoney{
		float: right;
		width: 150px;
		height: 150px;
		background: #F34A4F;
	}
	.corlist .savemoney div{
		margin-top: 30px;
	}
	.corlist .savetip{
		color: #fff;
		margin-bottom: 10px;
	}

	.corlist .shopinfo{
		display: block;
		text-align: left;
		padding: 10px 160px 10px 170px;
		position:relative;height:130px;
	}
	.footinfo{display:inline-block;position:absolute;bottom:8px;}
	.corlist .savenum{
		padding: 10px 30px;
		background: #fff;
		color: #F34A4F;
		border-radius: 20px;
	}

	.midtext{font-size: 20px;color: #8D8A8A;}
</style>