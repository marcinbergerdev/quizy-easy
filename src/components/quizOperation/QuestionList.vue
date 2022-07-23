<template>
  <main class="quiz-questions">
    <nav class="quiz-nav">
      <ul>
        <question-item
          v-for="(option, index) in questions.slice(
            currentQuestion,
            numberOfQuestion
          )"
          :key="index"
          :id-question="numberOfQuestion"
          :question="option.question"
          :sugesstions="option.sugesstions"
        ></question-item>
      </ul>
    </nav>
  </main>
</template>

<script>
import QuestionItem from "./QuestionItem.vue";

export default {
  components: {
    QuestionItem,
  },
  props: ["routeQuestion"],
  inject: ['questions'],
  data() {
    return {
      currentQuestion: 0,
      numberOfQuestion: 1,
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

  beforeRouteUpdate(to, from, next) {
    const toNextRoute = Number(to.params.routeQuestion);
    const fromCurrentRoute = Number(from.params.routeQuestion);
    fromCurrentRoute > toNextRoute ? next(false) : next(true);
  },
  created() {
    const newRoute = Number(this.$route.params.routeQuestion);
    this.changeQuestion(newRoute);
    this.questionsNumber = this.questions.length;
  },
};
</script>

<style lang="scss">
.quiz-questions {
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 768px) and (orientation: landscape) {
    margin-top: 5rem;
  }
}

.quiz-nav {
  width: min(700px, 70%);
}
</style>