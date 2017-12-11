<template>
<div>
  <router-link to="/seekText">
	<div class="search">

        <div class="page-seek">
        <input type="text" placeholder="请输入你正在搜索的宝贝" readonly = "readonly">
        <i>
           <img src="../images/15165156.png" alt="">
        </i>
    </div>
    </div> 
  </router-link>
	<div class="mid">
		<!-- <corlist></corlist> -->
		<div class="content">
			<ul>
				<li v-for="(detail,index) in classifys" :key="index" @click="godetail(index)">
				<div class="single">
					<img :src="detail.img">
					<div class="text">
						<span class="describe">{{detail.describe}}</span>
						<br>
						<span class="styl">{{detail.styl}}</span>
					</div>
				</div>
				</li>
			</ul>
		</div>
	</div>
	<footerpage></footerpage>
</div>
</template>

<script>
import footerpage from "@/components/common/footerpage";
import corlist from "@/components/common/corlist";
export default {
  components: { corlist, footerpage },
  data() {
    return {
      classifys: [
        {
          img:
            "https://img.alicdn.com/bao/uploaded/i3/2895296178/TB25zxQayP85uJjSZFKXXcw7FXa_!!2895296178.jpg_b.jpg",
          describe: "找品味",
          styl: "女装"
        },
        {
          img:
            "https://img.alicdn.com/bao/uploaded/i3/2895296178/TB25zxQayP85uJjSZFKXXcw7FXa_!!2895296178.jpg_b.jpg",
          describe: "爱自己多一点好吗",
          styl: "至尊款马桶头等舱"
        },
        {
          img:
            "https://img.alicdn.com/bao/uploaded/i3/2895296178/TB25zxQayP85uJjSZFKXXcw7FXa_!!2895296178.jpg_b.jpg",
          describe: "爱自己多一点",
          styl: "杜蕾斯"
        },
        {
          img:
            "https://img.alicdn.com/bao/uploaded/i3/2895296178/TB25zxQayP85uJjSZFKXXcw7FXa_!!2895296178.jpg_b.jpg",
          describe: "爱自己多一点",
          styl: "至尊款马桶"
        },
        {
          img:
            "https://img.alicdn.com/bao/uploaded/i3/2895296178/TB25zxQayP85uJjSZFKXXcw7FXa_!!2895296178.jpg_b.jpg",
          describe: "爱自己多一点",
          styl: "至尊款马桶"
        },
        {
          img:
            "https://img.alicdn.com/bao/uploaded/i3/2895296178/TB25zxQayP85uJjSZFKXXcw7FXa_!!2895296178.jpg_b.jpg",
          describe: "更多惊喜",
          styl: "其他"
        }
      ]
    };
  },
  mounted(){},
  methods: {
    godetail(i) {
      this.$router.push({ path: "/headpage" });
    }
  }
};
</script>

<style scoped lang="scss">
.search {
  text-align: center;
}
.page-seek {
  width: 90%;
  margin-top: 20px;
  display: inline-block;
  border-radius: 24px;
  background: #fff;
  height: 58px;
  input {
    width: 90%;
    height: 58px;
    float: left;
    border-radius: 24px;
    font-size: 24px;
    // background: #dfdfdf;
    background: #fff;
    border: 0;
    padding-left: 12px;
    outline: none;
    &::-webkit-input-placeholder {
      font-size: 24px;
      color: #b1b1b1;
    }
  }
  i {
    display: inline-block;
    width: 48px;
    height: 58px;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    // &:active {
    //   background: #ccc;
    // }
  }
}
.mid {
  padding: 20px 5px;
}
.content {
  font-size: 20px;
  width: 100%;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      position: relative;
      height: 140px;
      list-style: none;
      background: #fff;
      width: 49%;
      vertical-align: top;
      display: inline-block;
      margin-bottom: 15px;
      img {
        width: 100px;
        height: 100px;
        display: inline-block;
      }
    }
  }
  .single {
    position: absolute;
    width: 320px;
    height: 100px;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    margin: auto;
    text-align: left;
    // left: 0px;
  }
  .text {
    padding: 8px 10px;
    display: inline-block;
    vertical-align: top;
    span {
      text-align: left;
      display: inline-block;
    }
    .describe {
      margin-bottom: 15px;
      font-size: 22px;
      color: #646060;
    }
    .styl {
      font-size: 24px;
    }
  }
}
</style>