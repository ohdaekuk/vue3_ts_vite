import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store/index';
import axios from 'axios';

const app = createApp(App).use(router).use(store).use(axios);

app.mount('#app');
