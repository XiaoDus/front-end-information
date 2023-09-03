<template>
<div id="School">
	<h3>学校组件</h3>
	{{name}}<br>
	{{address}}<br>
	<button @click="getStudentInfo" type="button">查看学生信息</button>
</div>
</template>

<script>
export default {
	name:'School',
	data(){
		return {
			name:'北大青鸟',
			address:'观山湖区',
			sname:''
		}
	},
	methods:{
		getStudentInfo(){
			console.log(this.sname)
		}
	},
	mounted(){
		let _this = this
		this.$bus.$on('getStudent',function(value){
			_this.sname = value
		})
	},
	beforeDestroy(){
		this.$bus.$off('getStudent')
	}
}
</script>

<style>
	
</style>
