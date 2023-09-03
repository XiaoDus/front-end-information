import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = false

let vm = new Vue({
  render: h => h(App),
  router
}).$mount('#app')

// console.log(vm)
