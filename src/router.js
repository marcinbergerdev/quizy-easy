import { createRouter, createWebHistory } from "vue-router";

import AppHomePage from "./components/AppHomePage.vue";
import AppLanguages from "./components/languages/AppLanguages";
import AppQuiz from "./components/quizOperation/AppQuiz.vue";

// import HeaderLogo from "./components/homepage/header/HeaderLogo.vue";

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: "/",
         redirect: "/start-quiz",
      },
      {
         path: "/start-quiz",
         name: "homePage",
         component: AppHomePage,
      },
      {
         path: "/quiz",
         name: "quiz",
         component: AppQuiz,
         children: [
            {
               path: "/quiz/languages",
               name: "languages",
               component: AppLanguages,
            },
         ],
         redirect: '/quiz/languages'
      },
   ],
});

export default router;
