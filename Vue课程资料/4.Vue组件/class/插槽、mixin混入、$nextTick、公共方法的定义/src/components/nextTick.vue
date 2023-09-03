<template>
<div id="nextTick">
	{{myname}} - {{email}}
	<div v-show="!isEdit">
		<span>{{data}}</span>
	</div>
	<div v-show="isEdit">
		<input ref="inputText" type="text" v-model="data" />
	</div>
	
	<button @click="editData" type="button">修改数据</button>
</div>
</template>

<script>
import {userInfo} from '../mixin/mixin.js'

export default {
	name:'nextTick',
	data(){
		return {
			data:'默认',
			isEdit:false
		}
	},
	methods:{
		editData(){
			this.isEdit = !this.isEdit
			if(this.isEdit === true){
				// console.log('给输入框获取焦点')
				this.$nextTick(function(){
					this.$refs.inputText.focus()
				})
			}
		}
	},
	//局部引入
	mixins:[userInfo],
	mounted(){
		// this.sum(4,8)
	}
}
</script>

<style>
	
</style>
