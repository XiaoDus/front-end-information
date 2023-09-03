<template>
  <div id="app">
	此处是直接使用axios方法<br>
	<Qingqiu></Qingqiu>
	<hr>
	使用封装后的axios方法<br>
	<HelloWorld></HelloWorld>
  </div>
</template>

<script>
import Qingqiu from './components/Axios.vue'
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components:{
	  Qingqiu,
	  HelloWorld
  }
}
</script>

<style>

</style>
