# VueCli3.0全栈项目-资金管理系统带权限

## 服务端

### 项目结构说明

> routers 项目的路由(项目所要访问的接口地址) models 模型(通过模型创建对应的数据)

### 安装的依赖

#### nodemon

`npm install nodemon --save`

#### body-parser

`npm install body-parser --save`

#### bcrypt 加密

`npm install bcrypt --save`

#### gravatar 公共头像库

`npm install gravatar --save` `

#### jsonwebtoken 公共token库

`npm i jsonwebtoken --save`

#### passport Passport是Node.js的Express兼容认证中间件。

`npm install passport --save`

#### passport-jwt 用于使用JSON Web令牌进行身份验证的Passport策略 。

`npm install passport-jwt --save`

#### 所有依赖

`npm install nodemon body-parser bcrypt gravatar jsonwebtoken passport passport-jwt --save`

## 说明

> 获取token(用于获取数据的一个令牌, 只有拿到令牌之后才能拿到想要请求的数据) 请求对应接口 用passport验证token 验证成功返回请求的数据
