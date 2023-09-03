<template>
<div id="List">
	<ul>
		<li v-for="i in options.articleList" :key="i.id">
			<router-link :to="{name:'Detail',query:{id:i.id}}">{{i.title}}</router-link>
		</li>
	</ul>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name:'List',
	computed:{
		...mapState(['options'])
	},
	mounted(){
		this.$store.dispatch('getArticleList')
	}
}
</script>

<style>
	
</style>
