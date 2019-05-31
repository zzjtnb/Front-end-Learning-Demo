<!--  -->
<template>
  <div>
    <div v-html="blog.content" class="markdown-body" style="padding-top: 20px"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blog: {
        id: '',
        title: '',
        content: '',
        description: ''
      },
    }
  },
  mounted () {
    this.getBlog()


  },
  methods: {
    getBlog () {

      this.blog.id = this.$route.params.id
      this.$axios.get('/api/gists/' + this.blog.id, {

        headers: { "Accept": "application/vnd.github.v3.html" }
      })
        //用箭头函数就不会存在this指向问题
        .then((res) => {
          let result = res.data
          for (let key in result.files) {
            this.blog['title'] = key
            this.blog['content'] = result.files[key]['content']
            this.blog['description'] = result['description']
            // console.log(JSON.stringify(this.blog))
            break
          }

        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
  components: {

  },
}
</script>

<style scoped>
</style>