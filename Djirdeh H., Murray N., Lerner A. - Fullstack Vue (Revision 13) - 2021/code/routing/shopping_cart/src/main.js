import { createApp } from 'vue';
import App from './app-complete/App.vue';
import router from './app-complete/router';
import store from './app-complete/store';

createApp(App).use(router).use(store).mount('#app');
