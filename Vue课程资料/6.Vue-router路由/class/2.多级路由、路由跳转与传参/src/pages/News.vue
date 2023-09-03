<template>
<div id="News">
	我是News页面<br>
	<router-link to="/News/HotNews">热门新闻</router-link>
	<router-link to="/News/ColdNews">冷门新闻</router-link>
	<hr>
	<keep-alive>
		<router-view></router-view>
	</keep-alive>
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
	}
}
</script>

<style>
	
</style>
