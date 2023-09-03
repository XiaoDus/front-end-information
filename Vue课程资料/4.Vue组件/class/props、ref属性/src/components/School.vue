<template>
<div id="School">
	<!-- ref组件的作用：能够获取组件的实例对象 VC -->
	<Student ref="sturef" :schname="schname" :schaddress="schaddress"></Student>
	<hr>
	该校学生姓名：{{stu.name}}<br>
	该校学生学号：{{stu.cardid}}<br>
	<button @click="alertStuname" type="button">输出学生姓名</button>
	<button @click="editStuname" type="button">修改学生姓名</button>
	<hr>
	<div ref="normalDiv">我是一个普通的元素</div>
	<button @click="editDiv" type="button">修改Div内容</button>
</div>
</template>

<script>
import Student from './Student.vue'
export default {
	name:'School',
	data(){
		return {
			schname:'北大青鸟方式2',
			schaddress:'观山湖区方式2',
			stu:''
		}
	},
	components:{
		Student
	},
	mounted(){
		console.log(this)
		this.stu = this.$refs.sturef.stu
	},
	methods:{
		alertStuname(){
			alert(this.stu.name)
			
		},
		editStuname(){
			this.stu.name = '李四'
		},
		editDiv(){
			this.$refs.normalDiv.innerHTML = '我是新的内容'
		}
	}
}
</script>

<style>
	
</style>
