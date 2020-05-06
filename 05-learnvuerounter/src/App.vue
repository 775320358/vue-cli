<template>
  <div id="app">
    <!-- <router-link to='/home' tag="li" replace active-class="active">首页</router-link>
    <router-link to='/about' tag="li" replace active-class="active">关于</router-link>-->
    <!-- <router-link to='/home' tag="li" replace >首页</router-link>
    <router-link to='/about' tag="li" replace >关于</router-link>-->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <router-link :to="'/user/'+userId">用户</router-link>
    <router-link to="/profile">档案</router-link>
    <router-link :to="{path:'/profile',query:{name:'why',age:18,height:'180'}}">档案</router-link>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
//tag:渲染成指定标签  replace：用history.replace跳转  active-class：修改active时的class此属性可在路由设置中设置linkActiveClass来修改全部
<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
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
    },
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 19,
          height: '2.00'
        }
      })
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
