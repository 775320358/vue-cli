import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const Profile = () => import('../components/Profile.vue')

//1.通过Vue.use（插件）安装插件
Vue.use(VueRouter)

//2.创建VueRouter对象
const routes = [{
    path: '',
    // redirect重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]

const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

//前置守卫（guard）
router.beforeEach((to, from, next) => {
  //从from跳转到to
  document.title = to.matched[0].meta.title
  next()
})

//后置钩子（hook）
router.afterEach((to, from) => {})

// 3.将router对象传入到Vue实例
export default router
