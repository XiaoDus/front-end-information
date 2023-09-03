<template>
<div id="Index">
	<div>
		<Header></Header>
	</div>
	<div class="clear"></div>
	<div>
		<Main></Main>
	</div>
	<div class="clear"></div>
	<div>
		<Footer></Footer>
	</div>
</div>
</template>

<script>
import Header from './Header.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'

export default {
	name:'Index',
	components:{
		Header,
		Main,
		Footer
	}
}
</script>

<style scoped>
#Index{
	padding:0;
}
.clear{
	clear: both;
}
</style>
