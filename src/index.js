import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './app.vue'
import './styles/bootstrap.min.css'

Vue.use(VueResource)
// Vue.config.productionTip = false
const root = document.createElement('div');
document.body.appendChild(root);

/* eslint-disable no-new */
new Vue({
	render:(h) =>h(App)
}).$mount(root)