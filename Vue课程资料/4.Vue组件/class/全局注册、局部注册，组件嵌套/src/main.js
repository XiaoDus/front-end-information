import Vue from 'vue'
import App from './App.vue'
// import Student from './components/Student.vue'

//自动全局引入与注册（不推荐使用）
// const req = require.context('./components/', true, /\.vue$/)
// // 遍历每一个引入的文件，并全局注册
// req.keys().forEach((element,index) => {
//   let name = element.replace(/(\.\/)|(\.vue)/ig, '')
//   Vue.component(`${name.split('/')[name.split('/').length - 1]}`, req(element).default)
// })

Vue.config.productionTip = false

//全局注册
// Vue.component('Student',Student)

new Vue({
  render: h => h(App),
}).$mount('#app')
