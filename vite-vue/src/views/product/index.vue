<template>
  <div class="title">
    <ul>
      <li><a href="/product/py">天工配件</a></li>
      <li><a href="">其他配件</a></li>
    </ul>
  </div>

  <router-view></router-view>
</template>

<script lang="ts" setup>
</script>

<style >
.title {
  width: 100%;
  height: 20px;
}
.title ul {
  list-style: none;
}
.title ul li {
  display: inline;
  padding: 0 15px;
}
.title a {
  text-decoration: none;
  font-weight: bolder;
  color: #da9558;
}
</style>