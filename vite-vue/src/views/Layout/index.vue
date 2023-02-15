<template>
  <div class="menu">
    <MyMenu :isClose="isClose"></MyMenu>
  </div>
  <div class="content">
    <Content :isClose="isClose" @change="change"></Content>
  </div>
</template>

<script>
import MyMenu from "@/components/Layout/MyMenu.vue";
import Content from "@/components/Layout/Content.vue";
import { ref } from "vue";
export default {
  components: {
    MyMenu,
    Content,
  },
  setup() {
    //本组件为父组件为两个子组件传值
    let isClose = ref(false);
    // 修改变量
    const change = () => {
      isClose.value = !isClose.value;
    };
    return {
      isClose,
      change,
    };
  },
};
</script>

<style lang="less" scoped>
.menu {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: #112f50;
}
.content {
  padding-left: 200px;
}
</style>