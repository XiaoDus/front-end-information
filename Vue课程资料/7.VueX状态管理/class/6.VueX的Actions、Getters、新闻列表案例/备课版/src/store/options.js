import {getArticleList} from '../api/index.js'
export default {
    // 用于响应组件中的动作
    actions: {
		async getArticleList(context){
			let httpArticleList = await getArticleList()
			context.commit('GETARTICLELIST',httpArticleList)
		}
	},
    // 用于操作数据
    mutations: {
		GETARTICLELIST(state,value){
			state.articleList = value
		}
	},
    // 用于将state中的数据进行加工（不是必要的）
    getters: {
		
	},
    // 用于存储数据
    state: {
		num:123,
		articleList:[]
	}
};