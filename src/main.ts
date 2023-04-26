import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store/index';
import VueAxios from 'vue-axios';
import axios from 'axios';

const app = createApp(App).use(router).use(store).use(VueAxios, axios);

app.mount('#app');
