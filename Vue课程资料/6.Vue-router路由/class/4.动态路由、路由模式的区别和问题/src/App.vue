<template>
  <div id="app">
	<button @click="addRoutes" type="button">添加路由</button>
	<button @click="selectRoutes" type="button">查看所有路由</button><br>
	<hr>
	<!-- 自动生成一个能够跳转到路由的a标签 -->
	<span v-for="i in showRoutesList" :key="i.path">
		<router-link class="navBar" active-class="active" :to="{path:i.path}">
			{{i.meta.navName?i.meta.navName:'未定义'}}
		</router-link>
	</span>
	<div style="clear:both;"></div>
	<!-- 就是路由页面展示的位置 -->
	<keep-alive>
		<router-view></router-view>
	</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
	  return {
		myRoutes:[
			{
				name:'News',
				path:'/News', 
				component:()=>import('@/pages/News')
			},
			{
				name:'About',
				path:'/About',
				component:()=>import('@/pages/About')
			}
		],
		routesList:null
	  }
  },
  computed:{
	  showRoutesList(){
		  let temp_routes = []
		  if(this.routesList != null){
			  this.routesList.forEach(i => {
				  if(i.path != '' && i.path != '*'){
					  temp_routes.push(i)
				  }
			  })
		  }
		  return temp_routes
	  }
  },
  methods:{
	  //添加路由的按钮点击事件
	  addRoutes(){
		  this.addMyCustomRoutes(this.myRoutes)
	  },
	  //封装添加多条路由的方法
	  addMyCustomRoutes(routesArr){
		  routesArr.forEach(route => {
			  this.$router.addRoute(route)
		  })
	  },
	  //查看所有路由按钮点击事件
	  selectRoutes(){
		  console.log(this.routesList)
		  // console.log(this.$router.getRoutes())
	  }
  },
  mounted(){
	  this.routesList = this.$router.getRoutes()
	  
	  this.$bus.$on('setRoutesList',() => {
		  this.routesList = this.$router.getRoutes()
	  })
  }
}
</script>

<style scoped>
.active{
	color:red;
	background-color: yellow;
}
.navBar{
	display: block;
	background-color: red;
	color:white;
	width: 100px;
	height: 50px;
	margin-left:10px;
	text-align: center;
	line-height: 50px;
	float: left;
}
</style>
