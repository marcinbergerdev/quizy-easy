import { createRouter, createWebHistory } from "vue-router";

const AppHomePage = () => import("./components/AppHomePage.vue");
const AppLanguages = () => import("./components/languages/AppLanguages");
const AppQuiz = () => import("./components/AppQuiz.vue");
const QuestionList = () => import("./components/quizOperation/QuestionList.vue");
// const QuizScore = () => import("./components/quizOperation/QuizScore.vue");

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: "/",
         redirect: "/start-quiz",
      },
      {
         name: "homePage",
         path: "/start-quiz",
         component: AppHomePage,
      },
      {
         name: "quiz",
         path: "/quiz",
         component: AppQuiz,
         children: [
            {
               name: "languages",
               path: "/quiz/languages",
               component: AppLanguages,
            },
            {
               name: "question",
               path: "question/:routeQuestion",
               component: QuestionList,
               props: true,
            },
            // {
            //    name: "score",
            //    path: "/quiz/score",
            //    component: QuizScore,
            // },
         ],
         redirect: '/start-quiz'
      },
   ],
});

export default router;
