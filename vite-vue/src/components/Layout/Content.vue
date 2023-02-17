<template>
  <div class="header">
    <div class="icon">
      <el-icon v-if="isClose" @click="change"><Expand /></el-icon>
      <el-icon v-else @click="change"><Fold /></el-icon>
    </div>

    <div class="right">
      <div class="time">{{ time }}</div>
      <div class="line">|</div>
      <div class="loginout" @click="out">
        <el-icon><SwitchButton /></el-icon>
      </div>
    </div>
  </div>

  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
// 引入dayjs格式化时间
import dayjs from "dayjs";
import { useRouter } from "vue-router";
export default {
  props: ["isClose"],
  emits: ["change"],
  setup(props, { emit }) {
    // let isSonClose = props.isClose;
    // console.log(isSonClose);
    // 定义时间变量
    let time = ref(null);
    //定义路由，注意引入
    const router = useRouter();
    // 切换菜单折叠和展开

    const change = () => {
      emit("change");
    };

    // 生命周期函数
    onMounted(() => {
      // 获取当前时间
      time.value = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");
      // console.log(time);
    });
    // 退出登录
    const out = () => {
      router.push("/login");
    };
    return {
      change,
      time,
      out,
      // isSonClose,
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
  display: flex;
  .icon {
    font-size: 24px;
    flex: 1;
    i {
      cursor: pointer;
    }
  }
  .right {
    padding-right: 20px;
    // font-size: 16px;
    display: flex;

    .time {
      font-size: 12px;
    }
    .line {
      padding: 0 10px;
    }
    .loginout {
      margin-top: 2px;
    }
  }
}
.wrapper {
  margin: 10px;
}
</style>