<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!--插槽,等着组件的使用者进行填充-->
    <slot :games="games" :msg='msg'>我是默认值</slot>
	<slot name="footer">具名插槽默认值</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:['title' ],
  data(){
	  return {
		  games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
		  msg:'我是slot组件'
	  }
  }
}
</script>

<style scoped>
   .category{
     background: skyblue;
     width: 200px;
     height: 300px;
	 display: block;
	 float: left;
	 margin-left:20px;
   }
   h3{
     text-align: center;
     background: orange;
   }
</style>