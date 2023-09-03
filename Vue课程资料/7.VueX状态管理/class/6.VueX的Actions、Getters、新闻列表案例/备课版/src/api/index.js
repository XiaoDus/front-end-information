// ajax.js是封装axios请求方法
// index.js是封装请求接口的方法
import ajax from './ajax.js'

const proxy_pre = '/goapi'

export const getArticleList = function(){
	return ajax(proxy_pre + '/getAjaxData',{id:123},'GET')
}

export const selectArticle = function(articleId){
	return ajax(proxy_pre + '/selectAjaxData',{id:articleId},'GET')
}
