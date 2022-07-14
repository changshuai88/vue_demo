<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in imgs" :key="item">
      <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
      <img :src="item" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
// import { Search } from "@element-plus/icons-vue";
const imgs = reactive([
  "http://www.lylongyi.com/images/l/page_index/1610695325Yzu0.jpg",
  "http://www.lylongyi.com/images/l/page_index/1610694893dkNh.jpg",
  "http://www.lylongyi.com/images/l/page_index/1610695325Yzu0.jpg",
  "http://www.lylongyi.com/images/l/page_index/1610694893dkNh.jpg",
  "http://www.lylongyi.com/images/l/page_index/1610695325Yzu0.jpg",
  "http://www.lylongyi.com/images/l/page_index/1610694893dkNh.jpg",
]);

console.log(imgs);
</script>



<style scoped>
.el-carousel__item img {
  height: 100%;
  width: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>