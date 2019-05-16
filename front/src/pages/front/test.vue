<!--  -->
<template>
  <div>test
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in bannerImg" :key="item">
        <!-- <h3 class="medium">{{ item.s }}</h3> -->
        <img :src="item.src" alt="">
      </el-carousel-item>
    </el-carousel>
    <div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
<hr>
    <router-view></router-view>
  </div>
  <!-- banner -->




</template>

<script>
export default {
  data () {
    return {
      bannerImg:[
        {
          src:require('../../assets/images/b1.jpg')
        },
        {
          src:require('../../assets/images/b2.jpg')
        },
        {
          src:require('../../assets/images/b3.jpg')
        },
        {
          src:require('../../assets/images/b4.jpg')
        },
        {
          src:require('../../assets/images/b5.jpg')
        },
        {
          src:require('../../assets/images/b6.jpg')
        },
      ]
    };
  },

  // components: {},

  // computed: {},

  // mounted: {},

  // methods: {}
}

</script>
<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
