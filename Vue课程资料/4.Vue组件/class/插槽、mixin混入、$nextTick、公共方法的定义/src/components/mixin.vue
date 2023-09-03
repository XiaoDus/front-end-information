<template>
<div id="mixin">
	{{myname}}
	<hr>
	{{msg}}
	<hr>
	{{username}}<br>
	{{password}}<br>
	{{email}}<br>
	<button @click="say" type="button">测试外部属性</button>
</div>
</template>

<script>
//方式一：局部引入
import {userInfo} from '../mixin/mixin.js'

export default {
	name:'mixin',
	data(){
		return {
			msg:'学习Mixin混入'
		}
	},
	//局部引入
	mixins:[userInfo],
	mounted(){
		this.$common.jia(10,20)
		this.$common.jian(10,8)
		this.eat()
	}
}
</script>

<style>
	
</style>
