<template>
    <article class="score-box">
      <header class="score-header">
        <h1 class="score-header__text">Score!</h1>
        <span class="score-header__userScore">{{ userScore }}</span>
      </header>

      <section class="score-info">
        <p class="score-info__txt">{{ feedback }}</p>
        <p class="score-info__score">
          poprawne odpowiedzi: {{ userScore }} z {{ questions.length }}
        </p>
        <router-link
          class="score-info__again"
          to="/quiz/category"
          @click="removeConfetti"
          >Play again</router-link
        >
      </section>
    </article>
</template>

<script>
export default {
  inject: ["questions"],
  props: ["userScore"],
  methods: {
    removeConfetti() {
      this.$confetti.stop();
    },
  },
  computed: {
    feedback() {
      let feedback = "";

      if (this.userScore <= this.questions.length * 0.3) {
        feedback = "Musisz jeszcze troche przyłożyć sie do nauki :)";
      } else if (this.userScore <= this.questions.length * 0.6) {
        feedback = "Więcej niż połowa, jest dobrze!";
      } else if (this.userScore <= this.questions.length * 0.8) {
        feedback = "Twoja wiedza jest na dobrym poziomie, trzymaj tak dalej!";
      } else if (this.userScore <= this.questions.length * 1.0) {
        feedback = "Praca w It gdzieś tam na Ciebie czeka :)";
      }
      return feedback;
    },
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === "category") return next(true);
    next(false);
  },
  created() {
    if (this.userScore === this.questions.length) {
      this.$confetti.start();
    }
  },
};
</script>


<style lang="scss" scoped>

.score-box {
  width: min(80%, 50rem);
  margin: 0 auto;
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
    padding: 0.6rem 2rem;
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