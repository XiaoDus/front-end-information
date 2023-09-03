import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../pages/Index/Index.vue'
import NotFound from '../pages/NotFound.vue'


Vue.use(VueRouter)
let router = new VueRouter({
	routes:[
		//当访问/根页面的时候（默认页面）
		{
			path:'/',
			redirect:'/Index'
		},
		{
			path:'/Index',
			name:'Index',
			component:Index
		},
		//当访问不存在的路由，展示的组件
		{
			path:'*',
			component:NotFound
		}
		
	]
})

export default router