import { createApp } from 'vue';
import App from './App.vue';
import router from './vue-router/Index.js';
import './style.css';

const app = createApp(App);
app.use(router);
app.mount('#app');