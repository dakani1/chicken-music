<template>
  <div class="recommend" ref='name'>
    <Scroll ref="scroll" v-if="recommendList.length > 0" :data="recommendList">
      <Slider v-if ='recommendList.length'>
        <div v-for="(item, key) in recommendList" :key="key" class='slider-item'>
          <a :href="item.linkUrl">
            <img :src="item.picUrl" alt="">
          </a>
        </div>
      </Slider>
      <div class="hotSong">
        <h3>热门歌单推荐</h3>
        <ul>
          <li class="listItem" v-for="(item, key) in songList" :key="key">
            <div class="itemMain" :href="item.picUrl" :data-id="item.id">
              <div class="itemMainImg" flex="5">
                <img v-lazy="item.picUrl" alt=""/>
              </div>
              <div class="itemMainDesc" flex="20">
                <p>{{item.songListDesc}}</p>
                <p>{{item.songListAuthor}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Scroll>
    <Backtop @clk = 'go' v-if="recommendList.length"></Backtop>
  </div>
</template>

<script>
import Slider from 'base/slider.vue'
import Scroll from 'base/scroll.vue'
import Loading from 'base/loading.vue'
import {getHomePageRecommend} from 'api/index.js'
import Backtop from 'base/backTop.vue'
export default {
  data () {
    return {
      recommendList: [],
      songList: []
    }
  },
  methods: {
    go: function () {
      this.$refs.scroll.backTop();
    }
  },
  computed: {
  },
  components: {
    Slider, Scroll, Loading, Backtop
  },
  mounted: function () {
    var url = '/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    var _this = this;
    getHomePageRecommend(url, {}, function (res) {
      _this.recommendList = res.slider;
      _this.songList = res.songList;
    });
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/sass">
@import 'common/sass/variable.scss';
.el-carousel-item {
  a, img{
    display: block;
    width: 100%;
  }
  @at-root .el-carousel__indicators{
    width: 100%;
  }
}
.recommend{
  position: absolute;
  top: 89px;
  bottom: 0;
  width: 100%;
}
.hotSong{
  padding: 30px  15px;
  h3{text-align: center;color: $color-theme;}
  ul{padding-top: 15px;}
  .listItem{
    padding: 15px 0;
    .itemMain{
      display: flex;
      display: -webkit-flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .itemMainImg{
        width:80px;
        font-size: 0;
        img{
          display:block;
          max-width: 100%;
        }
      }
      .itemMainDesc{
        margin-left: 15px;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        align-content: center;
        text-align: left;
        p + p{
          margin-top: 10px;
          color: $color-text-d;
        }
      }
    }
  }
}
</style>
