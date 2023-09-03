<template>
<div id="Student">
	<!-- 插槽标签 slot -->
	<!-- 交给父组件去定义该地方的视图,并且可以给默认值 -->
	<!-- 定义插槽的内容 -->
	<!-- <template slot="stuname">学生姓名：张三</template> -->
	<!-- <template slot="stuage">学生年龄：25</template> -->
	
	<!-- 作用域插槽的通俗理解： -->
	<!-- 子组件将自身的数据拿给父组件，由父组件拿到数据后进行定义插槽的内容/格式 -->
	<slot 
	name="stuname" 
	:stuFirstname="studentInfo.firstname" 
	:stuLastname="studentInfo.lastname">
	我是默认学生姓名
	</slot>
	<slot 
	name="stuage" 
	:stuage="studentInfo.age">
	我是默认学生年龄
	</slot>
</div>
</template>

<script>
export default {
	name:'Student',
	data(){
		return {
			studentInfo:{
				firstname:'小',
				lastname:'张',
				age:30
			}
		}
	}
}
</script>

<style>
#Student{
	width: 100%;
	height:130px auto;
	background-color: yellow;
}
</style>
