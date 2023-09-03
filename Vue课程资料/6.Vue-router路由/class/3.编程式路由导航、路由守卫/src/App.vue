<template>
  <div id="app">
	  <h1 style="color:red;">记得开录制</h1>
	<button @click="bk" type="button"><--后退</button>
	<button @click="fw" type="button">前进--></button>
	<button @click="replace" type="button">replace跳转</button><br>
	<input type="number" v-model="n" />
	<button @click="go" type="button">go指定跳转</button>
	<hr>
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
  data(){
	return {
		n:0
	}  
  },
  methods:{
	  //追加记录
	  // this.$router.push
	  //重定向
	  replace(){
	  	this.$router.replace({
	  		name:'About'
	  	})
	  },
	  //前进
	  fw(){
		this.$router.forward()
	  },
	  //后退
	  bk(){
		this.$router.back()
	  },
	  //指定记录跳转
	  go(){
		this.$router.go(this.n)
	  }
  }
}
</script>

<style scoped>
.active{
	color:red;
	background-color: yellow;
}
</style>
