<template>
  <div class="backTop" @click="backTop">
    <div class="backTopMain">
      <i class="iconfont icon-shangjiantou"></i>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    backTop: function () {
      this.$emit('clk', '1111');
    }
  },
  mounted: function () {
  }
}
</script>
<style lang="scss" scoped>
  .backTop{
    position: fixed;
    left: 10px;
    bottom: 10px;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.3);
    text-align: center;
    line-height: 50px;
    .backTopMain{
      height: 100%;
      i{
        font-size: 40px;
      }
    }
  }
</style>
