<template>
<div id="News">
	我是News页面
	<hr>
	<div v-if="$route.query.isShow">
		<h3>query方式接收参数</h3>
		{{$route.query.title}}
		{{$route.query.author}}
	</div>

	<div v-if="$route.params.isShow">
		<h3>params方式接收参数</h3>
		{{$route.params.title}}
		{{$route.params.author}}
	</div>
	
</div>
</template>

<script>
export default {
	name:'News',
	//激活后
	activated(){
		console.log('News页面被激活了')
	},
	//失去激活后
	deactivated(){
		console.log('News页面失活了！！')
	},
	//三、组件内部路由守卫 
	// 1.进入路由前
	beforeRouteEnter(to,from,next){
		console.log('我即将进到News页面来')
		next()
	},
	// 2.离开路由前
	beforeRouteLeave(to,from,next){
		console.log('我马上要离开News页面了')
		next()
	}
}
</script>

<style>
	
</style>
