<template>
  <div>
    <h2>我是首页</h2>
    <div>我是首页内容，哈哈</div>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
    <h2>{{message}}</h2>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      message: '你好啊',
      path:'/home/news'
    }
  },
  created() {
    console.log('created')
  },
  destroyed() {
    console.log('destroyed')
  },
  //这两个函数，只有该组件被保持了状态使用了keep-alive时，才有效
  activated() {
    console.log('activated');
    this.$router.push(this.path)
  },
  deactivated() {
    console.log('deactivated');
  },
  beforeRouteLeave(to,from,next) {
    console.log(this.$route.path);
    this.path = this.$route.path
    next()
  }
}
</script>

<style scoped>
</style>