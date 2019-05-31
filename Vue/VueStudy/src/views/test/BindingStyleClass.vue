<!--Vue绑定属性 绑定Html  绑定class  绑定style-->
<template>
  <div>
    <!-- v-bind:class  :class的使用 -->
    <div v-bind:class="{'red':flag}">
      我是一个div
    </div>
    <div v-bind:class="{'red':flag,'blue':!flag}">
      我是另一个div
    </div>
    <!-- 循环数据,第一个数据高亮 -->
    <div>
      <ul>
        <!-- value赋给item,索引赋给kye -->
        <li v-for="(item,key)  in list" :class="{'red':key==0,'blue':key==1}">
          {{key}} {{item}}
        </li>
      </ul>
    </div>
     <!-- v-bind:style  :style的使用 -->
     <!-- 什么时候需要绑定属性?
     数据是从return中得到的时候需要 -->
    <div class="box" :style="{'width':boxWdith+'px'}">
      我是另一个div之外的dev 
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: false,
      list: [
        '111',
        '222',
        '333'
      ],
      boxWdith:500,
    }
  },
  methods: {

  },
  components: {

  },
}
</script>

<style scoped>
.red {
  color: red;
}
.blue {
  color: blue;
}
.box{
  height: 6.25rem /* 100/16 */;
  widows: 6.25rem /* 100/16 */;
  background: red
}
</style>