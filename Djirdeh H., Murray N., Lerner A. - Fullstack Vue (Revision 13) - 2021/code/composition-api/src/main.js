import { createApp } from 'vue';
import App from './app-complete/App.vue';
import store from './app-complete/store';

createApp(App).provide('store', store).mount('#app');
