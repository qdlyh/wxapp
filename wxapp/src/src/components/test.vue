<template>
  <div style="position:fixed;height:90%;width:100%;margin-top:100px;">
    <pull-to  :top-load-method="refresh" :bottom-load-method="loadmore">
      <ul>
        <li v-for="item in tests">{{item}}</li>
      </ul>
    </pull-to>
  </div> 
</template>

<script>
  import PullTo from 'vue-pull-to'
  export default {
    name: 'example',
    components: {
      PullTo
    },
    data(){
      return{
        tests:20
      }
    },
    methods: {
      refresh(loaded) {
        setTimeout(() => {
          // this.dataList.reverse();
          // this.tests=[8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];
          this.tests+=10;
          // this.tests.reverse();
          loaded('done');
        }, 1500);
      },
      loadmore(loaded){
        setTimeout(() => {
          // this.dataList.reverse();
          // this.tests=['a','b','c','d','e','f','g','d','e','f','g','d','e','f','g','d','e','f','g','d','e','f','g','d','e','f','g'];
          this.tests+=20;
          loaded('done');
        }, 1500);
      }
    }
  }
</script>
<style scoped>
  *{font-size: 25px;}
</style>