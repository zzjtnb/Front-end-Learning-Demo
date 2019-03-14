<!-- 注冊頁 -->
<template>
  <div class="register">
    <section class="form_container">
      <div class="manage_tip">
        <span class="title"> 爭逐集團在綫管理系統 </span>
        <!-- 注冊表單組合 -->
        <el-form :model="registerUser" :rules="rules" ref="registerForm" label-width="80px" class="registerForm">
          <el-form-item label="用戶名" prop="name">
            <el-input v-model="registerUser.name" placeholder="請輸入用戶名" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="郵箱" prop="email">
            <el-input v-model="registerUser.email" placeholder="請輸入郵箱" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密碼" prop="pass">
            <el-input type="password" v-model="registerUser.pass" placeholder="請輸入密碼" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="確認密碼" prop="checkPass">
            <el-input type="password" v-model="registerUser.checkPass" placeholder="請確認密碼" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="角色" prop="age">
            <el-select v-model="registerUser.identity" placeholder="請選擇角色">
              <el-option label="管理員" value="manager"></el-option>
              <el-option label="員工" value="employee"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
            <el-button @click="resetForm('registerForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </section>
  </div>
</template>

<script>
"register";
export default {
  data () {
    var checkPass = (rule, value, callback) => {
      if (value !== this.registerUser.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerUser: {
        name: "",
        email: "",
        pass: "",
        checkPass: "",
        identity: ""
      },
      rules: {
        name: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 2, max: 30, message: "长度在 2 到 30 个字符", trigger: "blur" }
        ],
        email: [
          {
            type: "email",
            required: true,
            message: "邮箱格式不正确",
            trigger: "blur"
          }
        ],
        pass: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 30, message: "长度在 6 到 30 个字符", trigger: "blur" }
        ],
        checkPass: [
          { required: true, message: "请确认密码", trigger: "blur" },
          { validator: checkPass, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.register {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('../assets/images/bg.jpg') no-repeat center center;
  background-size: 100% 100%;
}
.form_container {
  width: 370px;
  height: 210px;
  position: absolute;
  top: 10%;
  left: 34%;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
}
.form_container .manage_tip .title {
  font-family: 'Microsoft YaHei';
  font-weight: bold;
  font-size: 26px;
  color: #fff;
}
.registerForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}
</style>
