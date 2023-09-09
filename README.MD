
git操作流程
--------------------------------



第一步：进入要上传的项目，右键点击 Git Bash Here。


第二步：初始化。 git init


第三步：登陆到gitee中，新建仓库，并复制仓库地址。


第四步：在命令行输入 git remote add origin + 复制的地址


第五步：输入git pull -u origin master。这时会弹出输入账号密码框。填写后继续下一步。


第六步：输入 git add .


第七步：输入 git commit -m "提交说明"


最后： git push -u origin master


这时候，再次刷新仓库，即可看到刚刚上传的项目



## 更新拉取步骤
1.克隆（将项目拉取到本地）
```
git clone + 项目地址
```

2.修改后更新到gitee
```
首先：git add 需要更新提交的文件路径
然后：git commit -m “测试修改后上传gitee” 备注提交的信息
最后: git push -u origin master 推送到gitee上
```

3.从gitee拉取最近的代码
```
git pull origin master
```

4.删除gitee多余的文件夹
```
git rm -r --cached 删除的文件名称
git commit -m ‘操作说明’
git push -u origin master
```

5.查看项目有哪些文件
```
dir
```

## 常见场景和问题：
#### 场景一：
多人协同开发时，别人写好了代码并提交到远程仓库，此时你也写好了代码，准备提交时发现本地仓库与远程仓库不一致，无法提交

解决：
```
1.git reset --soft HEAD^ 回退到commit之前，如果当前没有commit，但add的情况下，则可以忽略此步骤(如果连add都还没有，则需要先add)

2.git stash 将当前修改的内容暂时保存并退回修改前

3.git pull origin master 从远程仓库拉取别人修改后的最新代码

4.git stash apply 将刚刚保存的自己修改的代码拿回来并且和最新代码合并

5.git status 此时查看别人改的代码和自己的代码是否有冲突，如果出现红色文件名，找到该文件，将冲突的地方根据实际情况修改掉

6.git add . 重新将冲突的文件以及自己修改的文件添加到暂存区

7.git commit -m "xxx" 提交所有修改内容

8.git push -u origin master 最后将最新代码同步到远程仓库

```

#### 场景二：
版本回退后，后悔了，想找回刚刚回退前的版本

解决:
```
git reflog 查看所有操作日志，找到刚刚回退前的版本号

git reset --hard [回退前的版本号] 将版本回到回退前的版本
```

--------------------------------
## 命令使用总结

--------------------------------
```
git config --global user.email "xxx@.qq.com" 配置邮箱
git config --global user.name "xxxx" 配置称呼
git add . 			  添加所有修改的文件
git add 1.txt   	  单独添加修改的文件
git commit -m "信息"  提交添加的文件
git push -u origin 分支名称 推送提交的文件到远程分支
git status 			  查看当前的文件状态
git log 			  查看提交日志
git reset --hard 提交的版本编号 回退到指定版本，同时文件暂存区的文件也回退
git reset --soft 提交的版本编号 回退到指定版本，仅回退commit操作
git pull origin 分支  从远程分支拉取最新代码
git branch 分支名 	  创建分支
git checkout 分支名   切换本地分支
git stash 			  暂时保存当前的修改
git merge 分支名 把指定分支合并到当前分支（默认是提交状态）
```