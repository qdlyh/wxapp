<template>
    <div>
        <div class="page-seek">
        <input type="text" placeholder="请输入你正在搜索的宝贝">
        <i>
           <img src="../images/15165156.png" alt="">
        </i>
      </div>
    </div>   
</template>
<style lang="scss" scoped>
.page-seek {
  width: 526px;
  margin-top: 20px;
  display: inline-block;
  border-radius: 24px;
  background: #dfdfdf;
  height: 48px;
  input {
    width: 460px;
    height: 48px;
    float: left;
    border-radius: 24px;
    font-size: 24px;
    // background: #dfdfdf;
    background: #dfdfdf;
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
    height: 48px;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    &:active {
      background: #ccc;
    }
  }
}
</style>
