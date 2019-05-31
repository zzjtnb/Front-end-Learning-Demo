<template>
  <div>
    <editor-window title="Hello World!" :shadow=true theme="dark" width="100%" height="100%">
    </editor-window>
    jfjdaslfjojofdjifaidjas
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/views/layout/Sidebar'
import Header from '@/views/layout/Header'
import { EditorWindow, BrowserWindow } from 'vue-windows'
import store from "../store/index";
export default {
  name: 'home',
  components: {
    EditorWindow,
    BrowserWindow,
    Sidebar,
    Header,
  },
  created () {
    this.$notify('dfadsfdsfdasfdsafdsfasdfas')
  },


}
</script>
<!-- Don't forget the CSS! -->
<style src="vue-windows/dist/vue-windows.css"></style>

