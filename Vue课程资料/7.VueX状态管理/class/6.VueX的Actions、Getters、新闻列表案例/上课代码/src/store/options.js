export default {
    // 用于响应组件中的动作
    actions: {
		changeNum(context,value){
			value = value*10
			//去调用mutations里的CHANGENUM
			context.commit('CHANGENUM',value)
		}
	},
    // 用于操作数据
    mutations: {
		CHANGENUM(state,value){
			state.num = value
		}
	},
    // 用于将state中的数据进行加工（不是必要的）
    getters: {
		rmb(state){
			return state.num+'元'
		}
	},
    // 用于存储数据
    state: {
		num:123
	}
};