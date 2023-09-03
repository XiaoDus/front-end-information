<template>
<div id="Home">
	我是Home页面<hr>
	<router-link :to="{name:'News'}">跳转到新闻页面</router-link><br>
	<button @click="cns" type="button">query传参</button>
	<button @click="cns2" type="button">params传参</button>
	
</div>
</template>

<script>
export default {
	name:'Home',
	methods:{
		cns(){
			// 跳转的三种方式：
			// this.$router.push('/News')
			// this.$router.push({path:'/News'})
			// this.$router.push({name:'News'})
			
			//传参的两种方式：
			//query
			this.$router.push({
				name:'News',
				query:{
					title:'我是标题',
					author:'作者名字',
					isShow:true
				}
			})
		},
		cns2(){
			//params
			this.$router.push({
				name:'News',
				params:{
					title:'天气真好',
					author:'小明',
					isShow:true
				}
			})
		}
		
	},
	//激活后
	activated(){
		console.log('Home页面被激活了')
	},
	//失去激活后
	deactivated(){
		console.log('Home页面失活了！！')
	}
}
</script>

<style>
	
</style>
