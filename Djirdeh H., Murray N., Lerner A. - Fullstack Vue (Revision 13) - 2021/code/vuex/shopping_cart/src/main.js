import { createApp } from 'vue';
import App from './app-complete/App.vue';
import store from './app-complete/store';

createApp(App).use(store).mount('#app');
