import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
export const serverBus = new Vue();
export const base_url = 'http://178.128.61.189:5488';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

