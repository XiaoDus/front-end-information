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
			meta:{
				isAuth:false,
				title:'首页'
			}
		},
		{
			name:'News',
			path:'/News/:isShow/:title/:author', 
			component:News,
			meta:{
				isAuth:false,
				title:'新闻页'
			}
		},
		{
			name:'About',
			path:'/About',
			component:About,
			meta:{
				title:'关于我们',
				isAuth:true
			},
			//二、独享路由守卫 只对当前配置的路由生效
			//进入该路由前
			beforeEnter(to,from,next){
				let userInfo = localStorage.getItem('userInfo')
				if(userInfo == 123){
					next()
				}else{
					router.replace('/Home')
				}
			}
		},
		//当访问不存在的路由，展示的组件
		{
			path:'*',
			component:NotFound
		}
		
	]
})

//一、全局路由守卫 对所有的路由组件都生效
//1.当进入任何一个路由前 beforeEach
// router.beforeEach((to,from,next) => {
// 	// console.log(from)
// 	// console.log(to)
// 	if(to.meta.isAuth == true){
// 		let userInfo = localStorage.getItem('userInfo')
// 		if(userInfo == 123){
// 			next()
// 		}else{
// 			router.replace('/Home')
// 		}
// 	}else{
// 		next()
// 	}
// })

//2.进入任何一个路由后 afterEach
// router.afterEach((to,from) => {
// 	// console.log(from)
// 	// console.log(to)
// 	let title = to.meta.title
// 	document.title = title?title : '默认标题'
// })

	//三、这里的代码是写在组件内部的，组件内部路由守卫 
	// 1.进入路由前
	// beforeRouteEnter(to,from,next){
	// 	console.log('我即将进到News页面来')
	// 	next()
	// },
	// // 2.离开路由前
	// beforeRouteLeave(to,from,next){
	// 	console.log('我马上要离开News页面了')
	// 	next()
	// }

export default router