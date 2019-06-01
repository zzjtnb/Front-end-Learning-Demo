<template>
  <div id="app">
    <!-- 所有的组件都要被一个根节点（div）包围起来 -->
    <!--  <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/*
  a:link，定义正常链接的样式；
  a:visited，定义已访问过链接的样式；
  a:hover，定义鼠标悬浮在链接上时的样式；
  a:active，定义鼠标点击链接时的样式。
*/
/* hover表示鼠标指示时, 链接文字背景色为yellow;前景色为black */
a:hover {
  background-color: rgb(13, 211, 185);
  color: black;
}
/* link表示未被访问时,链接颜色为蓝色,链接无下划线. */
a:link {
  color: rgb(0, 47, 255);
  text-decoration: none;
}
/* visited表示被访问后,链接颜色为灰色,链接无下划线. */
a:visited {
  color: gray;
  text-decoration: none;
}
/* active表示鼠标点击时,链接颜色为绿色,链接无下划线. */
a:active {
  color: green;
  text-decoration: none;
}
</style>
