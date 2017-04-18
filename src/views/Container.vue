<template>
    <div class="mj">
        <mj-nav></mj-nav>
        <div class="mj-container">
          <router-view></router-view>  
        </div>
        <mj-footer></mj-footer>
    </div>
</template>
<script>
export default {
  name: 'container',
  created () {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.mj-container {
    min-height: 76vh;
}
</style>
