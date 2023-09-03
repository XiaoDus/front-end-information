<template>
  <div id="app">
	<div id="login" v-show="showLogin">
		<Login></Login>
		<button class="btn btn-success" @click="changeVC" type="button">去注册</button>
	</div>
	<div id="reg" v-show="!showLogin">
		<Reg></Reg>
		<button class="btn btn-danger" @click="changeVC" type="button">去登录</button>
	</div>
  </div>
</template>

<script>
//自动局部注册
// const allComponents = require.context("./components", true, /\.vue$/);
// let res_components = {};
// allComponents.keys().forEach((item) => {
// let comp = allComponents(item);
// let name = comp.default.name;
// res_components[name] = comp.default;
// });
import Reg from './components/Reg.vue'
import Login from './components/Login.vue'

export default {
  name: 'App',
  // components: {...res_components}
  components:{
	  Reg,
	  Login
  },
  data(){
	  return {
		  showLogin: true
	  }
  },
  methods:{
	  changeVC(){
		  this.showLogin = !this.showLogin
	  }
  },
  mounted(){
	  // console.log(this)
  }
}
</script>

<style>

</style>
