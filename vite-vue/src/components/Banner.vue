<template>
  <el-row class="banner">
    <el-col :span="6">
      <img src="@/assets/logo.png" alt="" />
    </el-col>
    <el-col :span="12">
      <el-input placeholder="请输入内容" :suffix-icon="Search" class="w-50 m-2">
        <Search style="width: 1em; height: 1em; margin-right: 8px" />
      </el-input>
    </el-col>
    <el-col :span="6">
      <p>grader spare parts</p>
      <span>18222122805</span>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
</script>



<style scoped>
.banner {
  max-height: 80px;
  width: 100%;
}
.banner img {
  height: 80px;
}
</style>