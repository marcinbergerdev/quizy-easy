<template>
  <main class="score-container">
    <article class="score-box">
      <header class="score-box__header">Gratulacje</header>
      <p class="score-box__score">Twoje punkty to {{ userScore() }}/10</p>
      <router-link class="score-box__again" to="/quiz/languages"
        >Play again</router-link
      >
    </article>
  </main>
</template>

<script>
export default {
  inject: ["userScore"],
  beforeRouteLeave(to, from, next) {
    if (to.name === "languages") return next(true);
    next(false);
  },
};
</script>


<style lang="scss" scoped>
.score-container {
  display: flex;
  flex: 1;
  align-items: center;
}

.score-box {
  background-color: var(--color-quiz);
  margin-bottom: 5rem;
  &__header {
  }

  &__score {
  }

  &__again {
  }
}
</style>