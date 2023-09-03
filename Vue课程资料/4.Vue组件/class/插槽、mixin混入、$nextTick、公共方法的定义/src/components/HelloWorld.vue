<template>
  <div id="HelloWorld">
  	<Category title="游戏">
  	  <template slot-scope="{games}">
  	    <!--这里data为插槽给你传递的对象包含你所需要的数据 包装成对象的原因就是你当时可能个插槽传递了多个数据-->
  	    <ul>
  	      <li v-for="(g , index) in games" :key="index">{{ g }}</li>
  	    </ul>
  	  </template>
  	</Category>
  	
  	<Category title="游戏">
  	  <template slot-scope="{games}">
  	    <!--这里data为插槽给你传递的对象包含你所需要的数据-->
  	    <ol>
  	      <li  v-for="(g , index) in games" :key="index">{{ g }}</li>
  	    </ol>
  	  </template>
  	</Category>
  	
  	<Category title="游戏">
  	  <template slot-scope="{games,msg}">
		{{msg}}
  	    <h4 v-for="(g , index) in games" :key="index">{{ g }}</h4>
  	  </template>
	  <template slot="footer">
	  	我是底部
	  </template>
  	</Category>
    </div>
</template>

<script>
import Category from './Slot.vue'
export default {
  name: 'HelloWorld',
  components:{
	  Category
  }
}
</script>

<style>

</style>
