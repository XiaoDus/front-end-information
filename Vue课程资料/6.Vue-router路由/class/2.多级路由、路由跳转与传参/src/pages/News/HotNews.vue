<template>
<div id="HotNews">
	<ul>
		<li v-for="i in newsList" :key="i.id">
			<router-link :to="{
				name:'NewsDetail',
				params:{
					id:i.id,
					title:i.title
				}
			}">
				{{i.title}}
			</router-link>
		</li>
	</ul>
</div>
</template>

<script>
export default {
	name:'HotNews',
	data(){
		return {
			newsList:[
				{id:'001',title:'海贼王：火灾之火的失败，让你的梦想破灭，与你争夺你的梦想'},
				{id:'002',title:'“长肉飞快”的6种主食，没有米饭馒头，很多人天天在吃'},
				{id:'003',title:'主持人谢娜：与刘烨6年感情遗憾告终，嫁张杰11年生3个女儿很幸福'},
			]
		}
	}
}
</script>

<style>
	
</style>
