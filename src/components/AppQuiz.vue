<template>
  <div class="quiz-container">
    <header class="quiz-header">
      <h1 class="quiz-header__logo">Quizy Easy</h1>
    </header>

    <main class="quiz-main">
      <router-view v-slot="quizContent">
        <transition name="route-quiz" mode="out-in">
          <component
            :is="quizContent.Component"
            :user-score="this.userScore"
          ></component>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      addPoint: this.addPoint,
      resetPoint: this.resetPoint,
      selectQuestionsCategory: this.selectQuestionsCategory,
    };
  },
  data() {
    return {
      userScore: 5,
      questionsNumber: 0,
    };
  },
  methods: {
    addPoint() {
      ++this.userScore;
    },
    resetPoint() {
      this.userScore = 0;
    },
    selectQuestionsCategory(category) {
      const translatedText = JSON.parse(localStorage.getItem("translatedText"));
      const categories = translatedText.questions.find(
        (question) => question.name === category
      );
      this.setQuestionsCategory(categories.questionList);
    },
    setQuestionsCategory(selectedOptions) {
      localStorage.setItem("questions", JSON.stringify(selectedOptions));
    },
  },
};
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
  min-height: 100vh;
  padding: 10vh 0;
  background-color: var(--bg-quiz);
  overflow: auto;
  overflow-x: hidden;
}

.quiz-header {
  &__logo {
    font-size: 3rem;
    color: #ebf7ff;
  }
}

.quiz-main {
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (orientation: landscape) {
    margin: 5rem 0;
  }
}
</style>


