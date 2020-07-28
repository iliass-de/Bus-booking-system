import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter  from 'vue-router'
import { store } from './services/state'
import  routes  from './routes/router'


Vue.prototype.$axios = axios
Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({mode: 'history',routes});

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
