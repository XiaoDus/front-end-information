<template>
<div id="Student">
	学生名字:{{student.name}}<br>
	<span class="agecss">学生年龄:{{student.age}}</span><br>
</div>
</template>

<script>
export default {
	name:'Student',
	data(){
		return {
			student:{
				name:'王五',
				age:27
			}
		}
	}
}
</script>

<style>
.agecss{
	color:red;
}
</style>
