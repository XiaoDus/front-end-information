import Vue from 'vue'
import App from './App.vue'
//引入路由的实例对象
import router from './router/index.js'

Vue.config.productionTip = false

let vm = new Vue({
  render: h => h(App),
  //在Vue的配置中引入router路由的实例对象
  router
}).$mount('#app')

// console.log(vm)
// $route 路由指的是当前路由组件下的信息
// $router 是整个项目的路由相关的信息
