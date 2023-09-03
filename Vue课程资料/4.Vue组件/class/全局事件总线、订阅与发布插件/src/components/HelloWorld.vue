<template>
  <div class="hello">
	我是Hello World<br>
	{{data}}
	<hr>
	<button @click="bindTest" type="button">绑定事件test</button>
	<button @click="emitTest('第一个数据')" type="button">触发test_1</button>
	<button @click="emitTest('第二个数据')" type="button">触发test_2</button>
	<button @click="unbindTest" type="button">解绑事件test</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
	  return {
		  data:'我是默认值'
	  }
  },
  mounted(){
	  // console.log(this.$bus)

	  //绑定事件 $on
	  // this.$on('test',function(value){
		 //  console.log(value)
	  // })
	  
	  //触发事件 $emit
	  // this.$emit('test',{name:'麻子',age:25})
	  
	  //解绑事件 $off
	  // this.$off('test') 
  },
  methods:{
	  bindTest(){
		  let _this = this
		  this.$on('test',function(value){
			  console.log('事件被触发了')
			  _this.data = value
		  })
		  console.log('事件被绑定了')
	  },
	  // <button @click="emitTest('传递了第一个数据')" type="button">触发test_1</button>
	  emitTest(val){
		  this.$emit('test',val)
	  },
	  unbindTest(){
		  this.$off('test')
	  }
  }
}
</script>

<style scoped>

</style>
