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
  height: -webkit-fill-available;
  font-size: 10px;
  font-family: "Roboto", sans-serif;
}

body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
  overflow: hidden;
}

:root {
  --bg-color: #419ed1;
}
</style>