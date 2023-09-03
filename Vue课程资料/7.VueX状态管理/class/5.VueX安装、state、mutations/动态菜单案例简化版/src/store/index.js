import Vue from 'vue';
import Vuex from 'vuex';

import options from './options.js'
Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		options
	}
})