/* 定义展示数据的模型 */
//引入mongose,把数据存入到mongoose里面
const mongoose = require('mongoose');
// 实例化一个Schema
const Schema = mongoose.Schema;
//Create Schema(创建Schema)
const ProfileSchema = new Schema({
  /*   需要什么写什么*/
  // 类型
  type: {
    type: String,

  },
  // 描述
  describe: {
    type: String,
  },
  //收入
  income: {
    type: String,
    required: true
  },
  // 支出
  expend: {
    type: String,
    required: true
  },
  //现金
  cash: {
    type: String,
    required: true
  },
  //备注
  remark: {
    type: String,
  },
  time: {
    type: Date,
    default: Date.now
  },

})
module.exports = Profile = mongoose.model("profile", ProfileSchema)