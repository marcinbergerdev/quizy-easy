<template>
  <article class="container-languages">
    <header class="header">
      <h1 class="header__txt">Select language</h1>
    </header>

    <form class="select-languages">
      <div class="select-languages__box">
        <label
          for="eng"
          @click="selectLanguage('eng')"
          :class="{ selected: this.language === 'eng'}"
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
          for="de"
          @click="selectLanguage('de')"
          :class="{ selected: this.language === 'de'}"
          >DE</label
        >

        <input type="radio" id="de" name="lang" value="de" v-model="language" />
      </div>
    </form>
    <router-link to="/quiz/question" class="confrim-languages"
      >Select</router-link
    >
  </article>
</template>

<script>
export default {
  data() {
    return {
      language: "eng",
    };
  },
  methods: {
    selectLanguage(language) {
      this.language = language;
      console.log(language);
    },
  },
};
</script>

<style lang="scss" scoped>
.container-languages {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem 1rem 5rem 1rem;
  color: var(--white);
  background-color: var(--color-quiz);
  border-radius: 10px 10px 5px 5px;
}

.header {
  padding: 1.5rem 0;
  background-color: var(--header-quiz);
  border-radius: 5px 5px 0 0;
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
  min-height: 100px;
  &__box {
    margin: 0 1rem;
    label {
      display: block;
      width: 40px;
      padding: 5px 0;
      text-align: center;
      font-size: 2.2rem;
      color: var(--black);
      border-radius: 1.5rem;
      background-color: var(--white);
      box-shadow: 0 0 2rem rgb(0, 0, 0, 30%);

      @media (min-width: 768px) {
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
  margin-bottom: 10px;
  padding: 6px 20px;
  align-self: center;
  text-decoration: none;
  font-size: 1.3rem;
  background-color: var(--header-quiz);
  color: var(--white);
  border-radius: 3px;

  @media (min-width: 768px) {
    cursor: pointer;
  }
}
</style>