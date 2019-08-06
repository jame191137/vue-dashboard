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
import VueCookies from 'vue-cookies'
import excel from 'vue-excel-export'

import VueMqtt from 'vue-mqtt'
var clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)
var options = {
  keepalive: 10,
  clientId: clientId,
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: 'WillMsg',
    payload: 'Connection Closed abnormally..!',
    qos: 0,
    retain: false
  },
  // username: 'demo',
  // password: 'demo',
  username: 'smartautomation',
  password: '0000',
  rejectUnauthorized: false
}
// Vue.use(VueMqtt, 'ws://iot.eclipse.org/ws', options)
// Vue.use(VueMqtt, 'mqtt://35.186.149.130:1883', options)
// Vue.use(VueMqtt, 'wss://test.mosquitto.org:8081', options)

Vue.use(excel)
Vue.use(VueCookies)

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
