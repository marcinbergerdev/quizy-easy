<template>
  <div class="quiz-container">
    <header class="quiz-header">
      <h1 class="quiz-header__logo">Quizy Easy</h1>
    </header>

    <router-view v-slot="quizContent">
      <transition name="route-quiz" mode="out-in">
        <component :is="quizContent.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.route-quiz-enter-from,
.route-quiz-leave-to {
  transform: scale(0.2);
}
.route-quiz-enter-active,
.route-quiz-leave-active {
  transition: transform 0.5s ease-out;
}

.route-quiz-enter-to,
.route-quiz-leave-from {
  transform: scale(1);
}

.quiz-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 10vh 0;
  background-color: var(--bg-quiz);
  overflow: auto;
  overflow-x: hidden;
}

.quiz-header {
  &__logo {
    font-size: 3rem;
    color: var(--logo-quiz);
  }
}
</style>