<template>
  <main class="quiz-questions">
    <nav class="quiz-nav">
      <ul>
        <question-item
          v-for="(option, index) in questions.slice(currentQuestion, numberOfQuestion)"
          :key="index"
          :id-question="numberOfQuestion"
          :question-list="this.questions"
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
  data() {
    return {
      currentQuestion: 0,
      numberOfQuestion: 1,
      questions: [
        {
          question:
            "How do you take the best decision among several possibilities?",
          sugesstions: [
            {
              sugesstion: "Usce semper hendrerit velit lacinia placerat.",
              correct: true,
            },
            { sugesstion: "Donec pulvinar sit amet risus i eleifend." },
            { sugesstion: "Maecenas dignissim venenatis fermentum." },
            {
              sugesstion:
                "Nulla porttitor nunc tellus, vel consequat risus porta",
            },
          ],
        },
        {
          question: "How do you take the best design ever?",
          sugesstions: [
            { sugesstion: "Usce semper hlacinia placerat." },
            { sugesstion: "Donec pulvinar sit amet risus id eleifend." },
            { sugesstion: "Maecenas dignissim.", correct: true },
            { sugesstion: "Nulla." },
          ],
        },
        {
          question: "How get only one element from array?",
          sugesstions: [
            { sugesstion: "Usce sempe.", correct: true },
            { sugesstion: "Donec sit amet risus id eleifend." },
            { sugesstion: "Fermentum." },
            { sugesstion: "Nulla porttitor nunc tellus, velnec." },
          ],
        },
        {
          question: "What makes decision-making effective?",
          sugesstions: [
            { sugesstion: "Usce." },
            { sugesstion: "Donec pulvinar sit amet risus id eleifend." },
            { sugesstion: "Maecenas dignissim fermentum." },
            { sugesstion: "Nulla porttitor", correct: true },
          ],
        },
        {
          question: "How do you make a decision when both options are good?",
          sugesstions: [
            { sugesstion: "Usce." },
            { sugesstion: "Donec." },
            { sugesstion: "Maecenas.", correct: true },
            { sugesstion: "Null." },
          ],
        },
        {
          question:
            "What do you do when you have to make an important decision?",
          sugesstions: [
            {
              sugesstion: "Usce semper hendrerit velit lacinia placerat.",
              correct: true,
            },
            { sugesstion: "Donec pulvinar sit amet risus id eleifend." },
            { sugesstion: "Maecenas dignissim venenatis fermentum." },
            {
              sugesstion:
                "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
            },
          ],
        },
        {
          question: "What should you not do while making a decision?",
          sugesstions: [
            { sugesstion: "Velit lacinia placerat." },
            { sugesstion: "Donec pulvinar sit amet." },
            { sugesstion: "Maecenas dignissim.", correct: true },
            {
              sugesstion:
                "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
            },
          ],
        },
        {
          question:
            "How can you determine if your chosen decision will benefit you?",
          sugesstions: [
            { sugesstion: "Usce semper hendrerit velit placerat." },
            {
              sugesstion: "Donec pulvinar sit amet risus id eleifend.",
              correct: true,
            },
            { sugesstion: "MVenenatis fermentum." },
            { sugesstion: "Nulla porttitor nunc." },
          ],
        },
      ],
    };
  },
  methods: {
    changeQuestion(newRouteQuestion) {
      this.currentQuestion = newRouteQuestion - 1;
      this.numberOfQuestion = newRouteQuestion;
    },
  },
  watch: {
    routeQuestion(value) {
      const newRoute = Number(value);
      this.changeQuestion(newRoute);
    },
  },
  // beforeRouteUpdate(to, from, next) {
  //   console.log(to);
  //   console.log(from);
  //   next(false);
  // },
  //   TUTAJ MOŻE SIĘ PRZYDAĆ GDY NIE ZOSTANIE WYBRANA ZADNA Z OPCJI A KTOŚ KLIKNIE DALEJ

  // beforeRouteLeave(to, from, next) {
  //   console.log(to);
  //   console.log(from);
  //   next(false);
  // },
  created() {
    const newRoute = Number(this.$route.params.routeQuestion);
    this.changeQuestion(newRoute);
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
  overflow: hidden;
  @media (min-width: 768px) {
    margin-top: -5rem;
  }
}

.quiz-nav {
  width: min(700px, 70%);
}
</style>