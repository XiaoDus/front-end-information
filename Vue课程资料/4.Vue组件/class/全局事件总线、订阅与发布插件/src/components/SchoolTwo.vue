<template>
<div id="School">
	<h3>学校组件</h3>
	{{name}}<br>
	{{address}}<br>
	<button @click="getStudentInfo" type="button">查看学生信息</button>
	<button @click="unbind" type="button">解绑pubsub事件</button>
</div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
	name:'School',
	data(){
		return {
			name:'北大青鸟',
			address:'观山湖区',
			sname:'',
		}
	},
	methods:{
		getStudentInfo(){
			console.log(this.sname)
		},
		unbind(){
			pubsub.unsubscribe('getStudent')
		}
	},
	mounted(){
		let _this = this
		// this.$bus.$on('getStudent',function(value){
		// 	_this.sname = value
		// })
		pubsub.subscribe('getStudent',function(keyname,value){
			// console.log('事件被触发了',keyname,value)
			_this.sname = value
		})
	},
	beforeDestroy(){
		// this.$bus.$off('getStudent')
		pubsub.unsubscribe('getStudent')
	}
}
</script>

<style>
	
</style>
