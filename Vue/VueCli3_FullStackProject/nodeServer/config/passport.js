
const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require("mongoose")
// 下面的users是'models/User.js'中module.exports = User = mongoose.model("users", UserSchema)的"users"
const User = mongoose.model("users")
const keys = require("../config/key")

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
// 下面的passport就是server.js传过来的passport
module.exports = passport => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    console.log(jwt_payload)
    // 根据id值查询返回对应的用户
    User.findById(jwt_payload.id)
      // 返回对应的用户
      .then(user => {
        // 判断当前用户是否存在
        if (user) {
          // 如果存在返回当前用户
          return done(null, user);
        }
        return done(nall, false)
      })
      .catch(err => console.log(err))
  }));
}