<template>
  <div id="app">
    <div class="learning_2">
	  <SchoolTwo></SchoolTwo>
	  <hr>
	  <StudentTwo></StudentTwo>
    </div>
	<div class="learning">
		<School></School>
		<hr>
		<Student></Student>
	</div>
	<HelloWorld></HelloWorld>
	<hr>
	<Test></Test>
	<hr>
	<Demo></Demo>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Demo from './components/Demo.vue'
import Test from './components/Test.vue'
import Student from './components/Student.vue'
import StudentTwo from './components/StudentTwo.vue'
import School from './components/School.vue'
import SchoolTwo from './components/SchoolTwo.vue'
export default {
  name: 'App',
  components:{
	  HelloWorld,
	  Demo,
	  Test,
	  Student,
	  School,
	  StudentTwo,
	  SchoolTwo
  }
}
</script>

<style scoped>
.learning {
	width: 100%;
	height: 500px;
	background-color: yellow;
	color: red;
}
.learning_2 {
	width: 100%;
	height: 500px;
	background-color: gray;
	color: red;
}
</style>
