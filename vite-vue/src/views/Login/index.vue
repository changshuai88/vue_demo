<template>
  <div class="container">
    <div class="login">
      <div class="box">
        <p class="table">Login</p>
        <br />
        <input type="text" placeholder="账号" />
        <input type="password" placeholder="密码" />
        <br />
        <a href="#" class="go">GO</a>
        <a href="#" class="go regit">注册</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(../../assets/3.jpeg);
  background-size: cover;
  .login {
    width: 550px;
    height: 400px;
    display: flex;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.4)
    );
    // 使背景模糊化
    backdrop-filter: blur(10px);
    box-shadow: 0 0 20px #a29bfe;
    border-radius: 15px;
  }
  .table {
    font: 900 40px "";
    text-align: center;
    letter-spacing: 5px;
    color: #3d3d3d;
  }
  .box {
    overflow: hidden;
  }
  .box input {
    width: 100%;
    margin-bottom: 20px;
    outline: none;
    border: 0;
    padding: 10px;
    background: transparent;
    border-bottom: 3px solid rgb(150, 150, 240);
    font: 900 16px "";
  }
  .go {
    text-align: center;
    display: block;
    height: 24px;
    padding: 12px;
    font: 900 20px "";
    border-radius: 10px;
    margin-top: 20px;
    color: white;
    letter-spacing: 3px;
    background-image: linear-gradient(to left, #fd79a8, #a29bf6);
  }
  .regit {
    color: gray;
    background-image: linear-gradient(to left, #f2f1f4, #dbd0d4);
  }
}
</style>