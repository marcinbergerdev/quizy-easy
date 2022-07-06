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

html {
  font-size: 10px;
  font-family: "Roboto", sans-serif;
}

body {
  min-height: 100vh;
  background-image: url("./assets/background.png");
  background-size: 100%;
  background-position: 10%;
  background-color: var(--bg-color);
  overflow: hidden;
}

:root {
  --bg-color: #419ed1;
}
</style>