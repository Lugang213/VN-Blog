<!-- 导航组件 -->
<template>
  <div>
    <a href="#" v-for="(item,index) in items" :key="index" :class="[commonClass,item.active ? activeClass : '']">
      <span>{{item.text}}</span>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      commonClass:'nav-item',
      activeClass:'active',
      items:[
        {
          text:'首页',
          active:true
        },
        {
          text:'列表',
          active:false
        },
        {
          text:'关于',
          active:false
        },
        {
          text:'我的',
          active:false
        }
      ]
    };
  },
  methods: {
    navClickEvent:function (items,index) {
      items.forEach(el => {
        el.active = false;
      });
      items[index].active = true;
      this.$emit('navClickEvent',items,index);
    }
  }
}

</script>
<style scoped>
.active{
  color: yellow
}
</style>
