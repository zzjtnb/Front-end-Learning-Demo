/* 定义登录信息的models */
//引入mongose,把数据存入到mongoose里面
const mongoose = require('mongoose');
// 实例化一个Schema
const Schema = mongoose.Schema;
//Create Schema(创建Schema)
const UserSchema = new Schema({
  /*   需要什么写什么, 比如需要neme
    name: {
      type: String,
      required: true
    },
     */
  //required:true必须要填写的信息
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  //头像
  avatar: {
    type: String,
    required: true
  },
  //身份
  identity: {
    type: String,
  },
  time: {
    type: Date,
    default: Date.now
  },

})
module.exports = User = mongoose.model("users", UserSchema)