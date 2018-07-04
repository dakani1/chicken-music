<template>
  <div class="hello">
    <Header></Header>
  </div>
</template>

<script>
  import Header from 'components/header/header'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      getData: function() {
        console.log(1);
        this.$http.get("/api/homepagerecommend").then(function(res) {
          console.log(res);
        }).catch(function(err) {
          console.log(err);
        });
      }
    },
    components: {
      Header
    },
    mounted: function() {
      console.log(1)
      console.log(this.$data)
      this.getData();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
