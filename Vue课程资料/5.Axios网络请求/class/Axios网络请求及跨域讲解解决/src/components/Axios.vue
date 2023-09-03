<template>
<div id="Qingqiu">
	<button @click="getAjaxData" type="button">发送请求</button>
</div>
</template>

<script>
import axios from 'axios'
export default {
	name:'Qingqiu',
	methods:{
		getAjaxData(){
			axios.post('http://1.117.149.125:8080/api/getAjaxData',{
				username:'admin',
				password:'123456'
			}).then(res => {
				console.log(res.data)
			}).catch(e => {
				console.log(e)
			})
		}
	}
}
</script>

<style>
	
</style>
