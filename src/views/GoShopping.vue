<template>
  <div class="container">
    <div class="mj-goshopping">
      <div class="flex">
        <img src="http://d7.yihaodianimg.com/N10/M00/A2/51/ChEi2lfqMPKAGHRgAANcLAdIAMI33501_200x200.webp"> 
        <p>卫龙面筋</p>
        <p>1.9元</p>
      </div>
      <button class="gobtn">去结算</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'goshopping'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../assets/styles/helper.less';

.flex {
  display: flex;
  align-items: center;
}
p {
  font-size: 1.8px;
}
.gobtn {
  float: right;
  width: 170px;
  height: 50px;
  line-height: 50px;
  background-color: #ff5c4d;
  border-radius: 2px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  margin-top: 10px;
  border: none;
}
</style>
