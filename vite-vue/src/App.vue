<template >
  <div class="banner">
    <el-row tag="span">
      <el-col :span="4" class="logo">LOGO</el-col>
      <el-col :span="12">
        <Search />
      </el-col>
      <el-col :span="8" class="logo">18222122805</el-col>
    </el-row>
  </div>
  <!-- <div id="nav"> -->
  <el-row id="nav">
    <el-button type="success"><router-link to="/">HOME</router-link></el-button>
    <el-button type="success"
      ><router-link to="/about">ABOUT</router-link></el-button
    >
  </el-row>
  <!-- </div> -->
  <el-row>
    <div class="lf">
      <router-view></router-view>
    </div>
  </el-row>
  <el-row><Footer /></el-row>
</template>
<script>
import Search from "@/components/Search.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "APP",
  components: {
    Search,
    Footer,
  },
};
</script>
<style>
body {
  margin: 0;
}
#app {
  width: 90%;
  height: 100vh;
  /* background-color: yellow; */
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
  height: 80px;
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
.logo {
  background-color: #2c3e50;
  color: white;
  height: 80px;
  line-height: 80px;
}
</style>