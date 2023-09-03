const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: 'dist',
  // assetsDir: 'assets',
  devServer: {
     open: true  ,  //设置自动打开浏览器
     port: 1880,  //设置端口
     proxy: {
      //设置代理
  　　　　  '/api'  : {
  　　　　　　target:   'http://101.15.22.98'  ,
  　　　　　　changeOrigin:   true  ,
  　　　　　　secure:   false  ,   //如果是http接口，需要配置该参数
  　　　　　　pathRewrite: {
  　　　　　　　　  '^/api'  :   ''
  　　　　　　　　}
  　　　　　　}
        },
     },
	 // 构建多页面应用，页面的配置
	 pages: {
	   index: {
		 // page 的入口
		 entry: 'src/main.js',
		 // 模板来源
		 template: 'public/index.html',
		 // 在 dist/index.html 的输出
		 filename: 'index.html',
		 // 当使用 title 选项时，
		 // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
		 title: 'Index Page',
		 // 在这个页面中包含的块，默认情况下会包含
		 // 提取出来的通用 chunk 和 vendor chunk。
		 chunks: ['chunk-vendors', 'chunk-common', 'index']
	   },
	 },
})