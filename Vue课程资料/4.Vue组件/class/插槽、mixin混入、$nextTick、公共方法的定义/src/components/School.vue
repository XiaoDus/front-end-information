<template>
<div id="School">
	<Student>
		<!-- 定义插槽的格式 -->
		<template 
		slot="stuname" 
		slot-scope="{stuFirstname,stuLastname}">
			<a href="">{{stuFirstname}} - {{stuLastname}}</a>
			<br>
		</template>
		
		<template slot="stuage" slot-scope="{stuage}">
			<em>{{stuage}}</em>
		</template>
		
	</Student>
</div>
</template>

<script>
import Student from './Student.vue'
export default {
	name:'School',
	components:{
		Student
	}
}
</script>

<style scoped>
#School{
	width: 100%;
	height:300px;
	background-color: gray;
}
</style>
