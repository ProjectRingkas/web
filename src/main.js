import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  BootstrapVue,
  BootstrapVueIcons
} from 'bootstrap-vue'
import VueFeather from 'vue-feather';
import FeatherIcon from 'feather-icons';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueFeather)
Vue.use(FeatherIcon)
// import Login from "./components/Login/Login.vue";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')