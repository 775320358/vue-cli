<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息，嘿嘿嘿</p>
    <P>{{userId}}</P>
    <p>{{$route.params.userId}}</p>
  </div>
</template>

<script>
export default {
  name:'User',
  computed:{
    userId(){
      return this.$route.params.userId
    }
  }
}
</script>

<style scoped>

</style>