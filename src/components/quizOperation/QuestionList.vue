<template>
  <nav class="quiz-nav">
    <ul>
      <question-item
        v-for="(option, index) in selectedQuestions.slice(
          currentQuestion,
          numberOfQuestion
        )"
        :key="index"
        :id-question="numberOfQuestion"
        :question="option.question"
        :sugesstions="option.sugesstions"
        :route-question="this.routeQuestion"
        :selected-questions="this.selectedQuestions"
      ></question-item>
    </ul>
  </nav>
</template>

<script>
import router from "@/router";
import QuestionItem from "./QuestionItem.vue";

export default {
  components: {
    QuestionItem,
  },
  props: ["routeQuestion"],
  inject: ["resetPoint"],
  data() {
    return {
      selectedQuestions: [],
      currentQuestion: 0,
      numberOfQuestion: 1,
      refreshPage: true,
    };
  },
  methods: {
    changeQuestion(newRouteQuestion) {
      this.currentQuestion = newRouteQuestion - 1;
      this.numberOfQuestion = newRouteQuestion;
    },
  },
  watch: {
    routeQuestion(route) {
      const newRoute = Number(route);
      this.changeQuestion(newRoute);
    },
  },
  beforeRouteEnter(to, from) {
    const routeTo = to.params.routeQuestion;
    const routeFrom = from.params.routeQuestion;

    if (routeTo >= 2 && routeFrom === undefined) {
      router.push("/quiz/question/1");
    }
  },
  beforeRouteUpdate(to, from, next) {
    const toNextRoute = Number(to.params.routeQuestion);
    const fromCurrentRoute = Number(from.params.routeQuestion);
    fromCurrentRoute > toNextRoute ? next(false) : next(true);
  },
  created() {
    const newRoute = Number(this.$route.params.routeQuestion);
    const selectedQuestions = JSON.parse(localStorage.getItem("questions"));

    this.selectedQuestions = selectedQuestions;
    this.changeQuestion(newRoute);
    this.questionsNumber = this.selectedQuestions.length;
    this.resetPoint();
  },
};
</script>

<style lang="scss">
.quiz-nav {
  width: min(700px, 70%);
}
</style>