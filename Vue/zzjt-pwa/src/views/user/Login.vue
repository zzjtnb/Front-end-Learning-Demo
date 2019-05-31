<!--  -->
<template>
  <div>
    <!-- Using components -->
    <b-input-group prepend="Token">
      <b-form-input v-model.trim="name"></b-form-input>
      <b-input-group-append>
        <b-btn variant="outline-success">Button</b-btn>
        <b-btn variant="info" @click="onSubmit">点击登录</b-btn>
      </b-input-group-append>
    </b-input-group>
    <p> {{name}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    onSubmit () {
      this.$axios.get('/api/user?access_token=' + this.name)
        //用箭头函数就不会存在this指向问题
        .then((res) => {
          if (!res) {
            return;
          }
          if (res.status === 200) {
            alert('登陆成功')
          }
          console.log(res)
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  },
  computed: {
    state () {
      return this.name.length >= 4 ? true : false
    },
    invalidFeedback () {
      if (this.name.length > 4) {
        return ''
      } else if (this.name.length > 0) {
        return 'Enter at least 4 characters'
      } else {
        return '请输入内容'
      }
    },
    validFeedback () {
      return this.state === true ? 'Thank you' : ''
    }
  },
  components: {

  },
}
</script>

<style scoped>
</style>