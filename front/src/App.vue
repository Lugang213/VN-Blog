<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->



    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <router-view name="header"/>
        </el-aside>
        <el-main>
          <router-view name="main" class="main-content"/>
        </el-main>
      </el-container>
      <el-header>Footer</el-header>
    </el-container>
  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
</style>
