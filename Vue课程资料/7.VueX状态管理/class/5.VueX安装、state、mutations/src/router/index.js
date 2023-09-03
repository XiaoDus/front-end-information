import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import About from '../pages/About.vue'
import NotFound from '../pages/NotFound.vue'

Vue.use(VueRouter)
let router = new VueRouter({
	routes:[
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
})

export default router