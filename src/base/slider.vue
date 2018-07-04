<template>
  <div class="slider" ref="slider" @click.native='console.log(11)'>
    <div class="slide-group" ref="slideGroup">
      <slot></slot>
    </div>
    <div class="dot">
      <span v-for='(item, key) in dots' :key='key' :class='{active: currentIndex === key}'></span>
    </div>
  </div>
</template>
<script>
import {
  setTimeout, setInterval, clearInterval
} from 'timers';
import BScroll from 'better-scroll';
import {
  hasClass,
  addClass
} from 'common/js/dom.js';
export default {
  data () {
    return {
      dots: [],
      currentIndex: 0
    }
  },
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  methods: {
    calWidth: function (winResize = false) {
      var _this = this;
      var sliderWid = _this.$refs.slider.offsetWidth;
      var slideGroup = _this.$refs.slideGroup;
      var slideGroupChild = slideGroup.children;
      var width = 0;
      for (let i = 0; i < slideGroupChild.length; i++) {
        slideGroupChild[i].style.width = sliderWid + 'px';
        if (!hasClass(slideGroupChild[i], 'slider-item')) {
          addClass(slideGroupChild[i], 'slider-item');
        }
      }
      var length = slideGroupChild.length;
      if (winResize) {
        length -= 2;
      }
      _this.dots = new Array(length);
      if (_this.loop) {
        length += 2;
      }
      width = sliderWid * length;
      slideGroup.style.width = width + 'px';
    },
    initSlider: function () {
      var _this = this;
      var slide = document.querySelector('.slider');
      _this.bScroll = new BScroll(slide, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        click: true,
        snap: {
          loop: _this.loop,
          threshold: 0.1,
          easing: {
            style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fn: function (t) {
              return t * (2 - t)
            }
          }
        }
      });
      if (_this.loop) {
        _this.play();
      }

      _this.bScroll.on('scrollEnd', function () {
        _this.currentIndex = _this.bScroll.getCurrentPage().pageX;
        _this.play();
      });
    },
    play: function () {
      var _this = this;
      if (_this.timer) {
        clearInterval(_this.timer);
      }
      if (_this.loop) {
        _this.timer = setInterval(function () {
          _this.bScroll.next();
        }, _this.interval);
      }
    }
  },
  mounted: function () {
    var _this = this;
    setTimeout(() => {
      _this.calWidth();
      _this.initSlider();
    }, 20);

    window.addEventListener('resize', function () {
      _this.calWidth(true);
      _this.bScroll.refresh();
    }, false);
  },
  destroyed: function () {
    clearInterval(this.timer)
  }
}
</script>
<style lang='scss'>
  .slider {
    position: relative;
    width: 100%;
    overflow: hidden;
    .slide-group {
      .slider-item {
        float: left;
        a,
        img {
          width: 100%;
          display: block;
        }
      }
      &:after {
        content: ' ';
        display: block;
        float: none;
        clear: both;
      }
    }
    .dot {
      text-align: center;
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 10px 0;
      span {
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: white;
        border-radius: 4px;
        margin: 0 5px;
        &.active {
          background-color: green;
          width: 16px;
        }
      }
    }
  }
</style>
