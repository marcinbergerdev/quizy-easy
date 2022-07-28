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
      userScore: 0,
      questionsNumber: 0,
      questions: {
        frontend: [
          {
            question: "Co oznaczają skróty HTML i CSS?",
            sugesstions: [
              {
                id: 0,
                sugesstion: "Helper Text Mark Languages & Coding Style Sheets",
                correct: false,
              },
              {
                id: 1,
                sugesstion: "Hiper Text Make Language & Comment Style Sheet",
                correct: false,
              },
              {
                id: 2,
                sugesstion:
                  "Hyper Text Mark-up Language & Cascading Style Sheets",
                correct: true,
              },
              {
                id: 3,
                sugesstion:
                  "Height Text Mental Language & Counter Strike Shoots",
                correct: false,
              },
            ],
          },
          {
            question: "Jakie typy danych występują w javascript?",
            sugesstions: [
              {
                id: 0,
                sugesstion:
                  "Letter, Number, Boolean, Array, Undefined, Zero i Signal",
                correct: false,
              },
              {
                id: 1,
                sugesstion:
                  "String, Number, Boolean, Array, Undefined, Null i Symbol",
                correct: false,
              },
              {
                id: 2,
                sugesstion: "String, Number, Boolean, Undefined",
                correct: false,
              },
              {
                id: 3,
                sugesstion:
                  "String, Number, Boolean, Object, Undefined, Null i Symbol",
                correct: true,
              },
            ],
          },
          {
            question: "Jakiego tagu użyjemy jeżeli chcemy stworzyć checkbox?",
            sugesstions: [
              {
                id: 0,
                sugesstion:
                  '<input type="checkbox">',
                correct: true,
              },
              {
                id: 1,
                sugesstion:
                  "<checkbox>",
                correct: false,
              },
              {
                id: 2,
                sugesstion: '<checkbox type="input">',
                correct: false,
              },
              {
                id: 3,
                sugesstion: "Wszystkie odpoweidzi są poprawne",
                correct: false,
              },
            ],
          },
          {
            question: "Który z wymienionych sposobów jest poprawny do wstawiania komentarza w pliku CSS?",
            sugesstions: [
              { id: 0, sugesstion: "/ komentarz /", correct: false },
              {
                id: 1,
                sugesstion: "/' komentarz '/",
                correct: false,
              },
              {
                id: 2,
                sugesstion: "/* komentarz */",
                correct: true,
              },
              { id: 3, sugesstion: "' komentarz '", correct: false },
            ],
          },
          {
            question:
              "Który z nich jest operatorem warunkowym(Ternary Operator)?",
            sugesstions: [
              { id: 0, sugesstion: "<?", correct: false },
              { id: 1, sugesstion: ";?", correct: false },
              { id: 2, sugesstion: "?:", correct: true },
              { id: 3, sugesstion: ":?", correct: false },
            ],
          },
          {
            question:
              "Gdzie jest właściwe miejsce do wstawienia pliku JavaScript?",
            sugesstions: [
              {
                id: 0,
                sugesstion:
                  "<footer>",
                correct: false,
              },
              {
                id: 1,
                sugesstion: "<body>",
                correct: false,
              },
              {
                id: 2,
                sugesstion: "<head>",
                correct: false,
              },
              {
                id: 3,
                sugesstion:
                  "<head> i <body>",
                correct: true,
              },
            ],
          },
          {
            question: "Mamy liste 10 elementów które zawierają tekst, jakiej pseudoklasy użyjemy aby ustawić kolor tekstu tylko na 5 ostatnich elementach?",
            sugesstions: [
              { id: 0, sugesstion: "li:nth-child-type(5){ color: red}", correct: false },
              { id: 1, sugesstion: "li:nth-of-type(n / 5){ color: red}", correct: false },
              { id: 2, sugesstion: "li:nth-of-type(n + 5){ color: red}", correct: true },
              {
                id: 3,
                sugesstion:
                  "li:nth-of-type(n - 5){ color: red}",
                correct: false,
              },
            ],
          },
          {
            question:
              "Orginalna nazwa JavaScriptu to?",
            sugesstions: [
              {
                id: 0,
                sugesstion: "LiveScript",
                correct: false,
              },
              {
                id: 1,
                sugesstion: "Mocha",
                correct: true,
              },
              { id: 2, sugesstion: "JavaScript", correct: false },
              { id: 3, sugesstion: "Java", correct: false },
            ],
          },
          {
            question:
              "Jaki typ zwróci nam console.log(typeof NaN) ?",
            sugesstions: [
              {
                id: 0,
                sugesstion: "NaN",
                correct: false,
              },
              {
                id: 1,
                sugesstion: "undefined",
                correct: false,
              },
              { id: 2, sugesstion: "number", correct: true },

              { id: 3, sugesstion: "null", correct: false },
            ],
          },
          {
            question:
              "Jaka jest różnica między get i defineProperty?",
            sugesstions: [
              {
                id: 0,
                sugesstion: "get zostanie zdefiniowany w prototypie obiektu / Object.defineProperty() zostanie zdefiniowany na instancji, do której jest stosowany",
                correct: true,
              },
              {
                id: 1,
                sugesstion: "get zostanie zdefiniowany na instancji, do której jest stosowany / Object.defineProperty() zostanie zdefiniowany w prototypie obiektu",
                correct: false,
              },
              { id: 2, sugesstion: "nie ma różnicy są takie same", correct: false },
              { id: 3, sugesstion: "get jest zdefiniowana w DOM / Object.defineProperty() jest zdefiniowany w window.global", correct: false },
            ],
          },
        ],
        backend: [
          {
            question: "Co oznacza skrót OOP?",
            sugesstions: [
              {
                id: 0,
                sugesstion:
                  "Oriented-Operation Programming",
                correct: false,
              },
              {
                id: 1,
                sugesstion: "Oriented-Object Programming",
                correct: false,
              },
              {
                id: 2,
                sugesstion: "Object-Oriented Programming",
                correct: true,
              },
              {
                id: 3,
                sugesstion:
                  "Observation Oriented Programming",
                correct: false,
              },
            ],
          },
          {
            question: "Rozwiń skrót CRUD",
            sugesstions: [
              {
                id: 0,
                sugesstion: "Create, Read, Update, Delete",
                correct: true,
              },
              {
                id: 1,
                sugesstion: "Change, Read, Upgrade, Delete",
                correct: false,
              },
              { id: 2, sugesstion: "Create, React, Update, Debug", correct: false },
              { id: 3, sugesstion: "Concentrate, Remote, User, Delete", correct: false },
            ],
          },
          {
            question: "Roznica między put a patch?",
            sugesstions: [
              { id: 0, sugesstion: "Obie robią to samo", correct: false },
              {
                id: 1,
                sugesstion: "PUT aktualizuje lub usuwa cały zasób / PATCH aktualizuje tylko cały zasób",
                correct: false,
              },
              { id: 2, sugesstion: "PUT aktualizuje lub tworzy cały zasób / PATCH aktualizuje cały zasób lub jego fragment", correct: true },
              {
                id: 3,
                sugesstion: "PUT aktualizuje cały zasób lub jego fragment / PATCH służy do aktualizacji całego zasobu",
                correct: false,
              },
            ],
          },
          {
            question: "Co to jest relacyjna baza danych?",
            sugesstions: [
              { id: 0, sugesstion: "Relacyjna baza danych to rodzaj bazy danych, który nie pozwala przechowywać danych tylko zapewnia do nich dostęp", correct: false },
              {
                id: 1,
                sugesstion: "Relacyjna baza danych to rodzaj bazy danych, który pozwala przechowywać nie powiązane ze sobą elementy danych i nie zapewnia do nich dostępu",
                correct: false,
              },
              {
                id: 2,
                sugesstion: "Relacyjna baza danych to rodzaj bazy danych, który pozwala przechowywać nie powiązane ze sobą elementy danych i zapewnia do nich dostęp",
                correct: false,
              },
              { id: 3, sugesstion: "Relacyjna baza danych to rodzaj bazy danych, który pozwala przechowywać powiązane ze sobą elementy danych i zapewnia do nich dostęp", correct: true },
            ],
          },
          {
            question:
              "backendyHow do you make a decision when both options are good?",
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
                sugesstion:
                  "Usce semper hendrerit velit lacinia placerat. true",
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
      },
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
      if (category === "frontend") {
        localStorage.setItem(
          "questions",
          JSON.stringify(this.questions.frontend)
        );
      } else {
        localStorage.setItem(
          "questions",
          JSON.stringify(this.questions.backend)
        );
      }
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


