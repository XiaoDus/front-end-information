import {getArticleList} from '../api'
export default {
    // 用于响应组件中的动作
    actions: {
		async getAriticle(context){
			context.commit('GETARTICLE',await getArticleList())
		}
	},
    // 用于操作数据
    mutations: {
		GETARTICLE(state,value){
			state.articleList = value
		}
	},
    // 用于将state中的数据进行加工（不是必要的）
    getters: {},
    // 用于存储数据
    state: {
		articleList:[]
	}
};