<!--  -->
<template>
  <div>
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
    <div>
      <h3>设计原则</h3>
 <p>Consistency</p>
 <p>
   与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
反馈 Feedback
控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
效率 Efficiency
简化流程：设计简洁直观的操作流程；
清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
可控 Controllability
用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
 </p>

    </div>
  </div>
  <!-- banner -->




</template>

<script>
export default {
  data () {
    return {
      bannerImg:[
        {
          src:require('../assets/images/b1.jpg')
        },
        {
          src:require('../assets/images/b2.jpg')
        },
        {
          src:require('../assets/images/b3.jpg')
        },
        {
          src:require('../assets/images/b4.jpg')
        },
        {
          src:require('../assets/images/b5.jpg')
        },
        {
          src:require('../assets/images/b6.jpg')
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
