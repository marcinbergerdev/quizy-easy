<template>
  <app-header></app-header>
</template>

<script>
import AppHeader from './components/header/AppHeader.vue';

export default {
  components:{
    AppHeader
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
</style>