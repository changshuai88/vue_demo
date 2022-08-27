<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="公司简介" name="first">
      <h2>公司简介</h2>
      <p>
        龙岩市新罗区龙亿工程机械销售中心是专业经营龙工压路机主机配件的公司，致力于为龙工压路机客户提供更专业、更及时、更准确的配件支持和技术服务。同时提供徐工、三明、洛阳等压路机配件，龙工、厦工、柳工等装载机配件及龙工各型号挖掘机配件。公司代理中国龙工桥箱产品、济南液压泵、龙岩液压件厂、浙江临海机械厂、浙江海宏集团、陕西航天动力有限公司、新盛销轴、天津鼎盛有限公司、扬州三叶水箱、杭州宗兴齿轮系列、许昌远东传动轴、三明齿轮厂、河南风神轮胎、江西安福液压件厂、洛阳万军软轴、浙江银轮冷却器等数十家知名工程机械配套厂家产品。提供适用于各类工程机械的便携式液压油过滤机，直流电动柴油加油机。公司拥有多名对液压、电控等系统故障诊断有着丰富经验的工程师，可为客户提供装载机、压路机、挖掘机等工程机械电控、液压系统故障诊断、维修与技术培训。龙亿企业本着你支持我，我帮助你的经营理念，竭诚为广大客户提供服务。
      </p>
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
  padding: 10px;
  color: #b9986d;
  font-size: 18px;
  font-weight: 600;
}
</style>