<template>
  <div class="login">
    <input type="" name="" placeholder="用户名">
    <input type="" name="" placeholder="密码">
    <div>
      <button class="button is-primary">确定</button>
      <button class="button">取消</button>
    </div>
    <div>
      没有账号？前往<a href="">注册</a>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.login {
  display: flex;
  align-items: center;
  flex-direction: column;
  input {
    width: 50%;
    padding: .5rem;
    margin: .5rem;
  }
  div {
    padding: .5rem;
    margin: 1rem;
  }
}
</style>
