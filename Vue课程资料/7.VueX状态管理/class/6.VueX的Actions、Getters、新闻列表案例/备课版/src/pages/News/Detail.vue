<template>
<div id="Detail">
	<div v-if="errMsg == null && articleData != null">
		<h5><strong>文章ID：</strong>{{articleData.id}}</h5>
		<h5><strong>文章标题：</strong>{{articleData.title}}</h5>
		<strong>文章内容：</strong>
		<p>{{articleData.content}}</p>
	</div>
	
	<div v-else style="color:red;">{{errMsg}}</div>
</div>
</template>

<script>
import {selectArticle} from '../../api/index.js'
export default {
	name:'Detail',
	data(){
		return {
			articleData:null,
			errMsg:null
		}
	},
	async mounted(){
		let res = await selectArticle(this.$route.query.id)
		if(res.code == '200'){
			this.articleData = res.data
		}else{
			this.errMsg = res.msg
		}
	},
}
</script>

<style>
	
</style>
