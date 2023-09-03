<template>
<div id="Address">
	学校地址<br>
	query方法接收参数：<br>
	国家：{{$route.query.country}}<br>
	街道：{{$route.query.street}}<br>
	<hr>
	params方法接收参数：<br>
	国家：{{$route.params.country}}<br>
	街道：{{$route.params.street}}<br>
	<hr>
	路由中props方法接收参数：<br>
	国家：{{country}}<br>
	街道：{{street}}<br>
	当前组件的完整路径：{{myFullPath}}
	
</div>
</template>

<script>
export default {
	name:'Address',
	props:['country','street','myFullPath'],
	mounted(){
		console.log(this.$route)
	}
}
</script>

<style>
	
</style>
