<template>
	<div class="flashsale">
		<div class="headpage">
			<div class="title">
				<p>淘抢购</p>
			</div>
			<div class="tip">
				<span class="left">&lt;</span>
				<span class="right">&gt;</span>
				<div class="tiptext">
					<ul :style="{width: widthdata}">
						<li  v-for="(item,index) in items" :key="index" :class="{'light':flag==index}"  @click='light(index)'>
							<p>{{item.name}}</p>
							<p>{{item.state}}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="describe">
			<img  v-lazy="imgsrc">
			<span>限时限量疯狂购物</span>
		</div>
		<salelist :tb="tb"></salelist>
		<footerpage></footerpage>
		<gotop></gotop>
	</div>
</template>

<script>
import footerpage from "@/components/common/footerpage.vue";
import salelist from "@/components/common/corlist.vue";
import gotop from "@/components/common/gotop.vue";
export default {
  components: { footerpage, salelist, gotop },
  data() {
    return {
      tb: { top: "267px", bottom: "99px" },
      imgsrc: require("../images/car.png"),
      widthdata: "1800px",
      flag: -1,
      items: [
        { name: "凌晨场", state: "已开抢" },
        { name: "凌晨场", state: "已开抢" },
        { name: "凌晨场", state: "已开抢" },
        { name: "凌晨场", state: "已开抢" },
        { name: "凌晨场", state: "已开抢" },
        { name: "凌晨场", state: "已开抢" },
        { name: "凌晨场", state: "已开抢" }
      ]
    };
  },
  mounted() {
    this.flag = 0;
    this.widthdata = this.items.length * 145 + "px";
  },
  methods: {
    light(i) {
      this.flag = i;
    }
  }
};
</script>

<style scoped lang="scss">
* {
  font-size: 25px;
}
.light {
  background: #f34a4f;
}
.title {
  padding: 25px 0;
  background: #fff;
  p {
    text-align: center;
  }
}
.tip {
  // padding: 15px 0;
  width: 100%;
  background: #2e3746;
  span {
    display: inline-block;
    text-align: center;
    width: 50px;
    font-size: 35px;
    color: #fff;
    line-height: 90px;
    // display: none;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .tiptext {
    // width:100%;
    overflow-x: auto;
  }
  // ul{width: 1800px;}
  li {
    padding: 15px 0;
    display: inline-block;
    width: 145px;
    p {
      color: #fff;
      text-align: center;
    }
  }
}
.headpage {
  position: fixed;
  width: 100%;
  top: 0;
}
.describe {
  margin-top: 180px;
  padding: 20px 20px;
  img {
    width: 48px;
    height: 48px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 15px;
  }
  span {
    color: #f56c6d;
    display: inline-block;
  }
}
</style>