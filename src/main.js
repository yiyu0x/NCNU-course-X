import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import VueAnalytics from 'vue-analytics';
export const serverBus = new Vue();
export const base_url = 'https://api.ncnusa.ml';
Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
    id: 'UA-145409243-2'
});

new Vue({
    render: h => h(App)
}).$mount('#app');
