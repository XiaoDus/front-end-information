<template>
  <div id="app">
	<!-- <School></School> -->
	<nextTick></nextTick>
	<mixin></mixin>
  </div>
</template>

<script>
// import School from './components/School.vue'
import nextTick from './components/nextTick.vue'
import mixin from './components/mixin.vue'

export default {
  name: 'App',
  components:{
	  nextTick,
	  mixin
  }
}
</script>

<style>

</style>
