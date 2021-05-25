
import Vue from 'vue'
import App from './App.vue'
import "../node_modules/bulma/css/bulma.css"

import routes from "./route"

Vue.config.productionTip = false

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
