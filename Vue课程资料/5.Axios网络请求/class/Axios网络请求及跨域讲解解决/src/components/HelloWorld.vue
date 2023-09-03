<template>
  <div class="hello">
	<button @click="getAjaxData" type="button">发送请求</button>
  </div>
</template>

<script>
import {getArticleList} from '../api/index.js'
export default {
  name: 'HelloWorld',
  methods:{
  	getAjaxData(){
  		let result = getArticleList()
		result.then(res => {
			console.log(res)
		}).catch(e => {
			console.log(e)
		})
  	}
  }

}
</script>

<style scoped>

</style>
