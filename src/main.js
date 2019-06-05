// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'

// Components
import './components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'
// import Vuex from 'vuex';
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
Vue.use(Router)

// import Login from './components/Login.vue'
//
// export default new Router({
//   routes: [
//     {
//       path: '/login',
//       name: 'Login',
//       component: Login
//     }
//   ]
// })

sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
