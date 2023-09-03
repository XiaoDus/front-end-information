<template>
<div id="Student">
	<h3>学生组件</h3>
	{{sname}}<br>
	{{sage}}<br>
</div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
	name:'Student',
	data(){
		return {
			sname:'小明',
			sage:24
		}
	},
	mounted(){
		// this.$bus.$emit('getStudent',this.sname)
		pubsub.publish('getStudent',this.sname)
	}
}
</script>

<style>
	
</style>
