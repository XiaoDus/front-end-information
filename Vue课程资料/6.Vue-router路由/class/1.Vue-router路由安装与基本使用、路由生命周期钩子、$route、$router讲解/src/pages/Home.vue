<template>
<div id="Home">
	<h3 :style="{opacity:opacity}">我是Home页面</h3>
	当前路由的路径是什么：{{$route.path}}
</div>
</template>

<script>
export default {
	name:'Home',
	data(){
		return {
			timer:null,
			opacity:1
		}
	},
	//激活后
	activated(){
		this.timer = setInterval(() => {
			this.opacity -= 0.01;
			if(this.opacity <= 0) this.opacity = 1;
		},16);
		console.log('Home页面被激活了')
		console.log(this.$route)
		console.log(this.$router)
	},
	//失去激活后
	deactivated(){
		clearInterval(this.timer)
		console.log('Home页面失活了！！')
	}
}
</script>

<style>
	
</style>
