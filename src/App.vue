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

html {
  height: fill-available;
  font-size: 10px;
  font-family: "Roboto", sans-serif;
}

:root {
  --bg-color: #419ed1;
}

body {
  overflow: hidden;
  min-height: 100vh;
  min-height: fill-available;
}
</style>