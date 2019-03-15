<!-- 注册页 -->
<template>
  <div class="register">
    <section class="form_container">
      <div class="manage_tip">
        <span class="title"> 争逐集团在线管理系统 </span>
        <!-- 注册表单组合 -->
        <el-form :model="registerUser" :rules="rules" ref="registerForm" label-width="80px" class="registerForm">
          <el-form-item label="用戶名" prop="name">
            <el-input v-model="registerUser.name" placeholder="请输入用户名" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="registerUser.email" placeholder="请输入邮箱" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="registerUser.password" placeholder="请输入密码" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="registerUser.checkPass" placeholder="请确认密码" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="身份" prop="age">
            <el-select v-model="registerUser.identity" placeholder="请选择身份">
              <el-option label="管理员" value="manager"></el-option>
              <el-option label="员工" value="employee"></el-option>
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
      if (value !== this.registerUser.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerUser: {
        name: "",
        email: "",
        password: "",
        // checkPass: "",
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
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 3, max: 30, message: "长度在 3 到 30 个字符", trigger: "blur" }
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
          this.$axios.post("/api/users/register", this.registerUser)
            .then(res => {
              // 注册成功
              this.$message({
                message: "注册成功！",
                type: "success"
              });
              this.$router.push("/login");
            });
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
