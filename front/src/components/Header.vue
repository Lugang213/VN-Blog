<!--  -->
<template>
  <el-row class="tac">
    <el-col >
      <div class="head-top">
        <img class="head-img" src="../assets/logo.png" alt="">
        <h2 >BLOG</h2>
      </div>

      <el-menu
        default-active="2"
        class="el-menu-vertical-demo bgcolor"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item v-for="(item,index) in list" :key="index">
          <router-link
            :class="{'menu-item-select' :itemCheck==index}"
            :to="item.path"
            @click.native="tabClass(index)" tag="li">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
          </router-link>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      list:[
        {
          id:1,
          title:'home',
          path:'/index',
          icon:'el-icon-s-home'
        },{
          id:2,
          title:'about',
          path:'/about',
          icon:'el-icon-user-solid'
        },{
          id:3,
          title:'note',
          path:'/note',
          icon:'el-icon-edit-outline'
        },
      ],
      itemChick:0
    };
  },

  components: {},

  // computed: {},

  mounted: {
    tabClass(index){
      this.itemCheck = index;
    }
  },
  created () {
    this.list.forEach((element,index) => {
      for (let i in element) {
        if (element[i].indexOf(this.$route.name) >= 0) {
          this.itemCheck = index;
        }

      }
    });
  }

  // methods: {}
}

</script>
<style scoped>
.menu-item-select{
  color: aqua;
}
  .tac .head-top{
    line-height: 0px;
    background-color: #D3DCE6;
  }
  .head-img{
      width: 100px;
      border-radius: 50%;
      border:2px solid #999;
  }
  .head-top h2{
    background-color: #D3DCE6ff;
    line-height: 20px;
  }
  .bgcolor{
    background-color: #D3DCE6ff;
  }
</style>
