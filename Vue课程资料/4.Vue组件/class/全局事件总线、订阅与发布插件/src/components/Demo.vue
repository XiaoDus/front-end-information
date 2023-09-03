<template>
<div id="Demo">
	我是Demo组件<br>
	学生姓名：{{data?data.name:'默认值'}}
	<br>
	学生年龄：{{data?data.age:'默认值'}}
	<br>
	<button @click="bindStudentInfo" type="button">绑定事件</button>
</div>
</template>

<script>
export default {
	name:'Demo',
	data(){
		return {
			data:null
		}
	},
	methods:{
		bindStudentInfo(){
			let _this = this
			this.$bus.$on('getStudent',function(studentInfo){
				_this.data = studentInfo
			})
		}
	},
	beforeDestroy(){
		this.$bus.$off('getStudent')
	}
}
</script>

<style>
	
</style>
