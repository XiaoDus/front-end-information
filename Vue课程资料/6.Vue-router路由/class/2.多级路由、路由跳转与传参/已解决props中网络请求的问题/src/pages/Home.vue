<template>
<div id="Home">
	我是Home页面
</div>
</template>

<script>
export default {
	name:'Home',
	//激活后
	activated(){
		console.log('Home页面被激活了')
	},
	//失去激活后
	deactivated(){
		console.log('Home页面失活了！！')
	}
}
</script>

<style>
	
</style>
