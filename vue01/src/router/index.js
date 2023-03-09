import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ome',
    component: HomeView,
		redirect:'/home',
	children:[
		{
		  path: 'home',
		  name: 'home',
		  component: () => import('../views/Home.vue')
		},
		{
		  path: 'shop',
		  name: 'shop',
		  component: () => import('../views/Shop.vue'),
		  
		},
		{
			  path: 'health',
			  name: 'health',
			  component: () => import('../views/Health.vue')
		},
		{
			  path: 'zixun',
			  name: 'zixun',
			  component: () => import('../views/ZiXun.vue')
		},
		{
			  path: 'user',
			  name: 'user',
			  component: () => import('../views/User.vue')
		}
		
	]
	
  },
  {
  				path:'/yaoping',
  				name:'yaoping',
  				component:()=>import('../views/YaoPing/YaoPing.vue')
  },
  {
	  path:'/register',
	  name:'register',
	  component:()=>import('../views/User/register.vue')
  },
  {
  	  path:'/login',
  	  name:'login',
  	  component:()=>import('../views/User/login.vue')
  },
	{
		  path:'/phone',
		  name:'phone',
		  component:()=>import('../views/Phone/index.vue')
	},
	{
		  path:'/chuanwen',
		  name:'chuanwen',
		  component:()=>import('../views/ChuanWen/index.vue')
	},
	{
		  path:'/kepu',
		  name:'kepu',
		  component:()=>import('../views/KePu/index.vue')
	},
	{
		  path:'/yangshen',
		  name:'yangshen',
		  component:()=>import('../views/YangShen/index.vue')
	},
	{
		  path:'/yufang',
		  name:'yufang',
		  component:()=>import('../views/YuFang/index.vue')
	},
	{
		  path:'/ceping',
		  name:'ceping',
		  component:()=>import('../views/CePing/index.vue')
	},	{
		  path:'/zicha',
		  name:'zicha',
		  component:()=>import('../views/ZiCha/index.vue')
	},
	{
		  path:'/lianxi',
		  name:'lianxi',
		  component:()=>import('../views/LianXi/index.vue')
	}
		// {
		//   path: '/shop',
		//   name: 'shop',
		//   component: () => import('../views/Shop.vue')
		// },
		// {
		// 	  path: '/health',
		// 	  name: 'health',
		// 	  component: () => import('../views/Health.vue')
		// },
		// {
		// 	  path: '/zixun',
		// 	  name: 'zixun',
		// 	  component: () => import('../views/ZiXun.vue')
		// },
		// {
		// 	  path: '/user',
		// 	  name: 'user',
		// 	  component: () => import('../views/User.vue')
		// }
  
  
 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
