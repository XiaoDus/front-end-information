<template>
<div id="Home">
	我是Home页面<hr>
	state的数据：{{$store.state.options.num}}<br>
	computed的数据：{{options.num}}
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name:'Home',
	computed:{
		...mapState(['options']),
	},
	mounted(){
		console.log(this.$store.state.options.num)
		console.log(this.options.num)
	}
}
</script>

<style>
	
</style>
