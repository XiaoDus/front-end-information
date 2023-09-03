<template>
<div id="Home">
	我是Home页面<hr>
	<button @click="addMyRoutes" type="button">在Home组件中添加路由</button>
</div>
</template>

<script>
export default {
	name:'Home',
	data(){
		  return {
			myRoutes:[
				{
					name:'News',
					path:'/News', 
					meta:{
						navName:'新闻页面'
					},
					component:()=>import('@/pages/News')
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
			if(localStorage.getItem('role') == 'admin'){
				this.myRoutes.forEach(i => {
					this.$router.addRoute(i)
				})
				this.$bus.$emit('setRoutesList')
			}else{
				console.log('很抱歉，当前您的身份没有路由权限')
			}
		}
	}
}
</script>

<style>
	
</style>
