const path = require('path')
// development 开发模式 打包下来的文件比较大，打包速度快
// production 生产模式 打包之后的文件小，但是打包速度慢
module.exports = {
	mode:'production', //打包方式
	entry:'./src/app.js', //入口文件的位置
	output:{
		filename:'all.js',
		path:path.join(__dirname,'./dist')
	} ,//打包之后生成的文件存放名称及目录
	
	//插件配置
	module:{
		//规则
		rules:[
			//test 匹配什么文件的规则 use 使用什么加载器进行编译
			{test:/\.css$/,use:["style-loader","css-loader"]}
		]
	},
	//配置本地服务器
	devServer:{
		static: {
		  directory: path.join(__dirname, "./public"),
		},
		hot:true, // 是否开启热重载
		port:8811,// 服务器端口号
		open:true // 是否自动打开浏览器
	}
}