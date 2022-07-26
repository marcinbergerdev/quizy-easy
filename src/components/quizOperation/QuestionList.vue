<template>
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
          :route-question="this.routeQuestion"
        ></question-item>
      </ul>
    </nav>
</template>

<script>
import QuestionItem from "./QuestionItem.vue";

export default {
  components: {
    QuestionItem,
  },
  props: ["routeQuestion", "selectedCategory"],
  inject: ["questions"],
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

    // console.log(this.selectedCategory);

  },
};
</script>

<style lang="scss">

.quiz-nav {
  width: min(700px, 70%);
}
</style>