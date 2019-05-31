<!--  -->
<template>
  <div>
    <div style="width:100%;height:100%">
      <b-card-group deck class="mb-3">
        <router-link :to="`/details/${item.id}`" v-for="(item,k) in blogs" style="width:100%;height:100%">
          <b-card :bg-variant="item.color" text-variant="white" :header='item.title' class="text-center">
            <p class="card-text">{{item.description}}</p>
            <b-img slot="aside" blank width="64" alt="placeholder" />
            <p> {{item.createTime}}</p>
            <p> {{item.updateTime}}</p>
            <p> {{item.id}}</p>
            <div v-html="item.html_url" class="markdown-body" style="padding: 10px">{{item.html_url}}</div>
          </b-card>
        </router-link>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blogs: [],
      color: ["primary", "secondary", "success", "info", "warning", "danger", "dark"]
    }
  },
  mounted () {
    this.getBlog()
  },
  methods: {
    getBlog () {
      this.blogs = []
      this.$axios.get('/api/users/zzjtnb/gists', {
        // headers: { "Accept": "application/vnd.github.v3.html" }
        params: {
          "Authorization": "token OAUTH-TOKEN"
        },
      })
        //用箭头函数就不会存在this指向问题
        .then((res) => {
          /*if (!res) {
            return;
          }
          if (res.status === 200) {
            // console.log(this.blogs)
          }*/

          let result = res.data
          let index = -1;
          for (let i = 0; i < result.length; i++) {
            for (let key in result[i].files) {
              index++;
              let data = {}
              if (index && index % 7 === 0) {
                index = 0;
              }
              data.color = this.color[index];
              data['title'] = key
              data['url'] = result[i].files[key]
              data['description'] = result[i]['description']
              data['id'] = result[i]['id']
              data['createTime'] = result[i]['created_at']
              data['updateTime'] = result[i]['updated_at']
              data['html_url'] = result[i]['html_url']
              data['hide'] = false
              var blogs = this.blogs
              blogs.push(data)

              break
            }
          }
          console.log(1)
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
.card-deck,
.mb-3 {
  /* width: 280px;
  height: 234px;
  float: left;
  padding: 2px; */
}
.card-text {
  /* height: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden; */
}
</style>