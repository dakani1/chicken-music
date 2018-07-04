<template>
  <div>
    <div id="app" ref="app1">
      <Header></Header>
      <Tab></Tab>
      <div class="content">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </div>
    </div>
    <!--<vue-particles class="particle"-->
      <!--color="#dedede"-->
      <!--:particleOpacity="0.7"-->
      <!--:particlesNumber="80"-->
      <!--shapeType="circle"-->
      <!--:particleSize="2"-->
      <!--linesColor="#dedede"-->
      <!--:linesWidth="1"-->
      <!--:lineLinked="true"-->
      <!--:lineOpacity="0"-->
      <!--:linesDistance="150"-->
      <!--:moveSpeed="2"-->
      <!--:hoverEffect="true"-->
      <!--hoverMode="grab"-->
      <!--:clickEffect="true"-->
      <!--clickMode="push">-->
    <!--</vue-particles>-->
  </div>
</template>

<script>
import Header from 'components/header/header'
import Tab from 'components/tab/tab'
export default {
  name: 'App',
  methods: {
    go: function () {

    }
  },
  mounted: function () {
  },
  components: {
    Header, Tab
  }
}
</script>

<style lang="scss">
@import 'common/sass/index.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
