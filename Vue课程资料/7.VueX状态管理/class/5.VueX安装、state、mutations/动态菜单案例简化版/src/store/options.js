import router from '../router/index.js'
export default {
    // 用于响应组件中的动作
    actions: {},
    // 用于操作数据
    mutations: {
		EDITNUM(state,value){
			state.num = value
		},
		ADDROUTES(state,value){
			//将获取到的路由循环遍历追加给showRoutesList
			value.forEach(route => {
			  //过滤/和*路由
			  if(route.path != "/" && route.path != '*'){
				  state.showRoutesList.push(route)
			  }
			})
		},
		PUSHROUTES(state,value){
			//添加真正的路由，否则页面打开是404
			value.forEach(route => {
				router.addRoute(route)
			})
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