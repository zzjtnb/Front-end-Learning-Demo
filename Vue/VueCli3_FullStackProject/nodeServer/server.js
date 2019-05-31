/* 
全局安装nodemon就不用每次修改完代码重新使用node口令运行服务器
安装:npm install nodemon -g
使用 nodemon 文件.后缀

修改项目运行命令在package.json
"scripts": {
     "start": "node server.js",
    "server": "nodemon server.js"
  },

创建文件夹 mkdir
创建文件 touch
*/
//引入express
const express = require("express");
//引入mongoose
const mongoose = require("mongoose");
//引入body-parser
const bodyParser = require("body-parser");
//引入passport
const passport = require("passport");

//实例化一个app
const app = express();


/* 模型的使用
1.引入对应的模型文件
const users = require("./routers/api/users");
2.使用routes
app.use("/api/users", users);
 */
//引入users.js
const users = require("./routers/api/users");
//引入profile.js
const profiles = require("./routers/api/profiles");


// 使用body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// passport初始化
app.use(passport.initialize());

// 引入passport配置
// 下面(passport)中的这个passport是上面引入的passport,传给./config/passport.js中
require("./config/passport")(passport);

//设置路由
app.get("/", (req, res) => {
  res.send(
    `
    <div style="text-align: center;font-size: 18px;">
    <h1>Hello World</h1><h4>欢迎来到Node.js</h4>
    <p>这是一个用node.js搭建的微型服务器,你可以在这里完成增删改查的任务</p>
    </div>
    `
  );
});


//使用routes--定义接口请求地址
app.use("/api/users", users);
app.use("/api/profiles", profiles);


//设置主机地址
const host = "localhost";

// 给一个对应的端口号
const port = process.env.PORT || 5000;

// 获取局域网ip
const os = require('os'),
  iptable = {},
  ifaces = os.networkInterfaces();
for (const dev in ifaces) {
  ifaces[dev].forEach(function (details) {
    if ((details.family == 'IPv4') && (details.internal == false)) {
      iptable['localIP'] = details.address;
    }
  });
}
const Purl = iptable.localIP

// 监听端口号
app.listen(port, () => {
  // console.log(`Server running on port ${port}`)
  console.log("\n" + `Server running on:`);
  console.log(`- Local:  `, ` \x1b[36m http://${host}:\x1b[1m${port}`);
  console.log(`- Network:`, ` \x1b[36m http://${Purl}:\x1b[1m${port}`);
  //获取本地IP地址

});

//DB config
const db = require("./config/key").mongoURL;

// Connect  to mongodb
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, })
  // .then(() => console.log("MongoDb Connected"))
  .then(() => console.log("\n" + "MongoDb connection succeeded") + "\n")
  .catch(err => console.log(err));