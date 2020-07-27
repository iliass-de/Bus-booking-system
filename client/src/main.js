import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from './services/state'

Vue.prototype.$axios = axios
Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  store
}).$mount('#app')
