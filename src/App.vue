<template>
  <app-header></app-header>
  <app-main></app-main>
  
</template>

<script>
import AppHeader from './components/header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue';

export default {
  components:{
    AppHeader,
    AppMain
  }
}
</script>




<style lang="scss">
*,*::before,*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 10px;
  font-family: 'Roboto', sans-serif;
}

:root{
  --bg-color: #419ED1;
}

body{
  overflow: hidden;
}
</style>