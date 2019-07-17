import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import money from 'v-money'
const pluginOptions = {};

Vue.config.productionTip = false;
Vue.use(money, {precision: 2})

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
