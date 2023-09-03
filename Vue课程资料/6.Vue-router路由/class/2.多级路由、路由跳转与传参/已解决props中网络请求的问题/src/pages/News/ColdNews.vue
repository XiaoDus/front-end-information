<template>
<div id="ColdNews">
	<ul v-show="articleData != null">
		<li v-for="i in articleData" :key="i.id">{{i.title}}</li>
	</ul>
</div>
</template>

<script>
export default {
	name:'ColdNews',
	props:['articleList'],
	data(){
		return {
			articleData:null
		}
	},
	async mounted(){
		console.log(await this.articleList)
		this.articleData = await this.articleList
	}
}
</script>

<style>
	
</style>
