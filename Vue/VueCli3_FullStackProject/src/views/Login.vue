<!-- 注册页 -->
<template>
  <div class="login">
    <section class="form_container">
      <div class="manage_tip">
        <span class="title"> 争逐集团在线管理系统 </span>
      </div>
      <!-- 注册表单组合 -->
      <el-form :model="loginUser" :rules="rules" ref="loginForm" label-width="60px" class="loginForm">
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="loginUser.email" placeholder="请输入邮箱" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginUser.password" placeholder="请输入密码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          <el-button @click="resetForm('registerForm')">重置</el-button>
        </el-form-item>
        <div class="tiparea">
          <p>还没有账号?现在<router-link to="/register">注册</router-link>
          </p>
        </div>
      </el-form>
    </section>
  </div>
</template>

<script>
"login";
import jwt_decode from 'jwt-decode'
export default {
  data () {
    return {
      loginUser: {
        email: "",
        password: "",
      },
      rules: {
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
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios.post("/api/users/login", this.loginUser).then(res => {

            this.$message({
              message: "登陆成功",
              type: "success"
            });
            // 拿到token
            // console.log(res.data.token)
            const { token } = res.data
            //存储token到localStorage
            localStorage.setItem("token", token)
            this.$router.push("/index");
            //解析token
            const decode = jwt_decode(token)
            // console.log(decode)
            // token存储到vuex中(判断是否授权),传递给actions,mutations接收
            this.$store.dispatch("setIsAutnenticated", !this.isEmpty(decode))
            this.$store.dispatch("setUser", decode)
          });
        } else {
          this.$message({
            message: "请输入正确的资料",
            type: "error"
          });
          // console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    //判断是否为空的方法,如果为空会返回一个true(真)值,反之返回一个false(假)值
    isEmpty (value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  }
};
</script>


<style scoped>
.login {
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
  top: 20%;
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
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit_btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>