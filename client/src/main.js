import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import GAuth from 'vue-google-oauth2'
Vue.use(GAuth, {clientId: '763081660536-o6rbp5klioqshjefj3084qisdqucu6gt.apps.googleusercontent.com'})

Vue.config.productionTip = false
Vue.use(Vuetify,{
  theme: {
    primary: '#ffdd57',
    facebook: '#3B5998',
    twitter: '#1DA1F2',
    whatsapp: '#25D366',
    lightgrey: '#E1E1E1'
  },
  iconfont: 'fa4'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
