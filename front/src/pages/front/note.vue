<!--  -->
<template>
<div>
  <div>note</div>
  <ul>
    <li v-for="item in noteList" :key="item">
      {{item}}
    </li>
  </ul>
</div>

</template>

<script>
export default {
  name: 'Note',
  data () {
    return {
      noteList:[]
    };
  },

  components: {},

  // computed: {},

  mounted() {
    this.$axios.get('http://localhost:3000/note/getNoteList')
      .then((res)=>{
        this.noteList = res.data;
      })
      .catch((error)=>{
        console.log('接口调用失败');
      })
  },

  // methods: {}
}

</script>
<style lang='scss' scoped>
</style>
