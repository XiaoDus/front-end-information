<template>
  <div id="app">
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
