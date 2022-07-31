<template>
  <article class="score-box">
    <header class="score-header">
      <h1 class="score-header__text">{{$t("score")}}</h1>
      <span class="score-header__userScore">{{ userScore }}</span>
    </header>

    <section class="score-info">
      <p class="score-info__txt">{{ feedback }}</p>
      <p class="score-info__score">
        {{$t("correct")}} {{ userScore }} {{$t("of")}} {{ selectedQuestions.length }}
      </p>
      <router-link
        class="score-info__again"
        to="/quiz/languages"
        @click="playAgain"
        >{{$t("play")}}</router-link
      >
    </section>
  </article>
</template>

<script>
export default {
  props: ["userScore"],
  data() {
    return {
      selectedQuestions: [],
    };
  },
  methods: {
    playAgain() {
      this.$confetti.stop();
    },
  },
  computed: {
    feedback() {
      const info = JSON.parse(localStorage.getItem('translatedText'));


      let feedback = "";

      if (this.userScore <= this.selectedQuestions.length * 0.3) {
        feedback = info.feedback.feedbackOne
      } else if (this.userScore <= this.selectedQuestions.length * 0.6) {
        feedback = info.feedback.feedbackTwo;
      } else if (this.userScore <= this.selectedQuestions.length * 0.8) {
        feedback = info.feedback.feedbackThree;
      } else if (this.userScore <= this.selectedQuestions.length * 1.0) {
        feedback = info.feedback.feedbackFor;
      }
      return feedback;
    },
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === "languages") return next(true);
    next(false);
  },
  created() {
    const selectedQuestions = JSON.parse(localStorage.getItem("questions"));
    this.selectedQuestions = selectedQuestions;

    if (this.userScore === this.selectedQuestions.length) {
      this.$confetti.start();
    }
  },
};
</script>


<style lang="scss" scoped>
.score-box {
  width: min(80%, 50rem);
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: #ebf7ff;
  color: #2b2a2a;
  border-radius: 0.5rem;
}

.score-header {
  padding: 3rem 0;
  font-size: 2rem;
  &__text {
    font-weight: bold;
  }

  &__userScore {
    display: block;
    margin-top: 1rem;
    font-size: 7rem;
  }
}

.score-info {
  padding-bottom: 2rem;
  &__txt,
  &__score,
  &__again {
    margin-bottom: 2rem;
    font-size: 1.4rem;
    font-weight: bold;
    color: var(--header-quiz);
  }

  &__score {
    margin-bottom: 4rem;
  }

  &__again {
    padding: 1rem 2rem;
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 100;
    background-color: var(--header-quiz);
    color: var(--white);
    border-radius: 0.3rem;
    border: 0;

    @media (min-width: 768px) {
      cursor: pointer;
    }
  }
}
</style>