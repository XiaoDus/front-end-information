<template>
<div id="News">
	我是News页面<hr>
	state里的数据:{{$store.state.options.num}}<br>
	<input type="number" v-model="nowNum" />
	<button @click="changeState" type="button">修改State里面的num</button>
	<button @click="EDITNUM(nowNum)" type="button">简便方法修改State里面的num</button>
	<hr>
	<button @click="addMyRoutes" type="button">动态添加路由</button>
</div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
	name:'News',
	data(){
		return {
			nowNum:0,
			//模拟新增的路由信息
			myRoutes:[
				{
					name:'Home',
					path:'/Home', 
					meta:{
						navName:'主页'
					},
					component:()=>import('@/pages/Home')
				},
				{
					name:'About',
					path:'/About',
					meta:{
						navName:'关于我们'
					},
					component:()=>import('@/pages/About')
				}
			]
		}
	},
	methods:{
		changeState(){
			this.$store.commit('EDITNUM',this.nowNum)
		},
		addMyRoutes(){
			//添加真正的路由，否则页面打开是404
			this.myRoutes.forEach(route => {
				this.$router.addRoute(route)
			})
			//添加路由信息到VueX，实现动态给导航添加菜单
			this.$store.commit('PUSHROUTES',this.myRoutes)
		},
		...mapMutations(['EDITNUM']),
		//相当于自动生成了以下代码
		// EDITNUM(){
		// 	this.$store.commit('EDITNUM')
		// }
	}
}
</script>

<style>
	
</style>
