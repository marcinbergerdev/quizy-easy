<template>
  <main class="quiz-main">
    <router-view></router-view>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.quiz-main {
  min-height: 100vh;
  background-color: var(--bg-quiz);
}
</style>