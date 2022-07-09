<template>
  <header-cards>
    <h1 class="logo">Quizy Easy</h1>
  </header-cards>

  <main class="quiz-main">
    <router-view></router-view>
  </main>
</template>

<script>
import HeaderCards from "./cards/HeaderCards.vue";

export default {
  components: {
    HeaderCards,
  },
};
</script>

<style lang="scss" scoped>
.quiz-main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--bg-quiz);
}

.logo {
  color: #c7dbe5;
  font-size: 2.4rem;

  @media (min-width: 320px) {
    font-size: 3rem;
  }
}
</style>