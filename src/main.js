import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import Axios from 'axios'
import VConsole from 'vconsole'
import VueLazyload from 'vue-lazyload'
import VueParticles from 'vue-particles'
import store from './store/index.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'babel-polyfill'

let vConsole = new VConsole();
console.log(vConsole.toString());
Vue.use(VueLazyload, {
  loading: require('common/images/pre_load.png'),
  error: require('common/images/pre_load.png'),
  listenevent: 'scroll'
})

Vue.use(ElementUI)
Vue.use(VueParticles)
FastClick.attach(document.body)
Vue.prototype.$http = Axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
