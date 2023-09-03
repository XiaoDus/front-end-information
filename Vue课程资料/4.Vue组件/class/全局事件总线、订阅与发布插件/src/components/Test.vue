<template>
<div id="Test">
	我是Test组件<br>
	<button @click="emitStudentInfo" type="button">触发事件</button>
</div>
</template>

<script>
export default {
	name:'Test',
	data(){
		return {
			student:{
				name:'张三',
				age:28
			}
		}
	},
	methods:{
		emitStudentInfo(){
			this.$bus.$emit('getStudent',this.student)
		}
	}
}
</script>

<style>
	
</style>
