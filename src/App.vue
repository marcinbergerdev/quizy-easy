<template>
  <router-view></router-view>
</template>



<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh; /* fall-back */
  min-height: -moz-available;
  min-height: -webkit-fill-available;
  min-height: fill-available;
  background-image: url("./assets/background.png");
  background-size: 100%;
  background-position: 10%;
  background-color: var(--bg-color);
  overflow: hidden;
}

html {
  font-size: 10px;
  font-family: "Roboto", sans-serif;
}

:root {
  --bg-color: #419ed1;
}
</style>