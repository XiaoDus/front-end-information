<template>
<div id="News">
	我是News页面<hr>
	getters里的数据:{{rmb}}<br>
	state里的数据:{{$store.state.options.num}}<br>
	<input type="text" v-model="n" />
	<button @click="changeNum(n)" type="button">修改state中的num</button>
</div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
	name:'News',
	data(){
		return {
			n:0
		}
	},
	computed:{
		...mapGetters(['rmb'])
		//自动生成的计算属性
		// rmb(){
		// 	return this.$store.getters.rmb
		// }
	},
	methods:{
		// editNum(){
		// 	//调用actions里面的changeNum方法
		// 	this.$store.dispatch('changeNum',this.n)
		// }
		...mapActions(['changeNum'])
		//自动生成的代码参考如下
		// changeNum(value){
		// 	this.$store.dispatch('changeNum',value)
		// }
	}
}
</script>

<style>
	
</style>
