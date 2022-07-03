<template >
  <div class="banner"></div>
  <!-- <div id="nav"> -->
  <el-row id="nav">
    <el-button type="success"><router-link to="/">HOME</router-link></el-button>
    <el-button type="success"
      ><router-link to="/about">ABOUT</router-link></el-button
    >
  </el-row>
  <!-- </div> -->
  <div class="lf">
    <router-view></router-view>
  </div>
</template>
<style>
#app {
  width: 90%;
  height: 100vh;
  background-color: yellow;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}
.banner {
  /* margin: 0 auto; */
  width: 100%;
  height: 100px;
  background-color: blue;
}
#nav {
  /* margin: 0 auto; */
  width: 100%;
  /* height: 50px; */
  background-color: azure;
  line-height: 50px;
  text-align: center;
  /* padding-top: 15px; */
  font-weight: bolder;
  padding: 3px 10px;
}

.lf {
  width: 80%;
  /* height: 100; */
  background-color: chartreuse;
  float: right;
}
</style>