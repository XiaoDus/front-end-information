import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'

import News from '../pages/News.vue'
import NotFound from '../pages/NotFound.vue'

Vue.use(VueRouter)

let baseRoutes = [
		//当访问/根页面的时候（默认页面）
		{
			path:'/',
			redirect:'/News',
			meta:{
				navName:'默认跳转'
			}
		},
		{
			name:'News',
			path:'/News',
			component:News,
			meta:{
				navName:'新闻页面'
			}
		},
		//当访问不存在的路由，展示的组件
		{
			path:'*',
			component:NotFound,
			meta:{
				navName:'404'
			}
		}
	]

let router = new VueRouter({
	routes:baseRoutes
})

//初始化路由导航
store.commit('ADDROUTES',baseRoutes)

export default router