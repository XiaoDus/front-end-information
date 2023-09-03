<template>
<div id="News">
	我是News页面
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
