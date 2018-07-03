<template>
  <div id='app'>
    <Header></Header>
    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from 'components/m-header/header.vue'
import Tab from 'components/tab/tab'
export default {
  name: 'App',
  components: {
    Header,
    Tab
  }
}
</script>

<style lang='scss' rel='stylesheet/sass'>
@import 'common/css/color.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color;
  line-height: 32px;
}
</style>
