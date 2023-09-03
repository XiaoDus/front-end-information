// 封装Ajax请求函数
import axios from 'axios'
// 给所有通过此方法请求的路径添加/api以走代理解决跨域问题
// const BASE_URL = 'http://localhost:81' //正式上线需要改为完整路径，因为代理服务器将失效
// const BASE_URL = '/api' //可通过配置前缀，配合代理服务器解决跨域问题
const BASE_URL = ''
export default function ajax (url, data = {}, method = 'GET') {
	return new Promise (function (resolve, reject) {
		let promise
		if (method === 'GET') {
			//将data数据拼接为url字符串请求,data转成?key=value的形式加在url
			let dataQuery = ''
			Object.keys(data).forEach(key => {
				dataQuery += key + '=' + data[key] + '&'
			})
			if (dataQuery !== '') {
				dataQuery = dataQuery.substring(0,dataQuery.lastIndexOf('&'))
				url = url + '?' + dataQuery
			}
			//发送GET请求
			promise = axios.get(BASE_URL + url, {timeout:5000})
		} else if (method === 'POST') {
			//发送POST请求
			promise = axios.post(BASE_URL + url, data, {timeout:5000})
		}
		promise.then(function (response) {
			resolve(response.data)
		}).catch(function (error) {
			reject(error)
		})
	})
}