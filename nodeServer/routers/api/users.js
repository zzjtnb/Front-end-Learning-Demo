// @ login && register
const express = require("express");
const router = express.Router();
// 哪里需要就在那里引入bcrypt
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const gravatar = require("gravatar");
const passport = require("passport");
const keys = require("../../config/key");

// 引入模型
const User = require("../../models/User");

/* 
@route GET api/users/test
@desc  返回请求的json数据
@access Public  注:公开的还是私有的接口(接口类型) 
*/

router.get("/test", (req, res) => {
  res.json({ msg: "Login Works" })
})

/* 
@route POST api/users/register
@desc  返回请求的json数据
@access Public  注:公开的还是私有的接口(接口类型) 
*/
router.post("/register", (req, res) => {
  // console.log(req.body);
  //查询数据库中是否拥有邮箱
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        // return res.status(400).json({ email: "该邮箱已被占用" })
        return res.status(400).json('该邮箱已被占用')
      } else {
        const avatar = gravatar.url('req.body.email', { s: '200', r: 'pg', d: 'mm' });
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password,
          identity: req.body.identity
        })

        //加密
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            // Store hash in your password DB.
            if (err) throw err;

            newUser.password = hash;

            newUser.save()

              .then(user => res.json(user))

              .catch(err => console.log(err));
          });
        });
      }
    })
})

/*  
@route POST api/users/login
@desc  返回token jwt passport
@access Public  注:公开的还是私有的接口(接口类型) 
*/
router.post("/login", (req, res) => {
  // 得到当前的Email和password
  const email = req.body.email;
  const password = req.body.password;
  // 查询数据库
  //es6两个东西一样的话写一个就可以了
  User.findOne({ email })
    .then(user => {
      if (!user) {
        // return res.status(404).json({ email: "该用户不存在！" })
        return res.status(404).json('该用户不存在！')
      }
      //密码匹配
      // Load hash from your password DB.
      bcrypt.compare(password, user.password)
        //peomise的方式
        .then(isMatch => {
          if (isMatch) {
            const rule = {
              id: user.id,
              name: user.name,
              avatar: user.avatar,
              identity: user.identity
            }
            // jwt.sign("规则", "加密名字", "过期时间", "箭头函数")
            jwt.sign(rule, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
              if (err) throw err;
              res.json({
                success: true,
                token: "Bearer " + token
              });
            })
            // res.json({ msg: "success" });
          } else {
            // return res.status(400).json({ password: "密码错误" });
            return res.status(400).json('密码错误');
          }
        })
    })
})

/*  
@route GET api/users/current
@desc  return current user
@access private 
*/

// 发起请求用router
// router.get("/current", "验证token", (req, res) => {
router.get("/current", passport.authenticate("jwt", { session: false }), (req, res) => {
  // res.json({ msg: "请求成功" })
  // res.json(req.user)
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
    identity: req.user.identity
  })
})

module.exports = router;