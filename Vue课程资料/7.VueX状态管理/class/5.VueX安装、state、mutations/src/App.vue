<template>
  <div id="app">
	<button @click="selectRoutes" type="button">查看所有路由</button>
	<hr>
	<!-- 自动生成一个能够跳转到路由的a标签 -->
	<div class="navItem" v-for="route in realRoutesList" :key="route.path">
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
  computed:{
	  //获取Vuex的路由，并且过滤/和*两个基本路由
	  realRoutesList(){
		  let tmp_list = []
		  this.$store.state.options.showRoutesList.forEach(route => {
			  if(route.path != '/' && route.path != '*'){
				  tmp_list.push(route)
			  }
		  })
		  return tmp_list
	  }
  },
  methods:{
	  selectRoutes(){
		  console.log(this.$router.getRoutes())
	  }
  },
  mounted(){
	  //页面加载完毕后，把基本路由赋值给Vuex
	  let temp_routesList = []
	  this.$router.getRoutes().forEach(route => {
		  let tmp = {}
		  if(route.path == ""){
			  tmp = {
				  path:'/',
				  redirect:route.redirect
			  }
		  }else{
			  tmp = {
				  name:route.name,
				  path:route.path,
				  meta:route.meta,
				  component:route.components.default,
			  }
		  }
		  temp_routesList.push(tmp)
	  })
	  this.$store.commit('ADDROUTES',temp_routesList)
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
