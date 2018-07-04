<template>
  <div class="loading-content">
    <img src="~common/images/loading2.gif" alt=""/>
    <p>{{description}}</p>
  </div>
</template>
<script>
export default {
  props: {
    description: {
      type: String,
      default: '加载中...'
    }
  }
}
</script>
<style lang="scss" scoped>
  .loading-content{
    padding: 15px;
    text-align: center;
    img{
      width: 35px;
    }
  }
</style>
