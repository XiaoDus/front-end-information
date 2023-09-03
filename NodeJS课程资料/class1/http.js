const http = require('http') // 引入http模块
const port = 5411 //定义端口号 0到65535
let server = http.createServer() // 创建服务器对象

// 绑定请求事件，当有人请求服务器要做的事情
server.on('request',function(res,req){
	req.end('hello')
})

// 开启服务器并监听指定端口号
server.listen(port,function(){
	console.log('服务器已经开启，地址为http://localhost:'+port)
})

	// // console.log('有人访问了'+res.url)
	// // console.log('访问的方式是'+res.method)
	// let myurl = res.url // /login?username=123&password=321
	// let newurl = myurl.split('?')
	// console.log(newurl[0])
	// // newurl[0] == /login
	// // newurl[1] == username=123&password=321
	// if(newurl[0] != '/favicon.ico'){
	// 	let userinfo = newurl[1].split('&')
	// 	// userinfo[0] == username=123
	// 	// userinfo[1] == password=321
		
	// 	if(newurl[0] == '/login' ){
	// 		if(userinfo[0] == 'username=123' && userinfo[1] == 'password=321'){
	// 			req.end('ok')
	// 		}else{
	// 			req.end('error')
	// 		}
	// 	}
	// }