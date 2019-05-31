<!--绑定数据 绑定对象 循环数组渲染数据-->
<template>
  <div>
    <h1>Hello{{ msg }}</h1>
    <br>
    <!-- 对象 -->
    <p>{{obj.name}}</p>
    <p>{{this.obj}}</p>
    <!-- 循环数组 -->
    <p>
      <ul>
        <li v-for="item in list">
          {{item}}
        </li>
      </ul>
    </p>
    <!-- 数组中的对象 -->
    <p>
      <ul>
        <li v-for="item  in list1">
          {{item.title}}
        </li>
      </ul>
    </p>
    <!-- 数组中有对象,对象中有数组 ,数组中有对象 -->
    <p>
      <ul>
        <li v-for="item  in list2">
          {{item.cata}}
          <ol>
            <li v-for="news in item.list">
              {{news.title}}
            </li>
          </ol>
        </li>
      </ul>
    </p>
    <!-- v-bind可以缩写为: -->
    <div v-bind:title="title">
      <p>鼠标放上去瞄一下</p>
      </hr>
      <!-- 绑定属性 -->
      <img :src="url" alt="代码" style="width:50%;height:10%">
      <br>
      <!-- 绑定html -->
      <div v-html="p">
      </div>
      <!-- 绑定数据的另一种方法 -->
      <div v-text="title">
      </div>
    </div>
    以上是绑定属性和绑定数据
  </div>
</template>

<script>
export default {
  data () {//业务逻辑里面定义的数据
    return {
      msg: " World",
      obj: {
        name: "小明",
        age: 21
      },
      //数组
      list: [
        '111',
        '222',
        '333'
      ],
      // 数组里面的对象
      list1: [
        { 'title': 'one' },
        { 'title': 'two' },
        { 'title': 'three' },
      ],
      // 数组中有对象,对象中有数组 ,数组中有对象
      list2: [
        {
          "cata": "国内新闻",
          list: [
            {
              'title': '重大新闻',
              'title': '争逐集团'
            }
          ]
        },
        {
          "cata": "国际新闻",
          list: [
            {
              'title': '制造东段',
              'title': '哈哈哈哈'
            }
          ]
        },
      ],
      title: '我是一个title',
      url: 'http://www.gaoimg.com/uploads/allimg/170206/1-1F206191230329.jpg',
      p: '<p style="color:red">love you forever</p>'
    }
  },
  methods: {

  },
  components: {

  },
}
</script>

<style scoped>
</style>