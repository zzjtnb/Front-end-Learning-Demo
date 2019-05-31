<!--侧滑菜单部分-->
<template>
  <!-- 菜单容器 -->
  <aside id="offCanvasSide" class="mui-off-canvas-left">
    <div id="offCanvasSideScroll" class="mui-scroll-wrapper">
      <!-- 菜单具体展示内容 -->
      <div class="mui-scroll">
        <!-- 菜单具体展示内容 -->
        <ul class="mui-table-view mui-table-view-chevron mui-table-view-inverted">
          <li class="mui-table-view-cell">
            <a class="mui-navigate-right" href="#/login">
              登录
            </a>
          </li>
          <li class="mui-table-view-cell">
            <a class="mui-navigate-right" href="/">
              首页
            </a>
          </li>
          <li class="mui-table-view-cell" >
            <a class="mui-navigate-right" href="2">
              Item 2
            </a>
          </li>
          <li class="mui-table-view-cell">
            <a class="mui-navigate-right" href="3">
              Item 3
            </a>
          </li>
          <li class="mui-table-view-cell">
            <a class="mui-navigate-right" href="4">
              Item 4
            </a>
          </li>
          <li class="mui-table-view-cell">
            <a class="mui-navigate-right">
              Item 5
            </a>
          </li>
          <li class="mui-table-view-cell">
            <a class="mui-navigate-right">
              Item 6
            </a>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>
<script>
export default {
  mounted () {
    // mui('.class="mui-table-view-cell').on('tap', "a", function (e) {
    //   e.stopPropagation();
    //   mui('.mui-off-canvas-wrap').offCanvas().toggle();
    // });

    // mui('#offCanvasSide').on('tap', 'li', function () {
    //   //this上下文就是li
    //   var a = this.querySelector('a');
    //   // console.log(a)
    //   // mui('.mui-off-canvas-wrap').offCanvas().toggle();
    // });

    //侧滑菜单界面支持区域滚动；
    mui('#offCanvasSideScroll').scroll();
  },
  methods: {

  },
}
</script>
<style scoped>
</style>
