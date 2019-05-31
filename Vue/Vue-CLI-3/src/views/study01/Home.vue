<!--  -->
<template>
  <div>
    <!-- 引入Vuex -->
    <div>
      <h1>下面是Vuex示例</h1>
      <Count></Count>
    </div>
    <h1>下面是数组的示例</h1>
    <!-- 循环数组 -->
    <div>
      <!-- v-for--要循环谁就在谁身上 -->
      <ul style="list-style-type:none">
        <!-- item自己定义的变量,这个变量为数组中的每一项(或对象) -->
        <li v-for="(item,index) in fruits" :key="index">
          {{index+1}} .{{item.name}}
          <ul style="list-style-type:none">
            <!-- 第一次是循环了三个对象,第二次拿着上面循环的键值循环 -->
            <li v-for="(color,childIndex) in item.color" :key="childIndex">{{childIndex+1}}.{{color}}</li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- 循环对象 -->
    <div>
      <ul>
        <li v-for="(vale,key) in student" :key>{{key}}:{{vale}}</li>
      </ul>
    </div>
    <!-- v-on===@ -->
    <!-- 如果不传递参数则不要写括号,会自动传入事件源(event),如果写括号要手动传入$event属性 -->
    <div>
      <p @click="fn">点我啊</p>
    </div>
    <!-- 简易to do -->
    <div>
      <h1>简易to do</h1>
      <p>输入后请按Ctrl+回车添加</p>
      <!-- 这里有多种写法 -->
      <!-- <input type="text" @keyup.a="write" v-model="todo"> -->
      <!-- <input type="text" @keyup.enter="write" v-model="todo"> -->
      <p>
        <input type="text" @keyup.ctrl.enter="write" v-model="todo">
      </p>
      <!-- <input type="text" @keydown="write" v-model="todo"> -->
      <ul>
        <li v-for="(item,index) in todoList" :key="index">
          {{item}}---------
          <button @click="deletetodo(index )">X</button>
        </li>
      </ul>
    </div>
    <!-- checkbox -->
    <!-- 如果是复选框,只有一个复选框的时候会把此值转换为boolean类型,如果true代表选中 -->
    <!-- 如果是多个checkbox,要增加value属性,并且数据类型是数组 -->
    <div>
      爬山:
      <input type="checkbox" v-model="checkbox" value="爬山">
      睡觉:
      <input type="checkbox" v-model="checkbox" value="睡觉">
      {{checkbox}}
    </div>
  </div>
</template>

<script>
import Count from '../vuex/Count'
export default {
  data () {
    return {
      fruits: [
        { name: "香蕉", color: ["greed", "yellow"] },
        { name: "苹果", color: ["red", "greed", "yellow"] },
        { name: "橘子", color: ["pink"] }
      ],
      student: { name: '波多老师', age: '18', sex: 'girl' },
      todoList: [],
      todo: '',
      // cleartodo: ""
      checkbox: [],
      products: []

    };
  },
  // 创建完成时
  created () {
    this.show()
  },
  // 挂载完成时
  mounted () {

  },
  methods: {
    fn () {
      alert('韩梅梅')
    },
    write (event) {
      if (event.keyCode === 13) {
        this.todoList.unshift(this.todo)
        // 清空输入框内容
        // this.todo = this.cleartodo
        this.todo = ''
      } else {
        console.log("输入后请按Ctrl+回车添加")
      }
    },
    deletetodo (value) {
      this.todoList = this.todoList.filter(
        (item, index) => index !== value

      )
    },
    show () {
      this.$http.get('/public/json/moke.json')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  components: {
    Count
  }
};
</script>

<style scoped>
li {
  color: #42b983;
}
</style>
