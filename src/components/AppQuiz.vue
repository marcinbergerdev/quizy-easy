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
                sugesstion: "Helper Text Mark Languages & Coding Style Sheets",
                correct: false,
              },
              {
                sugesstion: "Hiper Text Make Language & Comment Style Sheet",
                correct: false,
              },
              {
                sugesstion:
                  "Hyper Text Mark-up Language & Cascading Style Sheets",
                correct: true,
              },
              {
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
                sugesstion:
                  "Letter, Number, Boolean, Array, Undefined, Zero i Signal",
                correct: false,
              },
              {
                sugesstion:
                  "String, Number, Boolean, Array, Undefined, Null i Symbol",
                correct: false,
              },
              {
                sugesstion: "String, Number, Boolean, Undefined",
                correct: false,
              },
              {
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
                sugesstion: '<input type="checkbox">',
                correct: true,
              },
              {
                sugesstion: "<checkbox>",
                correct: false,
              },
              {
                sugesstion: '<checkbox type="input">',
                correct: false,
              },
              {
                sugesstion: "Wszystkie odpoweidzi są poprawne",
                correct: false,
              },
            ],
          },
          {
            question:
              "Który z wymienionych sposobów jest poprawny do wstawiania komentarza w pliku CSS?",
            sugesstions: [
              { sugesstion: "/ komentarz /", correct: false },
              {
                sugesstion: "/' komentarz '/",
                correct: false,
              },
              {
                sugesstion: "/* komentarz */",
                correct: true,
              },
              { sugesstion: "' komentarz '", correct: false },
            ],
          },
          {
            question:
              "Który z nich jest operatorem warunkowym(Ternary Operator)?",
            sugesstions: [
              { sugesstion: "<?", correct: false },
              { sugesstion: ";?", correct: false },
              { sugesstion: "?:", correct: true },
              { sugesstion: ":?", correct: false },
            ],
          },
          {
            question:
              "Gdzie jest właściwe miejsce do wstawienia pliku JavaScript?",
            sugesstions: [
              {
                sugesstion: "<footer>",
                correct: false,
              },
              {
                sugesstion: "<body>",
                correct: false,
              },
              {
                sugesstion: "<head>",
                correct: false,
              },
              {
                sugesstion: "<head> i <body>",
                correct: true,
              },
            ],
          },
          {
            question:
              "Mamy liste 10 elementów które zawierają tekst, jakiej pseudoklasy użyjemy aby ustawić kolor tekstu tylko na 5 ostatnich elementach?",
            sugesstions: [
              {
                sugesstion: "li:nth-child-type(5){ color: red}",
                correct: false,
              },
              {
                sugesstion: "li:nth-of-type(n / 5){ color: red}",
                correct: false,
              },
              {
                sugesstion: "li:nth-of-type(n + 5){ color: red}",
                correct: true,
              },
              {
                sugesstion: "li:nth-of-type(n - 5){ color: red}",
                correct: false,
              },
            ],
          },
          {
            question: "Orginalna nazwa JavaScriptu to?",
            sugesstions: [
              {
                sugesstion: "LiveScript",
                correct: false,
              },
              {
                sugesstion: "Mocha",
                correct: true,
              },
              { sugesstion: "JavaScript", correct: false },
              { sugesstion: "Java", correct: false },
            ],
          },
          {
            question: "Jaki typ zwróci nam console.log(typeof NaN) ?",
            sugesstions: [
              {
                sugesstion: "NaN",
                correct: false,
              },
              {
                sugesstion: "undefined",
                correct: false,
              },
              { sugesstion: "number", correct: true },

              { sugesstion: "null", correct: false },
            ],
          },
          {
            question: "Jaka jest różnica między get i defineProperty?",
            sugesstions: [
              {
                sugesstion:
                  "get zostanie zdefiniowany w prototypie obiektu / Object.defineProperty() zostanie zdefiniowany na instancji, do której jest stosowany",
                correct: true,
              },
              {
                sugesstion:
                  "get zostanie zdefiniowany na instancji, do której jest stosowany / Object.defineProperty() zostanie zdefiniowany w prototypie obiektu",
                correct: false,
              },
              { sugesstion: "nie ma różnicy są takie same", correct: false },
              {
                sugesstion:
                  "get jest zdefiniowana w DOM / Object.defineProperty() jest zdefiniowany w window.global",
                correct: false,
              },
            ],
          },
        ],
        backend: [
          {
            question: "Co oznacza skrót OOP?",
            sugesstions: [
              {
                sugesstion: "Oriented-Operation Programming",
                correct: false,
              },
              {
                sugesstion: "Oriented-Object Programming",
                correct: false,
              },
              {
                sugesstion: "Object-Oriented Programming",
                correct: true,
              },
              {
                sugesstion: "Observation Oriented Programming",
                correct: false,
              },
            ],
          },
          {
            question: "Rozwiń skrót CRUD",
            sugesstions: [
              {
                sugesstion: "Create, Read, Update, Delete",
                correct: true,
              },
              {
                sugesstion: "Change, Read, Upgrade, Delete",
                correct: false,
              },
              { sugesstion: "Create, React, Update, Debug", correct: false },
              {
                sugesstion: "Concentrate, Remote, User, Delete",
                correct: false,
              },
            ],
          },
          {
            question: "Różnica między put a patch?",
            sugesstions: [
              { sugesstion: "Obie mają tę samą funckję", correct: false },
              {
                sugesstion:
                  "PUT aktualizuje lub usuwa cały zasób / PATCH aktualizuje tylko cały zasób",
                correct: false,
              },
              {
                sugesstion:
                  "PUT aktualizuje lub tworzy cały zasób / PATCH aktualizuje cały zasób lub jego fragment",
                correct: true,
              },
              {
                sugesstion:
                  "PUT aktualizuje cały zasób lub jego fragment / PATCH służy do aktualizacji całego zasobu",
                correct: false,
              },
            ],
          },
          {
            question: "Co to jest relacyjna baza danych?",
            sugesstions: [
              {
                sugesstion:
                  "Relacyjna baza danych to rodzaj bazy danych, który pozwala przechowywać powiązane ze sobą elementy danych i zapewnia do nich dostęp",
                correct: true,
              },
              {
                sugesstion:
                  "Relacyjna baza danych to rodzaj bazy danych, który nie pozwala przechowywać danych tylko zapewnia do nich dostęp",
                correct: false,
              },
              {
                sugesstion:
                  "Relacyjna baza danych to rodzaj bazy danych, który pozwala przechowywać nie powiązane ze sobą elementy danych i nie zapewnia do nich dostępu",
                correct: false,
              },
              {
                sugesstion:
                  "Relacyjna baza danych to rodzaj bazy danych, który pozwala przechowywać nie powiązane ze sobą elementy danych i zapewnia do nich dostęp",
                correct: false,
              },
            ],
          },
          {
            question: "Czym różnią się interfejs i klasa abstrakcyjna?",
            sugesstions: [
              { sugesstion: "Maja tą samą funkcję", correct: false },
              {
                sugesstion:
                  "Interfejsy mogą mieć stan i nie definiują zachowania dla obiektów.",
                correct: false,
              },
              {
                sugesstion:
                  "Interfejsy nie mogą mieć stanu, służą do definiowania zachowania dla obiektów",
                correct: true,
              },
              {
                sugesstion: "Żadna z tych odpowiedzi nie jest prawidłowa",
                correct: false,
              },
            ],
          },
          {
            question: "Jaka jest różnica między join and union?",
            sugesstions: [
              {
                sugesstion:
                  "JOIN tworzy iloraz kartezjański i podzbiory / UNION tworzy tablice obiektów",
                correct: false,
              },
              {
                sugesstion:
                  "JOIN tworzy tablice obiektów / UNION umieszcza wiersze z zapytań jeden za drugim",
                correct: false,
              },
              {
                sugesstion:
                  "JOIN umieszcza wiersze z zapytań jeden za drugim / UNION tworzy iloczyn kartezjański i podzbiory",
                correct: false,
              },
              {
                sugesstion:
                  "JOIN tworzy iloczyn kartezjański i podzbiory / UNION umieszcza wiersze z zapytań jeden za drugim",
                correct: true,
              },
            ],
          },
          {
            question: "Co to jest JSP Page?",
            sugesstions: [
              {
                sugesstion:
                  "Java Server Page (JSP) to dokument tekstowy zawierający dwa typy tekstu: static data and JSP elements.",
                correct: true,
              },
              {
                sugesstion:
                  "Java Server Page (JSP) to dokument w formie zdjęcia który ma dwa rozszerzenia: PNG, JPGN",
                correct: false,
              },
              {
                sugesstion:
                  "Java Server Page (JSP) to baza dancyh która przechowuje zdjęcia",
                correct: false,
              },
              {
                sugesstion:
                  "Java Server Page (JSP) to serwer na którym można dodawać zdjęcia",
                correct: false,
              },
            ],
          },
          {
            question: "Rozwiń sktót the ACID",
            sugesstions: [
              {
                sugesstion: "Application Create Include Data",
                correct: false,
              },
              {
                sugesstion: "Atomicity Consistency Isolation Durable",
                correct: true,
              },
              {
                sugesstion: "Automatic Customer Insert Design",
                correct: false,
              },
              {
                sugesstion: "Administrator Coordinate Issue Database ",
                correct: false,
              },
            ],
          },
          {
            question: "Co to jest API Gateway?",
            sugesstions: [
              {
                sugesstion: "Wszystkie odpowiedzi są prawidłowe",
                correct: false,
              },
              { sugesstion: "Jest to baza danych.", correct: false },
              {
                sugesstion:
                  "Sa to mikro serwery które umożliwiają użytkownikowi wejścia i udostępnienie API",
                correct: false,
              },
              {
                sugesstion:
                  "Serwer, który jest jedynym możliwym punktem wejścia do systemu, hermetyzuje architekturę całego systemu i udostępnia API, które jest już dostosowane dla każdego klienta.",
                correct: true,
              },
            ],
          },
          {
            question: "Co jest najważniejszą częścią projektowania API?",
            sugesstions: [
              {
                sugesstion: "Dokumentacja",
                correct: true,
              },
              {
                sugesstion: "Spójność",
                correct: false,
              },
              { sugesstion: "Bezpieczeństwo", correct: false },
              { sugesstion: "Stabilność", correct: false },
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

  @media (orientation: landscape) {
    margin: 5rem 0;
  }
}
</style>


