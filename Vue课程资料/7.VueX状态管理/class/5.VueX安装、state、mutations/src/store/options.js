export default {
    // 用于响应组件中的动作
    actions: {},
    // 用于操作数据
    mutations: {
		EDITNUM(state,value){
			state.num = value
		},
		ADDROUTES(state,value){
			state.showRoutesList = value
		},
		PUSHROUTES(state,value){
			state.showRoutesList = [...state.showRoutesList,...value]
		}
	},
    // 用于将state中的数据进行加工（不是必要的）
    getters: {},
    // 用于存储数据
    state: {
		num:123,
		showRoutesList:[]
	}
};