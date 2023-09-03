const http = require('http')

const server = http.createServer()

const port = 8585

server.on('request',function(req,res){
	//req.url 请求地址
	//req.method 请求方法
	console.log('有人访问了服务器 '+req.method+'---'+req.url)
	res.setHeader('Content-Type','text/html; charset=utf-8')
	res.end('你访问了服务器 '+req.method+'---'+req.url)
})

server.listen(port,function(){
	console.log('服务器启动，地址为：http://127.0.0.1:' + 8585)
})