import Vue from 'vue'
import App from './App.vue'

import Cookies from "js-cookie"

import Element from 'element-ui'
import "normalize.css/normalize.css"
import "@/../node_modules/handsontable/dist/handsontable.full.css"

import "./assets/styles/element-variables.scss";

import router from "./router";

// import component from "./components";
// Vue.use(component);
import VueTheMax from "vue-the-mask";
Vue.use(VueTheMax)

Vue.use(Element, {
	size: Cookies.get("size") || "medium"
})

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
