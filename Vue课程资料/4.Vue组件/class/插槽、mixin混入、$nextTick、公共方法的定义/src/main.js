import Vue from 'vue'
import App from './App.vue'
//方式二：引入混入文件
import {life} from './mixin/demo.js'

//公共方法
import * as Calc from './common/calc.js'

Vue.config.productionTip = false

Vue.prototype.$common = Calc

//全局混入
Vue.mixin(life)

new Vue({
  render: h => h(App),
}).$mount('#app')
