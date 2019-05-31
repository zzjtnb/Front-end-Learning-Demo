<!-- 
Vuex
  state:访问状态对象
  mutations:修改状态
 -->
<template>
  <div>
    <h1>{{msg}}</h1>
    <div style="color: red;">
      <hr>
    </div>
    <div style="color: red;">
      <!-- 第一种写法-->
      <!-- <p>{{$store.state.h}}</p> -->
      <!-- 第二种写法 -->
      <!-- <p>{{h}}</p> -->
      <p>{{a}}</p>
      <!-- 第三种写法 -->
      <input type="text" value="">
      <!-- $store.commit()固定写法,需要提交 -->
      <!--
       <button @click="$store.commit('add',10)">++</button>
       <button @click="$store.commit('reduce',20)">--</button>
      -->
      <!-- 第五种写法 -->
      <!-- <button @click="add(1)">++</button>
      <button @click="reduce(1)">--</button> -->
      <!-- 第六种写法 -->
      <button @click="add(20)">++</button>
      <button @click="reduce(10)">--</button>
      <!-- 第七种写法 -->
      <button @click="addAction()">++</button>
      <button @click="reduceAction()">--</button>
    </div>
  </div>
</template>

<script>
import store from "../../vuex/store";
import { mapState, mapMutations,mapGetters, mapActions } from "vuex";
export default {
  data () {
    return {
      msg: 'Hello Vuex',
    }
  },
  created () {
    console.log(this.$store.state.h);
  },
  /*   
  // 第二种写法
    // computed: {
    //   h () {
    //     return this.$store.state.h
    //   }
    // },
  */

  /*  
   // 第三种写法
    // computed: mapState({
    //   //hjhj相当于一个变量,名字随便写
    //   hjhj: state => state.h
    //   hjhj:function (state) {
    //   return state.h
    // }
    // }),
  */
  // 第四种写法
  // computed: mapState(['h']),
  //第五种写法
  //methods: mapMutations(['add', 'reduce']),
  //第七种写法
  methods: {
     ...mapMutations(['add', 'reduce']),
     ...mapActions(['addAction','reduceAction'])
  },
  //第六种写法
  computed:{
    // 这三个都是映射,(['h']),h是自定义的方法名
    // ...mapState(['h']),
    ...mapState({
      'a':state=>state.h
    }),

    // h1(){
    //   this.$store.getters.h
    // }
    ...mapGetters(['h'])
  }

}
</script>

<style scoped>
</style>