<template>
  <main class="quiz-questions">
    <nav class="quiz-nav">
      <ul class="questions-list">
        <question-item
          v-for="(option, index) in questions.slice(a, b)"
          :key="index"
          :id="b"
          :question="option.question"
          :numberOfQuestion="this.questions"
          :answers="option.sugesstion"
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
      a: 0,
      b: 1,
      questions: [
        {
          question:
            "How do you take the best decision among several possibilities?",
          sugesstion: [
            "Usce semper hendrerit velit lacinia placerat.",
            "Donec pulvinar sit amet risus i eleifend.",
            "Maecenas dignissim venenatis fermentum.",
            "Nulla porttitor nunc tellus, vel consequat risus porta",
          ],
        },
        {
          question: "How do you take the best design ever?",
          sugesstion: [
            "Usce semper hendrerit velit lacinia placerat.",
            "Donec pulvinar sit amet risus id eleifend.",
            "Maecenas dignissim venenatis fermentum.",
            "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
          ],
        },
        {
          question: "How get only one element from array?",
          sugesstion: [
            "Usce semper hendrerit velit lacinia placerat.",
            "Donec pulvinar sit amet risus id eleifend.",
            "Maecenas dignissim venenatis fermentum.",
            "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
          ],
        },
        {
          question: "What makes decision-making effective?",
          sugesstion: [
            "Usce semper hendrerit velit lacinia placerat.",
            "Donec pulvinar sit amet risus id eleifend.",
            "Maecenas dignissim venenatis fermentum.",
            "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
          ],
        },
        {
          question: "How do you make a decision when both options are good?",
          sugesstion: [
            "Usce semper hendrerit velit lacinia placerat.",
            "Donec pulvinar sit amet risus id eleifend.",
            "Maecenas dignissim venenatis fermentum.",
            "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
          ],
        },
        {
          question:
            "What do you do when you have to make an important decision?",
          sugesstion: [
            "Usce semper hendrerit velit lacinia placerat.",
            "Donec pulvinar sit amet risus id eleifend.",
            "Maecenas dignissim venenatis fermentum.",
            "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
          ],
        },
        {
          question: "What should you not do while making a decision?",
          sugesstion: [
            "Usce semper hendrerit velit lacinia placerat.",
            "Donec pulvinar sit amet risus id eleifend.",
            "Maecenas dignissim venenatis fermentum.",
            "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
          ],
        },
        {
          question:
            "How can you determine if your chosen decision will benefit you?",
          sugesstion: [
            "Usce semper hendrerit velit lacinia placerat.",
            "Donec pulvinar sit amet risus id eleifend.",
            "Maecenas dignissim venenatis fermentum.",
            "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
          ],
        },
      ],
    };
  },
  methods: {
    changeQuestion(newRoute) {
      this.a = newRoute - 1;
      this.b = newRoute;
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
  margin: 4rem 0 0 0;
  @media (min-width: 768px) {
    margin: 0 0 5rem 0;
  }
}

.quiz-nav {
  width: min(700px, 70%);
}

.questions-list {
  border-radius: 1rem 1rem 0.5rem 0.5rem;
  background-color: var(--color-quiz);
}
</style>