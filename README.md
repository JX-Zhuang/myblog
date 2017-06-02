# 基于Express、Mongoose的多人博客
## 一、博客初始化
### 全局安装Express应用生成器
npm install express-generator -g
### 初始化ejs模版的express
express -e myblog
### 安装依赖
npm install
## 二、创建git仓库
* .gitignore
* git init
* git add .
* git commit -m 'add'
* git remote add origin https://github.com/JX-Zhuang/myblog.git
* git push -u origin master
## 三、创建公共模版
在views下创建include文件夹，存放公共模版
## 四、注册登录模块

### /users/reg
>用户已存在
>创建文件夹model，引入mongoose，创建Schema，model
>session
>引入connect-flash，提醒功能
### /users/login
>用户名不存在
>密码错误
>登录成功

### 权限管理
权限中间件