<template>
  <div id="app">
    <router-view />
  </div>
</template>

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
