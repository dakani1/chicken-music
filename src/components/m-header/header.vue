<template>
    <div class="music-header">
      <div href="#"><img src="./logo.png" alt=""></div>
    </div>
</template>

<script type="es6">
export default {
}
</script>

<style scoped lang="scss" rel="stylesheet/sass">
  @import '../../common/css/color.scss';
  .music-header {
    display:table;
    width:100%;
    background-color: $bgcolor;
    div{
      height:60px;
      display:table-cell;
      vertical-align: middle;
      text-align:center;
    }
    img{
      width:60px;
      vertical-align:middle;
    }
  }
</style>
