<template>
  <router-view></router-view>
</template>



<style lang="scss">
:root {
  --white: #fff;
  --bg-homepage: #419ed1;
  --bg-quiz: #001226;
  --header-quiz: #152538;
  --color-quiz: #E5E7E9;
  --color-triangle: #001226;

  --color-red: #E67F7F;
  --color-green: #7FE689;
  --color-blue: #7FC4E6;
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
</style>