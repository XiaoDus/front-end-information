<template>
  <div id="app">
	  <button @click="changeView('Testa')" type="button">变为Testa</button>
	  <button @click="changeView('Testb')" type="button">变为Testb</button>
	  <button @click="changeView('Testc')" type="button">变为Testc</button>
	<component :is="currentView"></component>
	
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Testa from './components/Testa.vue'
import Testb from './components/Testb.vue'
import Testc from './components/Testc.vue'


export default {
  name: 'App',
  data(){
	  return {
		  currentView: 'Testa'
	  }
  },
  methods:{
	  changeView(vc) {
		  this.currentView = vc
	  }
  },
  components:{
	  // HelloWorld
	  Testa,
	  Testb,
	  Testc
  }
}
</script>

<style>

</style>
