<template>
  <div>
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./homepage/header/AppHeader.vue";
import AppMain from "./homepage/main/AppMain.vue";
import AppFooter from "./homepage/footer/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<style lang="scss" scoped>
</style>
