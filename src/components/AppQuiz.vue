<template>
  <div class="quiz-container">
    <header class="quiz-header">
      <h1 class="quiz-header__logo">Quizy Easy</h1>
    </header>

    <router-view v-slot="quizContent">
      <transition name="route-quiz">
        <component :is="quizContent.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.quiz-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 10vh 0;
  background-color: var(--bg-quiz);
  overflow: auto;
}

.quiz-header {
  &__logo {
    font-size: 3rem;
    color: var(--logo-quiz);
  }
}

</style>