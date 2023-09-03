<template>
<div id="Student">
	学校名字：{{schname}}<br>
	学校地址：{{schaddress_local}}<br>
	学生姓名：{{stu.name}}<br>
	学生学号：{{stu.cardid}}<br>
	<button @click="changeProps" type="button">尝试修改学校地址</button>
</div>
</template>

<script>
export default {
	name:'Student',
	data(){
		return {
			stu:{
				name:'张三',
				cardid:145612
			},
			schaddress_local:''
		}
	},
	//第一种接收方式：
	// props:['schname','schaddress']
	//第二种接收方式
	// props:{
	// 	schname:String,
	// 	schaddress:Number
	// }
	//第三种接收方式
	props:{
		schname:{
			type:String,
			required:true
		},
		schaddress:{
			type:String,
			required:false,
			default:'我是默认值'
		}
	},
	methods:{
		changeProps(){
			this.schaddress_local = '数博大道'
		}
	},
	mounted(){
		this.schaddress_local = this.schaddress
	}
}
</script>

<style>
	
</style>
