import { createRouter, createWebHistory } from "vue-router";


import AppHomePage from './components/AppHomePage.vue';

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: '/', redirect: '/start-quiz'
      },
      {
         path: '/start-quiz', name: 'homePage', component: AppHomePage
      }
   ]
})



export default router