const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
	 port:8080,
     proxy: {
		  //设置代理
　　　　  '/goapi': {
		   ws:true,
　　　　　　target:   'http://1.117.149.125:8080'  ,
　　　　　　changeOrigin: true,
　　　　　　secure: false,   //如果是http接口，需要配置该参数
　　　　　　pathRewrite: {
　　　　　　　　  '^/goapi'  :   ''
　　　　　　　　}
　　　　　　}
        }
     }
})
