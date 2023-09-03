<template>
<div id="Header">
	<ul>
		<li><router-link to="/News">新闻</router-link></li>
		<li>hao123</li>
		<li>地图</li>
		<li>贴吧</li>
		<li>视频</li>
		<li>图片</li>
		<li>网盘</li>
	</ul>
</div>
</template>

<script>
export default {
	name:'Header',
}
</script>

<style scoped>
ul{
	padding:0;
	margin-top: 15px;
	height: 50px;
	width: 50%;
}
ul li{
	display: block;
	float: left;
	margin-left: 20px;
}
</style>
