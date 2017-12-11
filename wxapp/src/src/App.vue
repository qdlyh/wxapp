<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted(){
// document.querySelector('body').addEventListener('touchmove', function(e) {
//     e.preventDefault();
// })
  }
}
</script>

<style>
body{background: #EDEDED;}
  *{margin: 0;padding: 0;font-family: Microsoft YaHei;color: #343232}
  .default-text{font-size: 25px;}
#app {

 /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
