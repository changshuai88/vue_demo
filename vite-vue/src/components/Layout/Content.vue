<template>
  <div class="header">
    <div class="icon">
      <el-icon v-if="isClose" @click="change"><Expand /></el-icon>
      <el-icon v-else @click="change"><Fold /></el-icon>
    </div>
  </div>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["isClose"],
  emits: ["change"],
  setup(props, { emit }) {
    // 切换菜单折叠和展开
    // console.log($emit);
    const change = () => {
      emit("change");
    };
    return {
      change,
    };
  },
};
</script>

<style lang="less" scoped>
.header {
  height: 50px;
  line-height: 50px;
  background: #1e78bf;
  color: white;
  .icon {
    font-size: 24px;
    i {
      cursor: pointer;
    }
  }
}
.wrapper {
  margin: 10px;
}
</style>