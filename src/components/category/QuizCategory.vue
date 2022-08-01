<template>
  <article class="category-container">
    <header class="category-header">
      <h1 class="category-header__text">{{ $t("category") }}</h1>
    </header>

    <section class="select-category">
      <router-link
        to="/quiz/question/1"
        class="select-category__button"
        @click="selectQuestionsCategory('frontend')"
        >Frontend</router-link
      >
      <router-link
        to="/quiz/question/1"
        class="select-category__button"
        @click="selectQuestionsCategory('backend')"
        >Backend</router-link
      >
    </section>
  </article>
</template>

<script>
export default {
  inject: ["selectQuestionsCategory"],
};
</script>


<style lang="scss" scoped>
.category-container {
  width: min(80%, 30rem);
  border-radius: 1rem 1rem 0.5rem 0.5rem;
  background-color: var(--color-quiz);
}

.category-header {
  padding: 10px;
  text-align: center;
  background-color: var(--header-quiz);
  border-radius: 0.5rem 0.5rem 0 0;
  &__text {
    font-size: 2rem;
    color: var(--white);
  }
}

.select-category {
  display: flex;
  flex-direction: column;
  padding: 15px;

  &__button {
    margin: 0.5rem 0;
    padding: 1rem 0;
    font-size: 1.7rem;
    text-align: center;
    text-decoration: none;
    background-color: var(--header-quiz);
    color: var(--white);
    border-radius: 5rem;
    border: 0;

    @media (min-width: 768px) {
      opacity: 0.9;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>