import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import About from '../pages/About.vue'
import NotFound from '../pages/NotFound.vue'

Vue.use(VueRouter)
let router = new VueRouter({
	mode:'history',
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
			meta:{
				navName:'主页'
			}
		},
		//当访问不存在的路由，展示的组件
		{
			path:'*',
			component:NotFound
		}
	]
})

// let myRoutes = [
// 	{
// 		name:'News',
// 		path:'/News', 
// 		component:News
// 	},
// 	{
// 		name:'About',
// 		path:'/About',
// 		component:About
// 	}
// ]


// function addMyCustomRoutes(routesArr){
// 	routesArr.forEach(route => {
// 		router.addRoute(route)
// 	})
// }


// if(localStorage.getItem('userInfo') == 123){
// 	addMyCustomRoutes(myRoutes)
// }

export default router