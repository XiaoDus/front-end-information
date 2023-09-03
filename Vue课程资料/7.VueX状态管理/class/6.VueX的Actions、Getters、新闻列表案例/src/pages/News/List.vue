<template>
<div id="List">
	<ul>
		<li v-for="i in $store.state.options.articleList" :key="i.id">
			<router-link :to="{name:'Detail',query:{id:i.id}}">
				{{i.title}}
			</router-link>
		</li>
	</ul>
</div>
</template>

<script>
export default {
	name:'List',
	mounted(){
		this.$store.dispatch('getAriticle')
		//错误用法：下面输出会获取不到值，因为getArticle方式是异步函数，不会等待结果
		// console.log(this.$store.state.options.articleList)
	}
}
</script>

<style>
	
</style>
