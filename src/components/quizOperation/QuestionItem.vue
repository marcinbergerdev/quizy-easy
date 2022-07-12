<template>
  <li>
    <article class="question-container">
      <header class="question-header">
        <h1 class="question-header__question">{{ question }}</h1>
        <span class="question-header__counter">{{ id + 1 }}/8</span>
      </header>

      <ul class="answers-list">
        <li
          class="answers-list__answer"
          v-for="answer in answers"
          :key="answer"
        >
          {{ answer }}
        </li>
      </ul>

      <router-link to="/quiz/languages" class="next-question"
        >Next <span>--></span></router-link
      >
    </article>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    answers: {
      type: Array,
      required: true,
    },
  },
};
</script>


<style lang="scss">
li {
}

.question-container {
}

.question-header {
  &__question {
  }
}

.answers-list {
  &__answer {
  }
}

.next-question {
}
</style>