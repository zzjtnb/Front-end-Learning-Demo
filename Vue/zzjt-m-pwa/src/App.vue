<template>
  <div id="app">
    <video-bg :sources="['/video/night.mp4']" img="/img/common/background/bg2.jpg">
      <!-- If you want to add content here, a slot is waiting! -->
      <router-view />
    </video-bg>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  </div>
</template>
<script>
import '../public/css/common.css'
export default {
  
}
</script>

<style >
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(255, 255, 255, 0.49);
  height: 100%;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
} */
html,
body {
  width: 100%;
  height: 100%;
}
body {
  /* 加载背景图 */
  background: url('../public/img/common/background/bg1.jpg') !important;

  /* 背景图垂直、水平均居中 */
  background-position: center center;

  /* 背景图不平铺 */
  background-repeat: no-repeat;

  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-attachment: fixed;

  /* 让背景图基于容器大小伸缩 */
  background-size: cover;

  /* 设置背景颜色，背景图加载过程中会显示背景色 */
  background-color: #464646;
  /* 当内容的高度大于viewport的高度时，会出现滚动条。我们希望背景图始终相对于viewport固定，即使用户滚动时也是一样。*/
  background-attachment: fixed;
}
@media only screen and (max-width: 767px) {
  body {
    background: url('../public/img/common/background/bg1.jpg') !important;
  }
}
</style>
