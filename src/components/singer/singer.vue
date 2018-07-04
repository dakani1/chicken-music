<template>
  <div ref="singer" class="singer">
    <div class="loading-wrap">
      <Loading v-show="!singerList.length"></Loading>
    </div>
    <Scroll ref="scrollCom" :probeType="probeType" class="scrollCom" @iscroll="scroll" v-if="singerList.length > 1">
      <div class="singerList" ref="singerList">
        <dl ref="singerListItem" class="singerListItem" v-for="(item, key) in singerList" :key="key">
          <dt>{{item.title}}</dt>
          <router-link :to="{'path': `/singer/${val.id}`}" tag="dd" v-for="(val, index) in item.items" :data-id="val.id" :key="index">
            <img v-lazy="val.avatar" alt=""/>
            <p>{{val.Fsinger_name}}</p>
          </router-link>
        </dl>
      </div>
    </Scroll>
    <div class="hTit" v-if="!!hTit" ref="hTit" :style="{top: offsetTop}">{{hTit}}</div>
    <div ref="navDiv" class="navList" v-if="singerList.length > 1">
        <span v-for="(item, key) in singerList" :key="key" :data-key="key"
              @touchstart="touchStart($event, key)"
              @touchmove.stop.prevent="touchMove($event)"
              :class="{active: currentIdx === key}">
          {{item.title | oneStr}}
        </span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Scroll from 'base/scroll.vue'
import Loading from 'base/loading.vue'
import { getSingerList } from 'api/index.js'
export default {
  data: function () {
    return {
      hotTit: '热门',
      hotLength: 10,
      singerList: [],
      currentIdx: 0,
      firstTouchPageY: 0,
      probeType: 3,
      heightList: [],
      hTit: '',
      offsetTop: '0px'
    }
  },
  components: {
    Scroll, Loading
  },
  filters: {
    oneStr: function (str) {
      return str.substr(0, 1)
    }
  },
  methods: {
    scroll: function (pos) {
      var scrollT = pos.y;
      if (scrollT < 0) {
        for (var i = 0; i < this.heightList.length - 1; i++) {
          if (scrollT < -1 * this.heightList[i] && scrollT > -1 * this.heightList[i + 1]) {
            this.currentIdx = i;
            if (this.heightList[i + 1] + scrollT > 0 && (this.heightList[i + 1] + scrollT < 30)) {
              this.offsetTop = -1 * (30 - scrollT - this.heightList[i + 1]) + 'px';
            } else {
              this.offsetTop = '0px';
            }
            this.hTit = this.singerList[this.currentIdx].title;
            return '';
          }
        }
        this.currentIdx = this.heightList.length - 1;
        this.offsetTop = '0px';
        this.hTit = this.singerList[this.currentIdx].title;
      } else {
        this.currentIdx = 0;
        this.hTit = '';
      }
    },
    calHeight: function () {
      var singerListItem = this.$refs.singerListItem;
      for (var i = 0; i < singerListItem.length; i++) {
        this.heightList.push(singerListItem[i].offsetTop)
      }
    },
    touchStart: function (event, idx) {
      this.currentIdx = idx;
      this.firstTouchPageY = event.targetTouches[0].pageY;
      var scrollCom = this.$refs.scrollCom;
      var singerListItem = this.$refs.singerListItem;
      scrollCom.scrollToElement(singerListItem[idx], 0);
    },
    touchMove: function (event) {
      var hgt = event.target.offsetHeight;
      var moveDis = event.targetTouches[0].pageY;
      var addIdx = ((moveDis - this.firstTouchPageY) / hgt) || 0;
      if (Math.abs(addIdx) >= 1 && (this.currentIdx < this.singerList.length - 1)) {
        this.currentIdx = Math.round(addIdx) + this.currentIdx;
        if (this.currentIdx < 0) {
          this.currentIdx = 0;
        }
        this.firstTouchPageY = moveDis;
        this.touchStart(event, this.currentIdx)
      }
    },
    _normalizeList: function (list) {
      var sList = [];
      list.forEach(function (item, key) {
        var json = {
          title: item.Findex,
          items: {
            id: item.Fsinger_mid,
            Fsinger_name: item.Fsinger_name,
            avatar: `//y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`
          }
        };
        sList.push(json);
      });

      return sList;
    },
    sortList: function (sList) {
      var totalList = {};

      var hotOrigin = sList.slice(0, this.hotLength);
      var hotArr = [{
        title: this.hotTit,
        items: []
      }];
      hotOrigin.forEach(function (item, key) {
        hotArr[0].items.push(item.items);
      });

      sList.forEach(function (item, key) {
        if (/^[a-zA-Z]$/.test(item.title)) {
          if (!totalList[item.title]) {
            totalList[item.title] = {
              title: item.title,
              items: []
            }
          }
          totalList[item.title].items.push(item.items);
        }
      });

      var resArr = [];
      for (var item in totalList) {
        resArr.push(totalList[item]);
      }
      resArr.sort(function (a, b) {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      });
      return hotArr.concat(resArr);
    }
  },
  mounted: function () {
    var _this = this;
    getSingerList(function (res) {
      var singerL = res.list;
      _this.singerList = _this.sortList(_this._normalizeList(singerL));
      setTimeout(() => {
        _this.calHeight();
      }, 20)
    });
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/sass">
@import 'common/sass/variable.scss';
.singer{
  position: absolute;
  top: 89px;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  .scrollMain{
    position: relative;

  }
  .singerList{
    padding: 0 0 15px;
    @at-root .hTit{
      position: absolute;
      left: 0;
      top: -2px;
      text-align: left;
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      padding-right: 20px;
      background-color: $color-highlight-background;
    }
    dl{
      text-align: left;
      padding-bottom: 30px;
      dt{
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        padding-right: 20px;
        background-color: $color-highlight-background;
      }
      dd{
        padding: 20px 20px 0;
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
        align-items: center;
        img{
          width: 60px;
          height: 60px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          overflow: hidden;
        }
        p{margin-left: 30px;}
      }
    }
  }

  .navList{
    display:block;
    position: fixed;
    right: 0;
    top: 50%;
    width: 20px;
    margin-top: 44px;
    -webkit-transform: translate(0, -50%);
    -moz-transform: translate(0, -50);
    -ms-transform: translate(0, -50);
    -o-transform: translate(0, -50);
    transform: translate(0, -50);
    padding:10px 0;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    background-color: $color-text-sd;
    text-align: center;
    span{
      display:block;
      padding-top: 3px;
      &.active{
        color: $color-theme;
      }
    }
  }

}
</style>
