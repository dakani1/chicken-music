<template>
    <div class="rank">
      <div>
        {{pms}}
        {{getSinger}} <br/>
      </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  data () {
    return {
      pms: this.$route.params.id
    }
  },
  methods: {
    ...mapMutations([
      'setSingers', 'setSingers2'
    ])
  },
  computed: {
    ...mapGetters([
      'getSinger', 'getSinger2'
    ])
  },
  mounted: function () {
    this.setSingers2('new');
  }
}
</script>
<style scoped lang="scss" rel="stylesheet/sass">
  .rank{

  }
</style>
