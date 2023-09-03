<template>
  <div id="app">
	<!-- 自动生成一个能够跳转到路由的a标签 -->
	<router-link active-class="active" to="/Home">主页</router-link>&nbsp;&nbsp;
	<router-link active-class="active" to="/News">新闻页</router-link>&nbsp;&nbsp;
	<router-link active-class="active" to="/About">关于我们页面</router-link>&nbsp;&nbsp;
	<!-- 就是路由页面展示的位置 -->
	<keep-alive>
		<router-view></router-view>
	</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
.active{
	color:red;
	background-color: yellow;
}
</style>
