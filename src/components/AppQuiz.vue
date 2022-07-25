<template>
  <div class="quiz-container">
    <header class="quiz-header">
      <h1 class="quiz-header__logo">Quizy Easy</h1>
    </header>

    <main class="quiz-main">
      <router-view v-slot="quizContent">
        <transition name="route-quiz" mode="out-in">
          <component :is="quizContent.Component"></component>
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
      setUserScore: this.setUserScore,
      resetPoint: this.resetPoint,
      questions: this.questions,
    };
  },
  data() {
    return {
      userScore: 0,
      questionsNumber: 0,
      questions: [
        {
          question:
            "How do you take the best decision among several possibilities?",
          sugesstions: [
            {
              id: 0,
              sugesstion: "Usce semper hendrerit velit lacinia placerat. true",
              correct: true,
            },
            {
              id: 1,
              sugesstion: "Donec pulvinar sit amet risus i eleifend.",
              correct: false,
            },
            {
              id: 2,
              sugesstion: "Maecenas dignissim venenatis fermentum.",
              correct: false,
            },
            {
              id: 3,
              sugesstion:
                "Nulla porttitor nunc tellus, vel consequat risus porta",
              correct: false,
            },
          ],
        },
        {
          question: "How do you take the best design ever?",
          sugesstions: [
            {
              id: 0,
              sugesstion: "Usce semper hlacinia placerat.",
              correct: false,
            },
            {
              id: 1,
              sugesstion: "Donec pulvinar sit amet risus id eleifend.",
              correct: false,
            },
            { id: 2, sugesstion: "Maecenas dignissim. true", correct: true },
            { id: 3, sugesstion: "Nulla.", correct: false },
          ],
        },
        {
          question: "How get only one element from array?",
          sugesstions: [
            { id: 0, sugesstion: "Usce sempe.", correct: false },
            {
              id: 1,
              sugesstion: "Donec sit amet risus id eleifend.",
              correct: false,
            },
            { id: 2, sugesstion: "Fermentum. triue", correct: true },
            {
              id: 3,
              sugesstion: "Nulla porttitor nunc tellus, velnec.",
              correct: false,
            },
          ],
        },
        {
          question: "What makes decision-making effective?",
          sugesstions: [
            { id: 0, sugesstion: "Usce.", correct: false },
            {
              id: 1,
              sugesstion: "Donec pulvinar sit amet risus id eleifend.",
              correct: false,
            },
            {
              id: 2,
              sugesstion: "Maecenas dignissim fermentum.",
              correct: false,
            },
            { id: 3, sugesstion: "Nulla porttitor true ", correct: true },
          ],
        },
        {
          question: "How do you make a decision when both options are good?",
          sugesstions: [
            { id: 0, sugesstion: "Usce.", correct: false },
            { id: 1, sugesstion: "Donec.", correct: false },
            { id: 2, sugesstion: "Maecenas. true", correct: true },
            { id: 3, sugesstion: "Null.", correct: false },
          ],
        },
        {
          question:
            "What do you do when you have to make an important decision?",
          sugesstions: [
            {
              id: 0,
              sugesstion: "Usce semper hendrerit velit lacinia placerat. true",
              correct: true,
            },
            {
              id: 1,
              sugesstion: "Donec pulvinar sit amet risus id eleifend.",
              correct: false,
            },
            {
              id: 2,
              sugesstion: "Maecenas dignissim venenatis fermentum.",
              correct: false,
            },
            {
              id: 3,
              sugesstion:
                "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
              correct: false,
            },
          ],
        },
        {
          question: "What should you not do while making a decision?",
          sugesstions: [
            { id: 0, sugesstion: "Velit lacinia placerat.", correct: false },
            { id: 1, sugesstion: "Donec pulvinar sit amet.", correct: false },
            { id: 2, sugesstion: "Maecenas dignissim. true", correct: true },
            {
              id: 3,
              sugesstion:
                "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
              correct: false,
            },
          ],
        },
        {
          question:
            "How can you determine if your chosen decision will benefit you?",
          sugesstions: [
            {
              id: 0,
              sugesstion: "Usce semper hendrerit velit placerat.",
              correct: false,
            },
            {
              id: 1,
              sugesstion: "Donec pulvinar sit amet risus id eleifend. true ",
              correct: true,
            },
            { id: 2, sugesstion: "MVenenatis fermentum.", correct: false },
            { id: 3, sugesstion: "Nulla porttitor nunc.", correct: false },
          ],
        },
        {
          question:
            "How can you determine if your chosen decision will benefit you?",
          sugesstions: [
            {
              id: 0,
              sugesstion: "Usce semper hendrerit velit placerat.",
              correct: false,
            },
            {
              id: 1,
              sugesstion: "Donec pulvinar sit amet risus id eleifend. true",
              correct: true,
            },
            { id: 2, sugesstion: "MVenenatis fermentum.", correct: false },
            { id: 3, sugesstion: "Nulla porttitor nunc.", correct: false },
          ],
        },
        {
          question:
            "How can you determine if your chosen decision will benefit you?",
          sugesstions: [
            {
              id: 0,
              sugesstion: "Usce semper hendrerit velit placerat.",
              correct: false,
            },
            {
              id: 1,
              sugesstion: "Donec pulvinar sit amet risus id eleifend. true",
              correct: true,
            },
            { id: 2, sugesstion: "MVenenatis fermentum.", correct: false },
            { id: 3, sugesstion: "Nulla porttitor nunc.", correct: false },
          ],
        },
      ],
    };
  },
  methods: {
    addPoint() {
      ++this.userScore;
    },
    setUserScore() {
      return this.userScore;
    },
    resetPoint() {
      this.userScore = 0;
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
}
</style>


