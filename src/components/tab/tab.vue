<template>
    <div class="header-tab">
      <router-link tag="div" to="/recommend">推荐</router-link>
      <router-link tag="div" to="/rank">排名</router-link>
      <router-link tag="div" to="/singer">歌手</router-link>
      <router-link tag="div" to="/search">搜索</router-link>
    </div>
</template>

<script type="es6">
export default {}
</script>

<style lang="scss" scoped>
.header-tab{
  display: flex;
  display: -webkit-flex;
  background-color: #333;
  div{
    flex: 1;
    line-height:32px;
    color:white;
  }
  div.router-link-active{
    color: #d19308;
  }
}
</style>
