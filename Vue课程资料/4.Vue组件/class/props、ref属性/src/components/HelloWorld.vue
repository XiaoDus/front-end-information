<template>
  <div class="hello">
	我是Hello World
  </div>
</template>

<script>
	export default {
  name: 'HelloWorld',
  mounted(){
	  console.log(this)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
