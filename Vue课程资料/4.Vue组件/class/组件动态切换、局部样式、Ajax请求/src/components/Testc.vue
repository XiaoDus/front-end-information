<template>
<div id="Testc">
	我变成了Testc
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
	name:'Testc',
	data(){
		return {
			msg:'新页面'
		}
	}
}
</script>

<style>
	
</style>
