<!--  -->
<template>
  <div>
    <!-- 
      注意事项:任何绑定的请求本地项目中的静态路径例如public不能包含该路径名称
      错误示例:
        <img :src="`../../public/images/wallpaper/`+item + `.jpg`" alt="" srcset="">
      -->
    <div>
      <b-row>
        <b-col v-for="item in imageList">
          <!-- <b-img-lazy :src="`https://raw.githubusercontent.com/zzjtnb/Resource/master/images/wallpaper/`+item + `.jpg`" center thumbnail  fluid  blank-color="#bbb" alt="img" class="p-4 bg-dark" v-for="item in imageList" /> -->
          <!-- <b-img thumbnail fluid :src="`https://raw.githubusercontent.com/zzjtnb/Resource/master/images/wallpaper/`+item + `.jpg`" alt="Thumbnail"/> -->
          <b-img-lazy :src="`https://raw.githubusercontent.com/zzjtnb/Resource/master/images/wallpaper/`+item + `.jpg`" width="600" height="400" blank-color="#bbb" alt="img" class="my-5" />
        </b-col>
      </b-row>
      <!-- <p>{{item}}</p>
      <img :src="`/images/wallpaper/`+item + `.jpg`"> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imageList: []
    }
  },
  mounted () {
    this.getImg()
    this.getImg1()
  },
  methods: {
    getImg () {
      this.$axios.get('/api/users/zzjtnb')
        // 这个有this指向问题, 需要定义一个变量来接收this
        // 例如:let _this=this
        .then(function (res) {
          // console.log('都已经拿到Github数据了');
          console.log(res);
          // _this.xxx=res
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    getImg1 () {
      this.$axios.get('/json/images/wallpaper.json')
        //用箭头函数就不会存在this指向问题
        .then((res) => {
          // console.log(res)
          this.imageList = res.data.src
          // console.log(this.imageList)
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  },
  components: {

  },
}
</script>

<style scoped>
</style>