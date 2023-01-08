<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="公司简介" name="first">
      <h2>公司简介</h2>
      <p>
        天津沃泰机械贸易有限公司，坐落于天津滨海新区，成立于2010年。有着多年的贸易出口经验和丰富的国内供应渠道。主打：天工全系列工程机械及相关配件，三一平地机配件，徐工全系列工程机械及相关配件，山推、彭浦推土机配件，上柴、潍柴、玉柴发动机配件，柳工、临工、厦工装载机配件。
        公司凭借天津港，向全球多个国家出口国内品牌工程机械：平地机，推土机，装载机整机，以及相关的各种配件：四轮一带，变速箱总成，斗齿，刀板，涡轮箱，液压锁，增压器，水箱，发动机四配套，各种底盘件，桥壳，轴承，关节，油缸等各种配件。
        天津沃泰机械依托毗邻鼎盛天工的优势地理位置，向全国销售天工装载机，天工平地机等天工机械的各种配件：油缸、斗齿、刀板、齿圈、桥壳、铜套、涡轮箱、液压锁、车灯、电脑版、拉线、制动总泵和分泵、拉杆和球头、轮胎，平衡箱及内部各种配件。
      </p>
      <p>天津沃泰机械真诚期待与您合作。</p>
    </el-tab-pane>
    <el-tab-pane label="企业荣誉" name="second"
      ><h2>企业荣誉</h2>
      <rongyu
    /></el-tab-pane>
    <el-tab-pane label="公司历史" name="third"><h2>公司历史</h2></el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import rongyu from "./rongyu.vue";
const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  // console.log(tab, event);
};
</script>
<style>
.demo-tabs > .el-tabs__content {
  /* padding: 10px; */
  color: #b9986d;
  font-size: 18px;
  font-weight: 600;
}
#table-first {
  font-family: SimHei;
}
</style>