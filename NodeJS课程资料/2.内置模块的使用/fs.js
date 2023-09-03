const fs = require('fs')
const path = require('path')
//path.basename(path,ext) 获取路径中最后部分，即文件名，第二参数可选，可以过滤扩展名
//path.extname(path) 获取路径的扩展名

// 注意，node中使用相对路径，是根据执行node命令行时所在路径，而不是文件所在路径，__dirname才是当前文件所处目录
// 方法一： './fs.txt' 最好更改为 __dirname + '/fs.txt'
// 方法二： './fs.txt' 最好更改为 path.join(__dirname,'./fs.txt')  join方法中../会抵一层路径

fs.readFile('./fs.txt','utf8',function(err,data){
	if(err){
		return console.log('文件读取失败'+err.message)
	}
	// console.log('读取文件成功' + data)
	
	// 处理数据
	const arr = data.split(' ')
	const newarr = []
	var i = 1
	arr.forEach(function(item){
		var id = i.toString()
		newarr.push(id + '.' + item)
		i++
	})
	const newStr = newarr.join('\r\n')
	// console.log(newStr)
	fs.writeFile('./fs-ok.txt',newStr,function(err){
		if(err){
			return console.log('文件写入失败' + err)
		}
		console.log('文件写入成功！')
	})
})