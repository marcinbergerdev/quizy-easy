<template>
  <main class="quiz-main">
    <article class="container-languages">
      <header class="header">
        <h1 class="header__txt">Select language</h1>
      </header>

      <form class="select-languages">
        <div class="select-languages__box">
          <label
            for="eng"
            @click="selectLanguage('eng')"
            :class="{ selected: this.language === 'eng' }"
            >EN</label
          >

          <input
            type="radio"
            id="eng"
            name="lang"
            value="eng"
            v-model="language"
          />
        </div>

        <div class="select-languages__box">
          <label
            for="pl"
            @click="selectLanguage('pl')"
            :class="{ selected: this.language === 'pl' }"
            >PL</label
          >

          <input
            type="radio"
            id="pl"
            name="lang"
            value="pl"
            v-model="language"
          />
        </div>

        <div class="select-languages__box">
          <label
            for="de"
            @click="selectLanguage('de')"
            :class="{ selected: this.language === 'de' }"
            >DE</label
          >

          <input
            type="radio"
            id="de"
            name="lang"
            value="de"
            v-model="language"
          />
        </div>
      </form>

      <button class="confrim-languages" @click="startGame">Select</button>
    </article>
  </main>
</template>

<script>
import router from "@/router";
export default {
  inject: ["resetPoint"],
  data() {
    return {
      language: "eng",
    };
  },
  methods: {
    selectLanguage(language) {
      this.language = language;
    },
    startGame() {
      this.resetPoint();
      router.push("/quiz/question/1");
    },
  },
};
</script>

<style lang="scss" scoped>
.quiz-main {
  width: 100%;
  max-width: 25rem;
  flex: 1;
  display: flex;
  align-items: center;
}

.container-languages {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem 1rem 5rem 1rem;
  color: var(--white);
  background-color: var(--color-quiz);
  border-radius: 1rem 1rem 0.5rem 0.5rem;
}

.header {
  padding: 1.5rem 0;
  background-color: var(--header-quiz);
  border-radius: 0.5rem 0.5rem 0 0;
  &__txt {
    text-align: center;
    font-size: 1.7rem;
    font-weight: 100;
  }
}

.select-languages {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10rem;
  &__box {
    margin: 0 1rem;
    label {
      display: block;
      width: 4rem;
      padding: 0.5rem 0;
      text-align: center;
      font-size: 2.2rem;
      color: var(--black);
      border-radius: 1.5rem;
      background-color: var(--white);
      box-shadow: 0 0 2rem rgb(0, 0, 0, 30%);

      @media (min-width: 768px) {
        cursor: pointer;
      }
    }

    input {
      display: none;
    }

    .selected {
      font-size: 2.4rem;
      background-color: #152538;
      color: #fff;
      box-shadow: 0 0 2rem rgb(0, 0, 0, 85%);
      transition: 0.1s ease-in-out;
    }
  }
}

.confrim-languages {
  margin-bottom: 1rem;
  padding: 0.6rem 2rem;
  align-self: center;
  text-decoration: none;
  font-size: 1.3rem;
  background-color: var(--header-quiz);
  color: var(--white);
  border-radius: 0.3rem;
  border: 0;

  @media (min-width: 768px) {
    cursor: pointer;
  }
}
</style>