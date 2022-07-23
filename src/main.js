import { createApp } from 'vue';

import App from './App.vue';
import Router from './router.js';
import VueConfetti from "vue-confetti";



const app = createApp(App);
app.use(VueConfetti);
app.use(Router);

app.mount('#app');