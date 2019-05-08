<!--  -->
<template>
  <div>note</div>
</template>

<script>
export default {
  name: 'Note',
  data () {
    return {
    };
  },

  components: {},

  // computed: {},

  mounted() {
    this.$axios.get('http://localhost:3000/users/user')
      .then((res)=>{
        console.log(res.data);
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
