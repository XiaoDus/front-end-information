//引入Vue,因为要使用Vue.use()方法
import Vue from 'vue'
//引入路由的模块
import VueRouter from 'vue-router'
//引入ajax方法
import {getArticleList} from '../api/index.js'

import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import HotNews from '../pages/News/HotNews.vue'
import ColdNews from '../pages/News/ColdNews.vue'
import NewsDetail from '../pages/News/NewsDetail.vue'
import About from '../pages/About.vue'
import Address from '../pages/About/Address.vue'
import NotFound from '../pages/NotFound.vue'

//使用路由插件
Vue.use(VueRouter)

//定义路由的配置
let router = new VueRouter({
	routes:[
		//当访问/根页面的时候（默认页面）
		{
			path:'/',
			redirect:'/Home' //重定向，path路径
		},
		{
			name:'Home', //路由的名字
			path:'/Home', //路由的路径
			component:Home, //路由组件页面
		},
		{
			name:'News',
			path:'/News', 
			component:News,
			children:[
				{
					name:'HotNews',
					path:'HotNews',
					component:HotNews,
				},
				{
					name:'ColdNews',
					path:'ColdNews',
					component:ColdNews,
					props(){
						let obj = getArticleList().then(res => {
							return res
						})
						return {
							articleList:obj
						}
					}
				},
				{
					name:'NewsDetail',
					path:'NewsDetail/:id',
					component:NewsDetail
				}
			]
		},
		{
			name:'About',
			path:'/About',
			component:About,
			children:[
				{
					name:'Address',
					// path:'Address/:country/:street',
					path:'Address',
					component:Address,
					//第一种 props传参方式 对象形式,只能写死数据，将对象的值，作为props传递过去
					// props:{
					// 	country:'中国',
					// 	street:'观山湖'
					// }
					
					//第二种 props传参方式 布尔值形式，当值为true时，会把params的数据，作为props传递过去
					// props:true
					
					//第三种 props传参方式 函数形式
					props($route){
						let str = '数博大道'
						return {
							country:$route.params.country + '贵州贵阳',
							street:'观山湖' + str,
							myFullPath:$route.fullPath
						}
					}
				}
			]
			
		},
		//当访问不存在的路由，展示的组件
		{
			path:'*',
			component:NotFound
		}
		
	]
})

export default router