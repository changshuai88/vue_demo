<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    active-text-color="#ffd04b"
    background-color="#112f50"
    text-color="#fff"
    router
  >
    <el-menu-item
      ><template #title><span>采购系统</span></template></el-menu-item
    >
    <el-menu-item index="/"
      ><template #title
        ><el-icon><HomeFilled /></el-icon><span>系统首页</span></template
      ></el-menu-item
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
export default {
  setup() {
    // 定义开关
    const isCollapse = ref(false);
    return {
      isCollapse,
    };
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>