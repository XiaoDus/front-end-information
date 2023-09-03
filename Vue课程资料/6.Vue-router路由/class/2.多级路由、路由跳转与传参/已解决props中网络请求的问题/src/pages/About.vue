<template>
<div id="About">
	我是About页面<br>

	<!-- router-link的三种跳转方式 -->
	<router-link to="/About/Address">学校地址方式一</router-link>&nbsp;&nbsp;
	<router-link :to="{path:'/About/Address'}">学校地址方式二</router-link>&nbsp;&nbsp;
	<router-link :to="{name:'Address'}">学校地址方式三</router-link>&nbsp;&nbsp;
	
	<hr>
	<!-- router-link的两种传参方式 -->
	<!-- <router-link :to="{name:'Address',query:{country:'中国',street:'数博大道'}}">query方法传参</router-link>&nbsp;&nbsp; -->
	<router-link :to="{name:'Address',params:{country:'中国',street:'数博大道'}}">params方法传参</router-link>&nbsp;&nbsp;
	<!-- params有两个注意事项 -->
	<!-- 1.params传参只能用name进行跳转 -->
	<!-- 2.params传参后刷新页面数据会消失，可以在路由配置中加占位符解决，如path:'Address/:country/:street', -->
	
	<!-- query方法接收参数： $route.query.xxx -->
	<!-- params方法接收参数： $route.params.xxx -->

	<hr>
	<router-view></router-view>
</div>
</template>

<script>
export default {
	name:'About',
}
</script>

<style>
	
</style>
