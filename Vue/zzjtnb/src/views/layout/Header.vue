<!-- 公用头部 -->
<template>
  <!-- 主页面标题 -->
  <header class="mui-bar mui-bar-nav">
    <a href="#offCanvasSide" class="mui-icon mui-action-menu mui-icon-bars mui-pull-left" @click="showSlider"></a>
    <a id="offCanvasHide" class="mui-action-back mui-btn mui-btn-link mui-pull-right" @click="closeSlider">关闭</a>
    <h1 class="mui-title">div模式右滑菜单</h1>
  </header>
  <!-- <header class="mui-bar mui-bar-nav">
    <a class="mui-icon mui-action-menu mui-icon-bars mui-pull-left"  @click="showSlider"></a>
    <h1 class="mui-title">标题</h1>
  </header> -->
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
    showSlider () {
      mui('.mui-off-canvas-wrap').offCanvas().toggle();
    },
    closeSlider () {
      if (this.$route.path.indexOf('/') != 0) {
        mui('.mui-off-canvas-wrap').offCanvas().close();
      } else {
        this.$notify({
          group: 'custom-style',
          title: '已经是最后一页！',
          text: `This is notification text!<br>Date: ${new Date()}`,
          duration: 1000,
          closeOnClick: false
        });
        return
      }

    }
  },
  components: {

  },
}
</script>

<style scoped>
</style>