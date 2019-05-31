<!--  -->
<template>
  <div>
    <aplayer autoplay theme="pic" shuffle repeat="list" show-lrc :muted.sync="muted" :volume.sync="volume" :music='list3[0]' :list='list3' />
  </div>
</template>
<script>
import Aplayer from 'vue-aplayer'
import VueAPlayer from 'vue-aplayer'
VueAPlayer.disableVersionBadge = true
export default {

  components: {
    Aplayer,
  },
  data () {
    return {

      volume: 1,
      muted: false,
      music3: null,
      list3: [
        {
          title: '前前前世',
          artist: 'RADWIMPS',
          src: 'https://raw.githubusercontent.com/zzjtnb/Resource/master/music/%E8%8E%AB%E6%96%AF%E7%A7%91%E9%83%8A%E5%A4%96%E7%9A%84%E6%99%9A%E4%B8%8A-%E9%92%A2%E7%90%B4%E7%8B%AC%E5%A5%8F.mp3',
          pic: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.jpg',
          lrc: 'https://raw.githubusercontent.com/zzjtnb/Resource/master/music/%E8%8E%AB%E6%96%AF%E7%A7%91%E9%83%8A%E5%A4%96%E7%9A%84%E6%99%9A%E4%B8%8A-%E9%92%A2%E7%90%B4%E7%8B%AC%E5%A5%8F.lrc',
        },
      ],
    }
  }
}
</script>

<style scoped>
</style>