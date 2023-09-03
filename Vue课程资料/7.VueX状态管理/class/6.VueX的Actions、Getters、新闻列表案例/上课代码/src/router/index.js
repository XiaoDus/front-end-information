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
			redirect:'/Home'
		},
		{
			name:'Home',
			path:'/Home',
			component:Home,
		},
		{
			name:'News',
			path:'/News', 
			component:News
		},
		{
			name:'About',
			path:'/About',
			component:About
		},
		//当访问不存在的路由，展示的组件
		{
			path:'*',
			component:NotFound
		}
		
	]
})

export default router