<template>
  <article class="container-languages">
    <header class="header">
      <h1 class="header__txt">{{ $t("language") }}</h1>
    </header>

    <form class="select-languages">
      <div class="select-languages__box">
        <label
          for="eng"
          @click="selectLanguage('en')"
          :class="{ selected: this.lang === 'en' }"
          >EN</label
        >

        <input type="radio" id="en" name="lang" value="en" v-model="lang" />
      </div>

      <div class="select-languages__box">
        <label
          for="pl"
          @click="selectLanguage('pl')"
          :class="{ selected: this.lang === 'pl' }"
          >PL</label
        >

        <input type="radio" id="pl" name="lang" value="pl" v-model="lang" />
      </div>

      <div class="select-languages__box">
        <label
          for="de"
          @click="selectLanguage('de')"
          :class="{ selected: this.lang === 'de' }"
          >DE</label
        >

        <input type="radio" id="de" name="lang" value="de" v-model="lang" />
      </div>
    </form>

    <section class="confrim-languages">
      <router-link to="/quiz" class="confrim-languages__button">
        {{ $t("back") }}
      </router-link>

      <router-link
        to="/quiz/category"
        class="confrim-languages__button"
        @click="resetPoint"
      >
        {{ $t("select") }}
      </router-link>
    </section>
  </article>
</template>

<script>
export default {
  inject: ["resetPoint"],
  data() {
    return {
      lang: "en",
      translateText: {},
    };
  },
  methods: {
    selectLanguage(lang) {
      const i18n = this.$i18n;

      this.lang = lang;
      i18n.locale = lang;
      this.translateText = {
        questions: i18n.messages[lang].questions,
        feedback: i18n.messages[lang].feedback,
      };

      this.setLanguage(lang);
    },
    setLanguage(lang) {
      localStorage.setItem("language", lang);
      localStorage.setItem(
        "translatedText",
        JSON.stringify(this.translateText)
      );
    },
  },
  created() {
    const currentLanguage = localStorage.getItem("language");

    //sets default language if not picked by user
    this.selectLanguage(currentLanguage || this.lang);
  },
};
</script>

<style lang="scss" scoped>
.container-languages {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 25rem;
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
  display: flex;
  justify-content: center;
  gap: 10px;

  &__button {
    margin-bottom: 1rem;
    padding: 0.6rem 2rem;
    width: 30%;
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
}
</style>