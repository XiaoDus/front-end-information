<template>
  <div id="app">
	<button @click="selectRoutes" type="button">查看所有路由</button>
	<hr>
	<!-- 自动生成一个能够跳转到路由的a标签 -->
	<div class="navItem" v-for="route in $store.state.options.showRoutesList" :key="route.path">
		<router-link active-class="active" :to="{path:route.path}">{{route.meta.navName}}</router-link>
	</div>
	<div style="clear:both;"></div>
	<hr>
	
	<div style="background-color: #f0f0f0;">
		<!-- 就是路由页面展示的位置 -->
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
	
	
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
	  selectRoutes(){
		  console.log(this.$router.getRoutes())
	  }
  }
}
</script>

<style scoped>
.active{
	color:red;
	background-color: yellow;
}
.navItem{
	float: left;
	margin-left: 15px;
	width: 100px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	background-color: blue;
}
.navItem a{
	color:white;
}
</style>
