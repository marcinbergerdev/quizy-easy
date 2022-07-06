<template>
  <router-view></router-view>
</template>

<script>
</script>




<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
  background-image: url("./assets/background.png");
  background-size: 100%;
  background-position: 10%;
  background-color: var(--bg-color);
  overflow: hidden;
}

html {
  height: -webkit-fill-available;
  font-size: 10px;
  font-family: "Roboto", sans-serif;
}

:root {
  --bg-color: #419ed1;
}
</style>