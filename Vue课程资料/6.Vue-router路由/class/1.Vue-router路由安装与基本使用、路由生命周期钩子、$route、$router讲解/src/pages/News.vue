<template>
<div id="News">
	我是News页面
	<ul>
		<li v-for="item in $router.options.routes">{{item.path}}</li>
	</ul>
</div>
</template>

<script>
export default {
	name:'News',
	//激活后
	activated(){
		console.log('News页面被激活了')
		console.log(this.$router.options.routes)
	},
	//失去激活后
	deactivated(){
		console.log('News页面失活了！！')
	}
}
</script>

<style>
	
</style>
