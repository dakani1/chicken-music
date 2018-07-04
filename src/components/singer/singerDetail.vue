<template>
 <transition name="slide">
   <div class="singerDetail"  :key="2">
     <i ref="goForward" @click="goForward" class="iconfont icon-iconfontjiantou1"></i>
     {{singerId}}
   </div>
 </transition>
</template>
<script>
export default {
  data () {
    return {
      singerId: this.$route.params.id
    }
  },
  methods: {
    goForward: function () {
      window.history.go(-1);
    }
  },
  mounted: function () {
  }
}
</script>
<style lang="scss" scoped>
  @import 'common/sass/variable.scss';
  .singerDetail{
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: $color-highlight-background;
    i{
      padding: 5px;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      background-color: white;
      color: $color-theme;
      position: absolute;
      left: 10px;
      top: 5px;
    }
  }

  .slide-enter-active, .slide-leave-active{
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -ms-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
  }
  .slide-enter{
    left: 100%;
  }
  .slide-leave-to{
    left: -100%;
  }
  .slide-enter-to, .slide-leave{
    left: 0;
  }
</style>
