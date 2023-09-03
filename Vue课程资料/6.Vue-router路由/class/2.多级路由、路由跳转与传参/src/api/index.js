// ajax.js是封装axios请求方法
// index.js是封装请求接口的方法
import ajax from './ajax.js'

const proxy_pre = '/goapi'

export const getArticleList = async function(){
	return await ajax(proxy_pre + '/getAjaxData',{id:123},'GET')
}
