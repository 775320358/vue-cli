<template>
  <div >
    <h2>我是首页</h2>
    <div>我是首页内容，哈哈</div>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name:'Home'
}
</script>

<style scoped>

</style>