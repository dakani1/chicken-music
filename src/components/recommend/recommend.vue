<template>
    <div>
      推荐
    </div>
</template>

<script type="es6">
import getRecommend from 'api/getRecommend'
export default {
  methods: {
    getR: function () {
      getRecommend('https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', {
        type: 'jsop',
        'jsonp': ''
      })
    }
  },
  mounted () {
    console.log('20')
    this.getR()
  }
}
</script>

<style>
</style>
