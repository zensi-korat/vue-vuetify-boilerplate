import App from './App.vue';
import './assets/styles/main.scss';
import { createApp } from 'vue';
import router from './router';
import vuetify from './plugins/vuetify';

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app');
