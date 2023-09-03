import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = false

let vm = new Vue({
  render: h => h(App),
  router,
  beforeCreate(){
	  Vue.prototype.$bus = this
  }
}).$mount('#app')

// console.log(vm)
