<template>
  <div class="card" v-for="data in datas">
    <span>姓名：</span><span>{{ data.myname }}</span> <span>电话：</span
    ><span>{{ data.tel }}</span> <span>网址：</span><span>{{ data.web }}</span>
    <span>主营：</span><span>{{ data.product }}</span>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    let datas = ref([
      {
        myname: "李白",
        tel: "138221225",
        web: "www.baidu.com",
        product: "轴承",
      },
    ]);

    return {
      datas,
    };
  },
};
</script>
<style>
.card {
  width: 200px;
  height: 100px;
  background: yellow;
}
</style>