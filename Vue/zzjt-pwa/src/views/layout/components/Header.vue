<!--  -->
<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="Teal">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">争逐集团</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="/home">首页</b-nav-item>
          <b-nav-item href="/blog">博客</b-nav-item>
          <b-nav-item href="/discuss">交流</b-nav-item>
          <b-nav-item href="/video">视频</b-nav-item>
          <b-nav-item href="/music">音乐</b-nav-item>
          <b-nav-item href="/wallpaper">壁纸</b-nav-item>
          <b-nav-item href="#" disabled>测试</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">搜索</b-button>
          </b-nav-form>
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>用户</em>
            </template>
            <b-dropdown-item href="/login">登录</b-dropdown-item>
            <b-dropdown-item href="">注册</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="语言" right>
            <b-dropdown-item href="#">中文</b-dropdown-item>
            <b-dropdown-item href="#">英文</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  components: {

  },
}
</script>

<style scoped>
</style>