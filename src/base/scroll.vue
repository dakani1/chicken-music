<template>
  <div class="scroll-content">
    <div class="scroll-main">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll';
export default {
  data () {
    return {
      scrollTxt: 'this is the content of scroll'
    }
  },
  props: {
    click: {
      type: Boolean,
      default: true
    },
    probeType: {
      type: Number,
      default: 1
    },
    data: {
      type: Array,
      default: null
    }
  },
  methods: {
    _initScroll: function () {
      var scrollContent = document.querySelector('.scroll-content');
      this.scrollMain = new BScroll(scrollContent, {
        click: this.click,
        probeType: this.probeType
      });
      this.scrollMain.on('scroll', (position) => {
        this.$emit('iscroll', position);
      });
    },
    enable: function () {
      this.scrollMain && this.scrollMain.enable();
    },
    disable: function () {
      this.scrollMain && this.scrollMain.disable();
    },
    refresh: function () {
      this.scrollMain && this.scrollMain.refresh();
    },
    backTop: function () {
      this.scrollMain && this.scrollMain.scrollTo(0, 0, 1000);
    },
    scrollToElement: function (el, time, offsetX, offsetY, easing) {
      this.scrollMain && this.scrollMain.scrollToElement(el, time, offsetX, offsetY, easing);
    },
    scrollTo: function (x, y, time, easing) {
      this.scrollMain && this.scrollMain.scrollTo(x, y, time, easing);
    }
  },
  mounted: function () {
    this._initScroll();
  },
  watch: {
    data: function () {
      var _this = this;
      var timer = setTimeout(function () {
        _this.refresh();
        clearTimeout(timer);
      }, 20)
    }
  }
}
</script>
<style lang="scss" scoped>
  .scroll-content{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
