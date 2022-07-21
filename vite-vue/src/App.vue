<template >
  <el-row id="nav">
    <el-col :span="6" class="logo"
      ><img src="@/assets/logo.png" alt=""
    /></el-col>
    <el-col :span="18">
      <daohang />
    </el-col>
  </el-row>
  <lunbotu />
  <!-- </div> -->
  <el-row class="main">
    <el-col :span="24">
      <router-view></router-view>
    </el-col>
  </el-row>
  <el-row><Footer /></el-row>
</template>
<script>
import Search from "@/components/Search.vue";
import Footer from "@/components/Footer.vue";
// import Banner from "@/components/Banner.vue";
import lunbotu from "@/components/lunbotu.vue";
import daohang from "@/components/daohang.vue";

export default {
  name: "APP",
  components: {
    Search,
    Footer,
    // Banner,
    lunbotu,
    daohang,
  },
};
</script>
<style>
body {
  margin: 0;
}
.main {
  min-height: 500px;
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
/* .banner {
  margin: 0 auto;
  width: 100%;
  height: 80px;
  background-color: blue;
} */
#nav {
  /* margin: 0 auto; */
  width: 100%;
  height: 90px;
  background-color: #545c64;
  color: rgb(247, 223, 7);
  line-height: 50px;
  text-align: center;
  /* padding-top: 15px; */
  font-weight: bolder;
  padding: 3px 10px;
}

.logo {
  /* padding-right: 3px;
  background-color: #2c3e50; */
  height: 100%;
  line-height: 80px;
  font-size: 80px;
}
.logo img {
  height: 100%;
}
</style>