# Vue Cli3全栈项目 - 资金管理系统带权限

## Project setup

`npm install`

### Compiles and hot-reloads for development

`npm run serve`

### Compiles and minifies for production

`npm run build`

### Run your tests

`npm run test`

### Lints and fixes files

`npm run lint`

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 一、VueCli3.0创建项目

### 方式一、 启用图形化界面创建

`vue ui`

### 方式二、 命令

#### 创建

`vue create 项目名"`

#### 运行

`npm run serve`

### 二、项目用到的依赖

#### concurrently 将多个终端启动的项目绑定到一块, 同时运行多个命令

`npm install concurrently --save`

#### 配置concurrently

> 1.在里面的package.json里面定义一个启动方式, 如:

> ```javascript
> "scripts": { 
>    "test": "npm run server ", 
> },
> ```

> 2.在最外面的package.json里面

> ```javascript
> "scripts": { 
>  /* 下面这个的作用就是每次启动项目的时候会先安装里面项目的依赖模块
>  注:npm install --prefix nodeServer中的nodeServer是里面的项目的文件夹名称 
>  */
>  "nodeServer-install": "npm install --prefix nodeServer", 
>  /*下面这个是里面的package.json里面定义的启动方式
>  注:第一个nodeServer是dev中的npm run nodeServer的nodeServer
>  后面的prefix nodeServer是是里面的项目的文件夹名称
>  */
>  "nodeServer": "npm test --prefix nodeServer", 
>  /*下面是把前后端项目的启动方式绑定到一块
>  如果前端包含后端,后端的运行命令放在concurrently后面的第一个
>  如果后端包含前端,后端的运行命令前端的concurrently后面的第一个
> */
>      "dev": "concurrently \"npm run nodeServer\" \"npm run serve\""
> },
> ```

#### element-ui

`npm i element-ui -S`

##### 在 main.js 中写入以下内容：

> ```
> import ElementUI from 'element-ui'; 
> import 'element-ui/lib/theme-chalk/index.css'; 
> Vue.use(ElementUI);
> ```

### jwt-decode(解析token)

`npm i jwt-decode --save`

### 本地预览

`npm install -g serve`

> ```
> # -s 参数的意思是将其架设在 Single-Page Application 模式下
> #  这个模式会处理即将提到的路由问题
> ```

`serve -s dist`
