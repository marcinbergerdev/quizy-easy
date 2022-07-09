import { createRouter, createWebHistory } from "vue-router";

const AppHomePage = () => import("./components/AppHomePage.vue");
const AppLanguages = () => import("./components/languages/AppLanguages");
const AppQuiz = () => import("./components/AppQuiz.vue");

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

      },
   ],
});

export default router;
