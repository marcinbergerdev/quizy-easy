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
          :dupa="index"
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
              id: 0,
              sugesstion: "Usce semper hendrerit velit lacinia placerat. true",
              correct: true,
            },
            {
              id: 1,
              sugesstion: "Donec pulvinar sit amet risus i eleifend.",
              correct: false,
            },
            {
              id: 2,
              sugesstion: "Maecenas dignissim venenatis fermentum.",
              correct: false,
            },
            {
              id: 3,
              sugesstion:
                "Nulla porttitor nunc tellus, vel consequat risus porta",
              correct: false,
            },
          ],
        },
        {
          question: "How do you take the best design ever?",
          sugesstions: [
            {
              id: 0,
              sugesstion: "Usce semper hlacinia placerat.",
              correct: false,
            },
            {
              id: 1,
              sugesstion: "Donec pulvinar sit amet risus id eleifend.",
              correct: false,
            },
            { id: 2, sugesstion: "Maecenas dignissim.", correct: true },
            { id: 3, sugesstion: "Nulla.", correct: false },
          ],
        },
        {
          question: "How get only one element from array?",
          sugesstions: [
            { id: 0, sugesstion: "Usce sempe.", correct: false },
            {
              id: 1,
              sugesstion: "Donec sit amet risus id eleifend.",
              correct: false,
            },
            { id: 2, sugesstion: "Fermentum.", correct: true },
            {
              id: 3,
              sugesstion: "Nulla porttitor nunc tellus, velnec.",
              correct: false,
            },
          ],
        },
        {
          question: "What makes decision-making effective?",
          sugesstions: [
            { id: 0, sugesstion: "Usce.", correct: false },
            {
              id: 1,
              sugesstion: "Donec pulvinar sit amet risus id eleifend.",
              correct: false,
            },
            {
              id: 2,
              sugesstion: "Maecenas dignissim fermentum.",
              correct: false,
            },
            { id: 3, sugesstion: "Nulla porttitor", correct: true },
          ],
        },
        {
          question: "How do you make a decision when both options are good?",
          sugesstions: [
            { id: 0, sugesstion: "Usce.", correct: false },
            { id: 1, sugesstion: "Donec.", correct: false },
            { id: 2, sugesstion: "Maecenas.", correct: true },
            { id: 3, sugesstion: "Null.", correct: false },
          ],
        },
        // {
        //   question:
        //     "What do you do when you have to make an important decision?",
        //   sugesstions: [
        //     {
        //       id: 0,
        //       sugesstion: "Usce semper hendrerit velit lacinia placerat.",
        //       correct: true,
        //     },
        //     {
        //       id: 1,
        //       sugesstion: "Donec pulvinar sit amet risus id eleifend.",
        //       correct: false,
        //     },
        //     {
        //       id: 2,
        //       sugesstion: "Maecenas dignissim venenatis fermentum.",
        //       correct: false,
        //     },
        //     {
        //       id: 3,
        //       sugesstion:
        //         "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
        //       correct: false,
        //     },
        //   ],
        // },
        // {
        //   question: "What should you not do while making a decision?",
        //   sugesstions: [
        //     { id: 0, sugesstion: "Velit lacinia placerat.", correct: false },
        //     { id: 1, sugesstion: "Donec pulvinar sit amet.", correct: false },
        //     { id: 2, sugesstion: "Maecenas dignissim.", correct: true },
        //     {
        //       id: 3,
        //       sugesstion:
        //         "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
        //       correct: false,
        //     },
        //   ],
        // },
        // {
        //   question:
        //     "How can you determine if your chosen decision will benefit you?",
        //   sugesstions: [
        //     {
        //       id: 0,
        //       sugesstion: "Usce semper hendrerit velit placerat.",
        //       correct: false,
        //     },
        //     {
        //       id: 1,
        //       sugesstion: "Donec pulvinar sit amet risus id eleifend.",
        //       correct: true,
        //     },
        //     { id: 2, sugesstion: "MVenenatis fermentum.", correct: false },
        //     { id: 3, sugesstion: "Nulla porttitor nunc.", correct: false },
        //   ],
        // },
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
    routeQuestion(route) {
      const newRoute = Number(route);
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
}

.quiz-nav {
  width: min(700px, 70%);
}
</style>