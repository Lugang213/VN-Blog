<!--  -->
<template>
  <div class="block">
    <div class="radio">
      排序：
      <el-radio-group v-model="reverse">
        <el-radio :label="true">倒序</el-radio>
        <el-radio :label="false">正序</el-radio>
      </el-radio-group>
    </div>

    <el-timeline :reverse="reverse">
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp">
        {{activity.content}}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      reverse: true,
        activities: [{
          content: '后端：back,express 搭建，MySQL存储数据。',
          timestamp: '2018-04-15'
        }, {
          content: '前端站：front vue——cli 搭建，首页、笔记内容页、关于本站。',
          timestamp: '2018-04-13'
        }, {
          content: 'Vue+Node.js+MySQL 搭建个人博客，前后端分离。',
          timestamp: '2018-04-11'
        }]
    };
  },

  // components: {},

  // computed: {},

  // mounted: {},

  // methods: {}
}

</script>
<style lang='scss' scoped>
</style>
