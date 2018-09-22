import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
// 动态路由
const Index=()=>import('../components/Index')
const Detail=()=>import('../components/Detail')
const Img=()=>import('../components/Img')
const Quotation=()=>import('../components/Quotation')
const Color=()=>import('../components/Color')
const Type=()=>import('../components/Type')
const Cartype=()=>import('../components/Cartype')
const Login=()=>import('../components/Login')
const Swiper=()=>import('../components/swiper.vue')


// 需要安装插件 cnpm i -D babel-plugin-syntax-dynamic-import
Vue.use(Router)

let router=new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path:'/swiper',
      component:Swiper,
      name:'Swiper'
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/img',
      name: 'Img',
      component: Img,
      
    },
    {
      path: '/quotation',
      name: 'quotation',
      component: Quotation,
      
    },
    {
      path: '/color',
      name: 'color',
      component:Color,
      
    },
    {
      path: '/type',
      name: 'type',
      component: Type,
      
    },
    {
      path: '/Cartype',
      name: 'Cartype',
      component: Cartype,
      
    }
  ]
});
router.beforeEach((to,from,next)=>{
  let Login=window.localStorage.getItem('Login')
  if(to.meta.requireAuth&&to.name!='Login'){
    // console.log()
    if(window.localStorage.getItem('status')=='success'){
      console.log(localStorage.getItem('status'))
      next()
    }else{
      next({
        name:'Login',
        query:{
          from:to.name
        }
      })
    }
    // next('/Login')
  }
  next()
})
export default router
