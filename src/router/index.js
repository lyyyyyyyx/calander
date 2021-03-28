import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
	children:[
		{
			path:'/',
			component: () => import('@/components/WeekTime/calend.vue'),
	    },
	    {
			path:'person',
			component: () => import('@/views/mine.vue'),
	    },{
			path:'calen',
			component: () => import('@/components/WeekTime/calend.vue'),
	    }
	]
  },
  {
    path: '/login',
    name: 'Login',
	component: () => import('@/views/Login.vue')
  },
  {
    path: '*',
    name: 'No_fount',
    component: () => import('@/views/No_fount.vue')
  }
]

const router = new VueRouter({
  routes
})

// 全局前置守卫(过滤)
// router.beforeEach((to, from, next) => {
//   if(to.path == '/' || to.path == '/about') {
//     next()
//    } 
  //  else{
  //   next('/404')
  // }
// })

export default router
