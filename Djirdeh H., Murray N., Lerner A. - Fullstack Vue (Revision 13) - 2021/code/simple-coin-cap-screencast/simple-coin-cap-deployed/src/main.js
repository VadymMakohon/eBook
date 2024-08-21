import Vue from 'vue'
import VueSelect from 'vue-select'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.component('v-select', VueSelect);

import 'semantic-ui-css/semantic.css';
import 'vue-select/dist/vue-select.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
