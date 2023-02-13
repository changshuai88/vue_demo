<template>
  <div class="header"></div>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  height: 50px;
  background: pink;
}
.wrapper {
  margin: 20px;
}
</style>