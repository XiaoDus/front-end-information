@echo off
D:
cd class_git
git checkout b
git add .
git commit -m "自动部署的文件"
git push -u origin b