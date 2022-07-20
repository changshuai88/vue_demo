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
  "http://www.votai.net/UploadFiles/Album/20140922100228673.jpg",
  "http://www.votai.net/UploadFiles/Album/20140922100204423.jpg",
  "http://www.votai.net/UploadFiles/Album/20140922100143361.jpg",
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