<template>
<div id="Detail">
	<button @click="backList" type="button">返回列表页</button>
	<div v-if="articleData != null">
		<div v-if="articleData.code == 200">
			<p>文章ID：{{$route.query.id}}</p>
			<p>文章标题：{{articleData.data.title}}</p>
			<p>文章内容：{{articleData.data.content}}</p>
		</div>
		<div style="color:red;" v-else>{{articleData.msg}}</div>
	</div>
	
	<div v-else>加载文章中...</div>
</div>
</template>

<script>
import {selectArticle} from '../../api'
export default {
	name:'Detail',
	data(){
		return {
			articleData:null
		}
	},
	methods:{
		backList(){
			this.$router.replace({name:'List'})
		}
	},
	async mounted(){
		this.articleData = await selectArticle(this.$route.query.id)
		console.log(await selectArticle(this.$route.query.id))
	}
}
</script>

<style>
	
</style>
