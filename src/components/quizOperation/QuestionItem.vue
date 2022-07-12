<template>
  <transition name="test" mode="out-in">
    <li class="questions-list" v-if="dupa">
      <article class="question-container">
        <header class="question-header">
          <h1 class="question-header__question">{{ question }}</h1>
          <span class="question-header__counter"
            >{{ id }}/ {{ numberOfQuestion.length }}</span
          >
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

        <router-link :to="questionLink" class="next-question">
          Next <Icon icon="akar-icons:arrow-right" />
        </router-link>
      </article>
    </li>
  </transition>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      dupa: true,
    };
  },
  emit: ["test"],
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
    numberOfQuestion: {
      type: Array,
      required: true,
    },
    routeQuestion: {
      type: String,
    },
  },
  computed: {
    questionLink() {
      return { name: "question", params: { routeQuestion: this.id + 1 } };
    },
  },
  watch: {
    $route(value) {
      if (value) {
        this.dupa = false;
        setTimeout(() => {
          this.dupa = true;
        }, 10);
      }
    },
  },
};
</script>


<style lang="scss">
.test-enter-from {
  opacity: 0;
  transform: translateX(-400px);
}
.test-enter-active {
  transition: all 0.5s ease-out;
}
.test-enter-to {
  opacity: 1;
  transform: translateX(0px);
}

.test-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
.test-leave-active {
  transition: all 0.5s ease-in;
}
.test-leave-to {
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
      background-color: var(--hover-answer);
    }
    @media (min-width: 768px) {
      font-size: 1.4rem;
      cursor: pointer;
    }
  }
}

.next-question {
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
</style>