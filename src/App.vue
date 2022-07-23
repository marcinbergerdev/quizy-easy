<template>
  <router-view v-slot="routerHomepageAnimation">
    <transition name="route" mode="out-in">
      <component :is="routerHomepageAnimation.Component"></component>
    </transition>
  </router-view>
</template>



<style lang="scss">
:root {
  --white: #fff;
  --black: #000;

  --bg-homepage: #419ed1;
  --bg-quiz: #001226;
  --bg-language: #d9d9d9;

  --header-quiz: #152538;
  --logo-quiz: #ebf7ff;
  --color-quiz: #e5e7e9;
  --color-triangle: #001226;
  --bg-answer: #d5d8dc;


  --color-incorrect: #e67f7f;
  --color-correct: #7fe689;
  --color-checked: #7fc4e6;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

html {
  font-size: 10px;
}


.route-enter-to,
.route-leave-from {
  filter: brightness(100%);
}

.route-enter-active,
.route-leave-active {
  transition: 0.5s ease-out;
}

.route-enter-from,
.route-leave-to {
  filter: brightness(30%);
}
</style>




