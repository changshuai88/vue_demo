<template>
  <div class="container">
    <div v-for="(i, index) in list" :id="i.id">
      <div v-if="content[index]">{{ content[index].name }}</div>
      <div v-else>{{ i.title }}</div>
    </div>
  </div>
</template>
<script>
import divs from "./data/index";
export default {
  data() {
    let list = divs["divs"];
    let content = [
      {
        name: "libai",
      },
      {
        name: "dufu",
      },
    ];
    content[5] = {
      name: "wanganshi",
    };

    return {
      list,
      content,
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 10000px;
  height: 10000px;
  // background: yellow;
  div {
    width: 100px;
  }
  div:nth-child(odd) {
    background-color: aqua;
  }
}
</style>