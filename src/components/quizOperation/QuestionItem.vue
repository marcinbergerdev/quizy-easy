<template>
  <transition name="question-animation" mode="out-in">
    <li class="questions-list" :key="idQuestion">
      <article class="question-container">
        <header class="question-header">
          <h1 class="question-header__question">{{ question }}</h1>
          <span class="question-header__counter"
            >{{ idQuestion }}/{{ selectedQuestions.length }}</span
          >
        </header>

        <ul class="answers-list">
          <li v-for="(option, index) in sugesstions" :key="index">
            <button
              class="answers-list__answer"
              :class="answer ? checkAnswer(selectedOptions[index]) : ''"
              @click="setSugesstion(option.sugesstion, option.correct)"
              :disabled="disabledActivity"
            >
              {{ option.sugesstion }}
            </button>
          </li>
        </ul>

        <section class="switch-question">
          <button
            class="switch-question__next"
            @click="nextQuestion"
            :disabled="!disabledActivity"
          >
            {{ $t("next") }} <Icon icon="akar-icons:arrow-right" />
          </button>
        </section>
      </article>
    </li>
  </transition>
</template>

<script>
import { Icon } from "@iconify/vue";
import router from "@/router";

export default {
  components: {
    Icon,
  },
  inject: ["addPoint"],
  props: {
    idQuestion: {
      type: Number,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    sugesstions: {
      type: Array,
      required: true,
    },
    routeQuestion: {
      type: [Number, String],
      required: true,
    },
    selectedQuestions: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      answer: false,
      selectedOptions: [],
      disabledActivity: false,
    };
  },
  methods: {
    setSugesstion(userSugesstion, correct) {
      if (correct) this.addPoint();

      const selected = this.sugesstions.map(({ sugesstion, correct }) => {
        if (correct) {
          return "correct";
        } else if (sugesstion === userSugesstion && !correct) {
          return "incorrect";
        } else {
          return "unmarked";
        }
      });

      this.answer = true;
      this.disabledActivity = true;
      this.selectedOptions = selected;
    },
    checkAnswer(options) {
      return options;
    },
    nextQuestion() {
      const routeQuestion = Number(this.routeQuestion);
      if (routeQuestion === this.selectedQuestions.length) {
        return router.push("/quiz/score");
      }

      this.answer = false;
      this.disabledActivity = false;
      router.push(this.questionLink);
    },
  },
  computed: {
    questionLink() {
      return {
        name: "question",
        params: {
          routeQuestion:
            this.idQuestion === this.selectedQuestions.length
              ? this.selectedQuestions.length
              : this.idQuestion + 1,
        },
      };
    },
  },
};
</script>


<style lang="scss">
.question-animation-enter-from {
  opacity: 0;
  transform: translateX(-400px);
}
.question-animation-enter-active {
  transition: all 0.5s ease-out;
}
.question-animation-enter-to {
  opacity: 1;
  transform: translateX(0px);
}

.question-animation-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
.question-animation-leave-active {
  transition: all 0.5s ease-in;
}
.question-animation-leave-to {
  opacity: 0;
  transform: translateX(400px);
}

li {
  list-style: none;
}

.questions-list {
  border-radius: 1rem 1rem 0.5rem 0.5rem;
  background-color: var(--color-quiz);
}

.question-container {
  display: flex;
  flex-direction: column;
}

.question-header {
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 1.5rem;
  word-wrap: break-word;
  color: var(--white);
  background-color: var(--header-quiz);
  border-radius: 0.5rem 0.5rem 0 0;

  &__question {
    width: 80%;
    font-size: 1.4rem;
    font-weight: 100;
    letter-spacing: 1px;
    @media (min-width: 768px) {
      font-size: 1.6rem;
    }
  }
}

.answers-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem 1.8rem 2rem 1.8rem;

  &__answer {
    width: 100%;
    padding: 1rem 1.5rem;
    font-size: 1.3rem;
    word-wrap: break-word;
    text-align: start;
    background-color: var(--bg-answer);
    border-radius: 1.5rem;
    border: 0;

    &:hover {
      background-color: var(--color-checked);
      box-shadow: 0 0 2rem rgb(0, 0, 0, 30%);
      transition: 0.1s ease-in-out;
    }

    &:disabled {
      transition: 0.2s ease-in-out;
      color: #000;
      &:hover {
        box-shadow: none;
        transition: none;
      }
    }

    @media (min-width: 768px) {
      font-size: 1.4rem;
      cursor: pointer;
    }
  }
}

.correct,
.incorrect {
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: var(--color-correct);
    box-shadow: none;
    transition: none;
  }
}
.correct,
.correct:hover {
  background-color: var(--color-correct);
}
.incorrect,
.incorrect:hover {
  background-color: var(--color-incorrect);
}
.unmarked,
.unmarked:hover {
  background-color: #c0c2c4;
}

.switch-question {
  display: flex;
  align-self: flex-end;

  &__next {
    border: 0;
  }
  &__next,
  &__skip {
    width: 65px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 2rem 1rem 0;
    padding: 0.7rem;
    text-decoration: none;
    font-size: 1.1rem;
    color: var(--white);
    align-self: flex-end;
    background-color: var(--header-quiz);
    border-radius: 5rem;

    &:disabled {
      opacity: 0.5;
    }

    @media (min-width: 768px) {
      width: 65px;
      padding: 0.7rem;
      font-size: 1.3rem;
      cursor: pointer;
    }
  }
}
</style>