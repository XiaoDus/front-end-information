<template>
<div id="News">
	我是News页面<hr>
	<button @click="addMyRoutes" type="button">动态添加路由</button>
</div>
</template>

<script>
export default {
	name:'News',
	data(){
		return {
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
		addMyRoutes(){
			//添加路由信息到VueX，实现动态给导航添加菜单
			this.$store.commit('PUSHROUTES',this.myRoutes)
		},
	}
}
</script>

<style>
	
</style>
