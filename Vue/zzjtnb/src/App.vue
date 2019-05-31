<template>
  <div id="app">
    <!-- 布局 -->
    <!-- 缩放式侧滑（类手机QQ） -->
    <!-- 侧滑导航根容器 -->
    <div class="mui-off-canvas-wrap mui-draggable mui-scalable">
      <!-- 菜单容器 -->
      <Sidebar></Sidebar>
      <!-- 主页面容器 -->
      <div class="mui-inner-wrap mui-transitioning">
        <!-- 主页面标题 -->
        <Header></Header>
        <div class="mui-content mui-scroll-wrapper" id="offCanvasContentScroll">
          <div class="mui-scroll">
            <!-- 主界面具体展示内容 -->
            <router-view />
          </div>
        </div>
        <Footer></Footer>
        <div class="mui-off-canvas-backdrop"></div>
      </div>
    </div>
    <!-- 全局消息提示 -->
    <div style="padding-top: 20px">
      <notifications group="custom-style" position="top center" classes="n-light" :max="3" width=100% />
    </div>
  </div>
</template>
<script>

import Sidebar from '@/views/layout/Sidebar'
import Header from '@/views/layout/Header'
import Footer from '@/views/layout/Footer'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'githubUsername',
      'htmlTitle'
    ])
  },
  components: {
    Sidebar,
    Header,
    Footer,
  },
  created () {
    this.$store.dispatch("Init")
    this.$store.dispatch("GetInfo")
    this.$setTitle(this.$route.meta.title)
    let windowSize = this.$util.getWindowSize()
    let pathArr = this.$route.path.split("/")
    if (pathArr[1] == "user" && windowSize.height > windowSize.width * 1.2) {
      this.$router.push("/mobile/user/blog")
    }
    if (pathArr[1] == "mobile" && windowSize.height <= windowSize.width * 1.2) {
      this.$router.push("/")
    }
  },
  mounted () {
    //侧滑导航中增加一个标签的点击事件引起自动收缩
    document.querySelector('.mui-table-view-cell').addEventListener('tap', function () {
      console.log(document.querySelector('.mui-table-view-cell'))
      mui('.mui-off-canvas-wrap').offCanvas().toggle();
    })
    //主界面支持区域滚动；
    mui('#offCanvasContentScroll').scroll();
    //实现ios平台原生侧滑关闭页面；
    if (mui.os.plus && mui.os.ios) {
      mui.plusReady(function () { //5+ iOS暂时无法屏蔽popGesture时传递touch事件，故该demo直接屏蔽popGesture功能
        plus.webview.currentWebview().setStyle({
          'popGesture': 'none'
        });
      });
    }
  },
  methods: {
  },
}
</script>
<style>
* {
  touch-action: pan-y;
}
html,
body,
#app {
  height: 100%;
  width: 100%;
}
.n-light {
  margin: 10px;
  margin-bottom: 0;
  border-radius: 3px;
  font-size: 13px;
  padding: 10px 20px;
  color: #495061;
  background: #eaf4fe;
  border: 1px solid #d4e8fd;
}
.notification-title {
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 10px;
  color: #2589f3;
}
</style>
