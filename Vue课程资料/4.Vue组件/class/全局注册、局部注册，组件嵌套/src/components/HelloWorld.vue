<template>
  <div class="hello">
    <hr>
	我是Hello World
	<Student></Student>
    <hr>
  </div>
</template>

<script>
import Student from './Student.vue'
	
export default {
  name: 'HelloWorld',
  components:{
	  Student
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
