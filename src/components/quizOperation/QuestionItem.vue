<template>
  <transition name="question-animation" mode="out-in">
    <li class="questions-list" :key="idQuestion">
      <article class="question-container">
        <header class="question-header">
          <h1 class="question-header__question">{{ question }}</h1>
          <span class="question-header__counter"
            >{{ idQuestion }}/ {{ questionList.length }}</span
          >
        </header>

        <ul class="answers-list">
          <li
            class="answers-list__answer"
            :class="answer ? checkAnswer(option.correct) : ''"
            v-for="(option, index) in sugesstions"
            :key="index"
            @click="setSugesstion(option.correct)"
          >
            {{ option.sugesstion }}
          </li>
        </ul>

        <section class="switch-question">
          <router-link :to="questionLink" class="switch-question__skip">
            Skip
          </router-link>
          <button
            :to="questionLink"
            class="switch-question__next"
            @click="nextQuestion"
          >
            Next <Icon icon="akar-icons:arrow-right" />
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
  data() {
    return {
      score: 0,
      answer: false,
    };
  },
  methods: {
    setSugesstion(correct) {
      if (correct) {
        this.score++;
      }
      this.answer = true;
    },
    checkAnswer(correct) {
      if (correct) {
        return "correct";
      } else {
        return "incorrect";
      }
    },
    nextQuestion() {
      this.answer = false;
      router.push(this.questionLink);
    },
  },
  components: {
    Icon,
  },
  props: {
    idQuestion: {
      type: Number,
      required: true,
    },
    questionList: {
      type: Array,
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
  },
  computed: {
    questionLink() {
      return {
        name: "question",
        params: { routeQuestion: this.idQuestion + 1 },
      };
    },
  },
  watch: {
    $route(route){
      const questionRoute = route.params.routeQuestion;
      const numberOfQuestion = this.questionList.length + 1
     if(questionRoute == numberOfQuestion ) router.push('/quiz/score');
    }
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
    padding: 1rem 1.5rem;
    font-size: 1.3rem;
    word-wrap: break-word;
    background-color: var(--bg-answer);
    border-radius: 1.5rem;

    &:hover {
      background-color: var(--color-checked);
      box-shadow: 0 0 2rem rgb(0, 0, 0, 30%);
      transition: 0.1s ease-in-out;
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
.correct {
  background-color: var(--color-correct);
  &:hover {
    background-color: var(--color-correct);
  }
}
.incorrect {
  background-color: var(--color-incorrect);
  &:hover {
    background-color: var(--color-incorrect);
  }
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

    @media (min-width: 768px) {
      width: 65px;
      padding: 0.7rem;
      font-size: 1.3rem;
      cursor: pointer;
    }
  }
}
</style>