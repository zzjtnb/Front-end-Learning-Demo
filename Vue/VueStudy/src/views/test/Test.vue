<!-- 练习文档入口 -->
<template>
  <div>
    <h1>数据绑定数据渲染</h1>
    <i-data/>
    <h2>绑定style和class</h2>
    <a href="https://vuejs.bootcss.com/v2/guide/class-and-style.html" target="_blank">Class 与 Style 绑定官方文档</a>
    <i-binding/>
    <i-event/>

  </div>
</template>

<script>
import Data from '@/views/test/Data'
import Binding from '@/views/test/BindingStyleClass'
import Event from '@/views/test/Event'
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    'i-data': Data,
    'i-binding': Binding,
    'i-event': Event,
  },
}
</script>

<style scoped>
</style>