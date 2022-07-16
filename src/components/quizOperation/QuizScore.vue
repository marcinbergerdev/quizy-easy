<template>
  <main class='score-container'>
    <article class='score-box'>
      <header class='score-box__header'>Gratulacje</header>
      <p class='score-box__score'>Twoje punkty to 8/10</p>
      <router-link class='score-box__again' to="/quiz/languages">Play again</router-link>
    </article>
  </main>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.score-container{
   display: flex;
   flex: 1;
   align-items: center;
   margin-bottom: 10rem;
}

.score-box{
   background-color: var( --color-quiz);
   &__header{

   }

   &__score{

   }

   &__again{

   }
}
</style>