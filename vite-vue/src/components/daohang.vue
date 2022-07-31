<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="/"
      ><router-link to="/" underline="false">首页</router-link></el-menu-item
    >
    <el-menu-item index="/about"
      ><router-link to="/about">公司介绍</router-link></el-menu-item
    >
    <el-menu-item index="/product"
      ><router-link to="/product">产品中心</router-link></el-menu-item
    >
    <el-menu-item index="3">新闻信息</el-menu-item>
    <el-menu-item index="4">联系我们</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("/");
const activeIndex2 = ref("/");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(location.href);
  console.log(key, keyPath);
};
</script>
<style scoped>
.el-menu-demo {
  height: 100%;
  width: 100%;
}
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
.el-menu--horizontal {
  border-bottom: none;
}
</style>