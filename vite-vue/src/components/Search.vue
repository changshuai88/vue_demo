<script>
import { ref } from "vue";
export default {
  name: "Search",
  setup() {
    const info = ref("请输入内容");
    return {
      info,
    };
  },
};
</script>

<template>
  <el-input :placeholder="info">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
</template>

<style scoped>
</style>
