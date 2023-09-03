// 根据开发模式判断打包方式
// 1）、在开发阶段mode 要设置为："development" ，这种模式打包速度快，体积大，打包效率很高 ，基本没有压缩。
// 2）、在上线阶段mode要设置为："production" ， 这种模式 打包速度慢，体积小，打包效率低，但是压缩的包很小。
const path = require('path')

//当使用webpack打包的时候，webpack会自动去项目根目录下寻找webpack.config.js这个配置文件，加载里面的配置，根据配置选项进行打包
module.exports = {
	mode: 'development',
    entry: "./src/main.js",
    output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist') //输出文件路径必须是一个绝对路径
    },
    module: {
        rules: [
            { 
				test: /\.css$/, 
				use: ["style-loader","css-loader"] ,
			}
        ]
    },
	devServer: {
		static: "./",
		hot: true,
		port: 8888,
		open: true
	}
};