<template>
  <!-- <div class="footer"> -->
  <!-- <div class="left">天津市西青区中北工业园南园红运路11号</div>
    <div class="right">
      <a target="_blank" href="https://github.com/newbee-ltd/vue3-admin"
        >vue3-admin Version 3.0.0</a
      >
    </div> -->
  <el-row class="footer">
    <el-col :span="12" :xs="24">
      <p>地址:天津市西青区中北工业园南园红运路11号</p>
      <p>手机:18222122805</p>
      <p>邮箱:changxuanyuan@sina.com</p>
    </el-col>
    <el-col :span="12" class="wechat" :xs="24">
      <img src="http://www.changjinshuai.cn/uploads/wechat.jpg" alt="" />
      <p>扫码关注我们</p>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  border-top: 1px solid #e9e9e9;
  margin-top: 5px;
}
.wechat img {
  margin-top: 5px;
  height: 100px;
}
</style>