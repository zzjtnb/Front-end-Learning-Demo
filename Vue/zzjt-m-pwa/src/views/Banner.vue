<!--
插件网址:
https://blog.shanamaid.top/vue-image-scroll/example/
-->
<template>
  <div>
    <slider v-bind="setting" />
  </div>
</template>

<script>
import slider from 'vue-image-scroll';

 export default {
  components: {
    slider
  },
    data: function() {
      return {
       setting: {
         //滚动框样式 宽度默认750px 高度默认250px 其余样式小驼峰命名
          styleObject: {
            width: '550',
            height: '250',
            backgroundColor: 'rgba(0,225,226,0.2)',
            borderRadius: '20px'
          },
          //图片数组
          image: [
            {
              src: '/img/banner/1-1.jpg',
              tagName: '我是标签1',  //标签内容
              tagStyle: {           //标签样式
                backgroundColor: 'blue',  
              }
            },
            {
              src: '/img/banner/1-2.jpg',
              tagName: '我是标签2',
              tagStyle: {
                backgroundColor: 'greeen',
                color: 'black',
                fontSize: '20px'
              }
            },
            {
              src: '/img/banner/1-3.jpg',
              tagName: '我是标签2'
            },
            {
              src: '/img/banner/1-4.jpg',
              tagName: '我是标签4'
            },
            {
              src: '/img/banner/1-5.jpg',
              tagName: '我是标签5'
            },
          ],
          //滚动间隔,单位ms,默认2000
          interval: 5000,
          //图片样式，宽度和高度不可设置，样式名字小驼峰命名
          imgStyle: {
            borderRadius: '20px'
          },
          //自动滚动
          autoRoll: true,
          //滚动方向, left or right
          direction: 'left'
          }
        }
      }
    }
    </script>
    <style>
</style>
    