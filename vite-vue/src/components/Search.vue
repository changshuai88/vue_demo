<script>
import { ref } from "vue";
export default {
  name: "Search",
  setup() {
    const info = ref("请输入内容...");
    return {
      info,
    };
  },
};
</script>

<template>
  <el-input :placeholder="info" class="search"> </el-input>
  <!-- <el-button slot="append" icon="el-icon-search"></el-button> -->
</template>

<style scoped>
.search {
  margin-top: 30px;
  line-height: 20%;
  height: 20%;
}
</style>
