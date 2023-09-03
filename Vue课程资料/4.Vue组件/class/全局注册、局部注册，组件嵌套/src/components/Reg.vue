<template>
<div id="Reg">
	<RegInput></RegInput>
	<RegButton></RegButton>
</div>
</template>

<script>
import RegButton from './Reg/RegButton.vue'
import RegInput from './Reg/RegInput.vue'

export default {
	name:'Reg',
	components:{
		RegButton,
		RegInput
	}
}
</script>

<style>
	
</style>
