<template>
    <div class="nav">
        <mt-header title="">
          <router-link to="index" slot="left">
            <mt-button @click="navBar ? navBar = false : navBar = false">妙寄官网首页跳转</mt-button>
          </router-link>
          <mt-button style="width: 3.2rem;" slot="right" @click="navBar ? navBar = false : navBar = true"></mt-button>
        </mt-header>
        <div class="nav-bar" v-if="navBar" @click="navBar ? navBar = false : navBar = true">
          <router-link to="index">
            <p>快递查询</p>
          </router-link>
          <router-link to="download">
            <p>APP下载</p>
          </router-link>
          <router-link to="index">
            <p>城市合伙人</p>
          </router-link>
          <router-link to="index">
            <p>入驻标准</p>
          </router-link>
          <router-link to="index">
            <p>新闻咨询</p>
          </router-link>
          <router-link to="index">
            <p>关于我们</p>
          </router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: 'nav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      navBar: false
    }
  },
  methods: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

header.mint-header {
  height: 53px;
  background-color:white;
  padding-left:16px;
  padding-right:17px;
  div.mint-header-button {
    height:45.5px;
  }
  div.mint-header-button.is-left {
    flex:.6;
    background-size:80% 80%;
    background-repeat: no-repeat;
    background-position: 5px 4px;
    a {
      color: transparent;
    }
  }
  div.mint-header-button.is-right {
    flex:.2;
    background-size:90% 63%;
    background-repeat: no-repeat;
    background-position: 5px 8px;
  }
}

.nav-bar {
  margin-top: 1px;
  position: absolute;
  right: 0;
  background-color: white;
  padding: 0 1.2rem;
  border: 1px solid #ccc;
  border-top-width: 0;
  border-right-width: 0;
  z-index: 100;
  a {
    text-decoration: none;
  }
  p {
    margin: 0 0;
    color: rgb(255, 122, 34);
    border-bottom: 1px solid #ccc;
    font-size: 1.5rem;
    padding: 1rem .5rem;
  }
}


</style>
