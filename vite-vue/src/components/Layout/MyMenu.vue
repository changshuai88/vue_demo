<template>
  <!-- default-active 读取路由信息来替换值 -->

  <el-menu
    :default-active="route.path"
    class="el-menu-vertical-demo"
    :collapse="isClose"
    active-text-color="#ffd04b"
    background-color="#112f50"
    text-color="#fff"
    router
  >
    <el-menu-item index="/logo"
      ><template #title><span>采购系统</span></template></el-menu-item
    >
    <el-menu-item index="/">
      <!-- 这个要写在template外面，不然折叠后不显示 -->
      <el-icon><HomeFilled /></el-icon>
      <template #title> <span>系统首页</span></template></el-menu-item
    >
    <el-sub-menu index="/goods">
      <template #title>
        <el-icon><Grid /></el-icon>
        <span>产品管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/goods/list"
          ><el-icon><List /></el-icon>产品列表</el-menu-item
        >
        <el-menu-item index="/goods/category"
          ><el-icon><Checked /></el-icon>产品分类</el-menu-item
        >
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  // 接受父组件的值
  props: ["isClose"],
  setup() {
    // 定义开关
    // const isCollapse = ref(false); 被父组件传值isClose代替
    // 使用路由
    const route = useRoute();
    // console.log(route.path);
    return {
      // isCollapse,
      route,
    };
  },
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  border-right: none;
}
</style>