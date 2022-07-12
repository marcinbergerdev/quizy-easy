<template>
  <main class="quiz-questions">
    <nav class="quiz-nav">
      <ul>
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
            "Usce semper hlacinia placerat.",
            "Donec pulvinar sit amet risus id eleifend.",
            "Maecenas dignissim.",
            "Nulla.",
          ],
        },
        {
          question: "How get only one element from array?",
          sugesstion: [
            "Usce sempe.",
            "Donec sit amet risus id eleifend.",
            "Fermentum.",
            "Nulla porttitor nunc tellus, velnec.",
          ],
        },
        {
          question: "What makes decision-making effective?",
          sugesstion: [
            "Usce.",
            "Donec pulvinar sit amet risus id eleifend.",
            "Maecenas dignissim fermentum.",
            "Nulla porttitor",
          ],
        },
        {
          question: "How do you make a decision when both options are good?",
          sugesstion: [
            "Usce.",
            "Donec.",
            "Maecenas.",
            "Null.",
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
            "Velit lacinia placerat.",
            "Donec pulvinar sit amet.",
            "Maecenas dignissim.",
            "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
          ],
        },
        {
          question:
            "How can you determine if your chosen decision will benefit you?",
          sugesstion: [
            "Usce semper hendrerit velit placerat.",
            "Donec pulvinar sit amet risus id eleifend.",
            "MVenenatis fermentum.",
            "Nulla porttitor nunc.",
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