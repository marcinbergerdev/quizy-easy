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
  --bg-homepage: #419ed1;
  --bg-quiz: #001226;
  --header-quiz: #152538;
  --color-quiz: #e5e7e9;
  --color-triangle: #001226;

  --color-red: #e67f7f;
  --color-green: #7fe689;
  --color-blue: #7fc4e6;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
  font-family: "Roboto", sans-serif;
}

body {
  overflow: hidden;
}


.route-leave-from {
  filter: brightness(100%)
}

.route-leave-active {
  transition: 0.3s ease-out;
}

.route-leave-to {
  filter: brightness(30%)
}
</style>