<template>
  <main class="app-main">
    <section class="section-container">
      <content-header></content-header>
      <content-button></content-button>
      <content-text></content-text>
    </section>
  </main>
</template>

<script>
import ContentHeader from "./content/ContentHeader.vue";
import ContentButton from "./content/ContentButton.vue";
import ContentText from "./content/ContentText.vue";

export default {
  components: {
    ContentHeader,
    ContentButton,
    ContentText,
  },
};
</script>

<style lang="scss" scoped>
.app-main {
  position: relative;
  min-height: 100vh;
  background-image: url("../../../assets/background.png");
  background-size: 100%;
  background-position: 10%;
  background-color: var(--bg-homepage);


  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    transform: rotate(90deg);
    border: solid transparent;
    border-width: 50vw;

    @media (orientation: landscape) and (max-width: 768px) {
      border-width: 30vw;
    }
  }

  &::before {
    top: 0;
    left: 0;
    border-left-color: var(--color-triangle);
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 1);

    @media (min-width: 768px) {
      width: 100%;
      transform: rotate(0deg);
      border-width: 50vh 40vw;
      border-right-color: var(--color-triangle);
    }
  }

  &::after {
    bottom: 0;
    right: 0;
    border-right-color: var(--color-triangle);

    @media (min-width: 768px) {
      display: none;
    }
  }
}

.section-container {
  color: var(--white);
}
</style>

