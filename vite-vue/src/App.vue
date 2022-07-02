<template>
  <div class="banner"></div>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
  </div>
  <div class="lf">
    <router-view></router-view>
  </div>
</template>
<style scoped>
.banner {
  margin: 0 auto;
  width: 80%;
  height: 100px;
  background-color: blue;
}
#nav {
  margin: 0 auto;
  width: 80%;
  height: 50px;
  background-color: azure;
  line-height: 50px;
  text-align: center;
}
.lf {
  width: 60%;
  height: 500px;
  background-color: chartreuse;
  float: right;
}
</style>