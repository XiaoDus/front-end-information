<template>
<div id="Testa">
	<span class="fontcolor">我叫Testa</span>
	<button @click="sendRequest" type="button">发送请求</button>
	<table v-show="data" border="1">
		<tr>
			<td>ID</td>
			<td>标题</td>
			<td>文章内容</td>
		</tr>
		<tr v-for="(item,index) in data" :key="item.id">
			<td>{{item.id}}</td>
			<td>{{item.title}}</td>
			<td>{{item.content}}</td>
		</tr>
	</table>
</div>
</template>

<script>
export default {
	name:'Testa',
	data(){
		return {
			data:null,
			temp_data:null
		}
	},
	methods:{
		// sendRequest(){
		// 	const _this = this
		// 	const xhr = new XMLHttpRequest();
		// 	xhr.open('GET','http://1.117.149.125:8080/api/getAjaxData',true)
		// 	xhr.onreadystatechange = () => {
		// 		if(xhr.status == 200 && xhr.readyState == 4){
		// 			console.log(_this)
		// 			// console.log(xhr.responseText)
		// 			_this.data = eval('('+xhr.responseText+')')
		// 			console.log(_this.data)
		// 		}
		// 	}
		// 	xhr.send()
		// },
		sendRequest(){
			let result = this.myAjax('GET','http://1.117.149.125:8080/api/getAjaxData')
			this.data = result
		},
		myAjax(method,url){
			const _this = this
			const xhr = new XMLHttpRequest();
			xhr.open(method,url,false)
			xhr.onreadystatechange = () => {
				if(xhr.status == 200 && xhr.readyState == 4){
					console.log(_this)
					// console.log(xhr.responseText)
					_this.temp_data = eval('('+xhr.responseText+')')
					console.log(_this.temp_data)
				}
			}
			xhr.send()
			return this.temp_data
		}
	}
}
</script>

<style scoped>
.fontcolor{
	color:red;
}
</style>
