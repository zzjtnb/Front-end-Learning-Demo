// @ login && register
const express = require("express");
const router = express.Router();
const passport = require("passport");

// 引入模型
const Profile = require("../../models/Profile");

/* 
@route GET api/profiles /test
@desc  返回请求的json数据
@access Public  注:公开的还是私有的接口(接口类型) 
*/
/* 
// 测试接口
router.get("/test", (req, res) => {
  res.json({ msg: "Profile Works" })
})
 */

/* 
@route POST api/profiles/add
@desc  创建信息接口
@access Private  注:公开的还是私有的接口(接口类型) 
*/
router.post("/add", passport.authenticate("jwt", { session: false }), (req, res) => {
  const ProfileFields = {}
  if (req.body.type) ProfileFields.type = req.body.type
  if (req.body.describe) ProfileFields.describe = req.body.describe
  if (req.body.income) ProfileFields.income = req.body.income
  if (req.body.expend) ProfileFields.expend = req.body.expend
  if (req.body.cash) ProfileFields.cash = req.body.cash
  if (req.body.remark) ProfileFields.remark = req.body.remark

  new Profile(ProfileFields).save().then(profile => {
    res.json(profile)
  })
})

/* 
@route GET api/profiles
@desc  获取所有信息
@access Private  注:公开的还是私有的接口(接口类型) 
*/
router.get("/", passport.authenticate("jwt", { session: false }), (req, res) => {
  Profile.find()
    .then(profile => {
      if (!profile) {
        return res.status(404).json("没有任何内容")
      }
      res.json(profile)
    }).catch(err => res.status(404).json(err));

})

/* 
@route GET api/profiles/:id
@desc  获取单个信息
@access Private  注:公开的还是私有的接口(接口类型) 
*/
router.get("/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
  Profile.findOne({ _id: req.params.id })
    .then(profile => {
      if (!profile) {
        return res.status(404).json("没有任何内容")
      }
      res.json(profile)
    }).catch(err => res.status(404).json(err));

})

/* 
@route POST api/profiles/edit
@desc  编辑信息接口
@access Private  注:公开的还是私有的接口(接口类型) 
*/
router.post("/edit/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
  const ProfileFields = {}
  if (req.body.type) ProfileFields.type = req.body.type
  if (req.body.describe) ProfileFields.describe = req.body.describe
  if (req.body.income) ProfileFields.income = req.body.income
  if (req.body.expend) ProfileFields.expend = req.body.expend
  if (req.body.cash) ProfileFields.cash = req.body.cash
  if (req.body.remark) ProfileFields.remark = req.body.remark

  Profile.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: ProfileFields },
    { new: true }
  ).then(profile => res.json(profile))
})

/* 
@route POST api/profiles/delete
@desc  删除信息接口
@access Private  注:公开的还是私有的接口(接口类型) 
*/
router.delete("/delete/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
  const ProfileFields = {}
  if (req.body.type) ProfileFields.type = req.body.type
  if (req.body.describe) ProfileFields.describe = req.body.describe
  if (req.body.income) ProfileFields.income = req.body.income
  if (req.body.expend) ProfileFields.expend = req.body.expend
  if (req.body.cash) ProfileFields.cash = req.body.cash
  if (req.body.remark) ProfileFields.remark = req.body.remark
  console.log(req.params.id + "------------请求ID")
  Profile.findOneAndRemove({ _id: req.params.id }).then(profile => {
    console.log(profile + "-------------得到的profile")
    profile.save().then(profile => res.json(profile))
  })
    // .catch(err => res.json(err))
    .catch(err => res.status(404).json("删除失败"))
})

module.exports = router;