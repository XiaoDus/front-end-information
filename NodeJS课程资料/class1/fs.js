const fs = require('fs')
const path = require('path')
// path.basename('D:/node/a.txt') // 获取a.txt
// path.join(__dirname,'/a.txt') // 组合路径
//读文件公式
// fs.readFile(文件路径,function(错误信息,文件数据){ ... })
//写文件公式 
// fs.writeFile(文件路径,要写入的数据,function(错误信息){ ... })

fs.readFile(path.join(__dirname,'/a.txt'),function(err,data){
	if(err){
		return
	}
	// console.log(data.toString())
	let dataStr = data.toString()
	let dataArr = dataStr.split(' ')
	newArr = dataArr.join('\r\n')
	fs.writeFile(path.join(__dirname,'/b.txt'),newArr,function(err){
		if(err){
			return
		}
		console.log('文件写入完成')
	})
})