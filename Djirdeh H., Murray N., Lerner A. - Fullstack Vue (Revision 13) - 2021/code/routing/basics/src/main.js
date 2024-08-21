import { createApp } from 'vue';
import App from './app/app-complete';
import { router } from './app/app-complete';

createApp(App).use(router).mount('#app');
