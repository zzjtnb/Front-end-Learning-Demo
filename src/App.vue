<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode'
export default {
  name: "app",
  created () {
    if (localStorage.token) {
      const decode = jwt_decode(localStorage.token)
      // token存储到vuex中(判断是否授权),传递给actions,mutations接收
      this.$store.dispatch("setAuthenticated", !this.isEmpty(decode))
      this.$store.dispatch("setUser", decode)
    }
  },
  methods: {
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


<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}

.el-loading {
  position: absolute;
  z-index: 2000;
  background-color: rgba(255, 255, 255, 0.7);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.el-loading-spinner {
  top: 50%;
  margin-top: -21px;
  width: 100%;
  text-align: center;
  position: absolute;
}
</style>
