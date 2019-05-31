<!-- Vue 及双向数据绑定 Vue事件介绍 以及Vue中的ref获取dom节点 -->
<template>
  <div>
    <h1>{{msg}}</h1>
    <input type="text" v-model="msg" />
    <button v-on:click="getMsg()">获取表单里面的数据get</button>
    <button v-on:click="setMsg()">设置表单里面的数据set</button>
    <hr>
    <input type="text" ref="userinfo" />
    <!-- ref主要用来获取DOM节点 -->
    <button v-on:click="getInputValvue()">获取第二个表单里面的数据</button>
    <br>
    <div ref="box">我是一个box</div>
  </div>
</template>

<script>
/** 
 *双向数据绑定  MVVM vue就是一个MVVM的框架.
 *M     model 
 *v     view 
 *MVVM: model改变会印象视图view.view视图改变反过来会影响model
 *双向数据绑定必须在表单里面使用
 */
export default {
  data () {
    return {
      msg: 'Hello Vue'
    }
  },
  // 所有的方法都放在methods中
  methods: {/* 放自定义方法的地方 */
    getMsg () {
      //alert("Vue方法执行了")
      /* 方法里面获取data里面的数据 */
      alert(this.msg)
    },
    setMsg () {
      this.msg = "我是改变后的数据"
    },
    getInputValvue () {
      console.log(this.$refs.userinfo);//获取DOM节点
      alert(this.$refs.userinfo.value)
      this.$refs.box.style.background='red'
    }
  },
  components: {

  },
}
</script>

<style scoped>
</style>