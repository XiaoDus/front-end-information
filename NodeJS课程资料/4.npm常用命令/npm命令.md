1. npm init                    //初始化生成配置文件
2. npm install -g              //全局安装
3. npm install -D              //在当前项目下安装
4. npm version patch           //更新版本
5. npm update 模块名             //可以把当前目录下node_modules子目录里边的对应模块更新至最新版本 
6. npm unpublish npmhswcommonwei@1.0.2 // 可以撤销发布自己发布过的某个版本代码

npm   -v                          //查看版本号
npm   --help                    //查看npm所有命令
npm   init                        //构建项目说明，生成 package.json文件
npm   view    jquery   versions               //查看历史版本信息(最多只能显示100条)        
npm   view   node   versions  --json       //查看所有版本信息
npm   view   jquery   version                  //查看最新版本信息
npm   info   jquery                                  //查看所有版本及jquery的信息
npm   ls   jquery                                     //查看本地安裝的jquery版本
npm   ls   jquery   -g                               //查看全局安裝的jquery版本
npm   i   jquery@3.2.3                           //安裝指定版本 
npm   i   jquery                                       //安装推荐的版本
npm   i   jquery@latest                          //安裝指定、最新版本 
npm   install   jquery     简写    npm   i   jquery     //全局安装依赖
npm   install   jquery   -D    //把模块和版本号添加到devdependencies。
npm   install   jquery   -S    //把模块和版本号添加到dependencies。
npm   update    jquery            //可以把当前目录下node_modules子目录里边的对应模块更新至最新版本      
npm   update    jquery -g        //可以把全局安装的对应命令行程序更新至最新版  
npm   uninstall jquery@3.0.0   --save           //卸载依赖
npm   install   cnpm   -g  --registry= https://registry.npm.taobao.org      //安装淘宝镜像
npm   config    list                            //查看npm的配置
npm   config    set  registry   https://registry.npm.taobao.org      //设置淘宝镜像源
npm   config    set  registry   https://registry.npmjs.org               //设置npm源
npm   set       disturl    https://npm.taobao.org/dist              //设置资源库从淘宝库获取 
npm   cache     clean   --force         //清空npm本地缓存 ，用于对付使用相同版本号发布新版本代码的人 
npm   run       命令           //执行script命令
npm   login                   //发布包时登录npm账号用的
npm    publish              //发布包到npm官方库
npm    unpublish    test      //撤销已发布的包 
npm    unpublish     test     --force          //强制撤销
npm    unpublish      test@1.0.2             //可以撤销发布自己发布过的某个版本代码 
