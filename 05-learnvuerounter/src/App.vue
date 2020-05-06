<template>
  <div id="app">
    <!-- <router-link to='/home' tag="li" replace active-class="active">首页</router-link>
    <router-link to='/about' tag="li" replace active-class="active">关于</router-link>-->
    <!-- <router-link to='/home' tag="li" replace >首页</router-link>
    <router-link to='/about' tag="li" replace >关于</router-link>-->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    <router-link to='/home'>首页</router-link>
    <router-link to='/about'>关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <router-view></router-view>
  </div>
</template>
//tag:渲染成指定标签  replace：用history.replace跳转  active-class：修改active时的class此属性可在路由设置中设置linkActiveClass来修改全部
<script>
export default {
  name: 'App',
  data(){
    return{
       userId : 'lisi'
    }
  },
  methods: {
    homeClick() {
      //通过代码方式修改路由vue-router
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace('/about')
    }
  }
}
</script>

<style>
/* .router-link-active{
    color:red
  } */
.active {
  color: red;
}
</style>
