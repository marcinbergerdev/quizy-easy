<template>
  <main>
    <section class="section-container">
      <content-header></content-header>
      <content-button></content-button>
      <content-text></content-text>
    </section>
  </main>
  <footer-text></footer-text>
</template>

<script>
import ContentHeader from "./content/ContentHeader.vue";
import ContentButton from "./content/ContentButton.vue";
import ContentText from "./content/ContentText.vue";
import FooterText from '../footer/FotterText.vue';

export default {
  components: {
    ContentHeader,
    ContentButton,
    ContentText,
    FooterText
  },
};
</script>

<style lang="scss">
main {
  min-height: 100vh;
  background-image: url("../../../assets/background.png");
  background-size: 100%;
  background-position: 10%;
  background-color: var(--bg-color);

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    transform: rotate(90deg);
    border: solid transparent;
    border-width: 50vw;


  }

  &::before {
    top: 0;
    left: 0;
    border-left-color: #001226;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 1);

    @media (min-width: 768px) {
      width: 100%;
      transform: rotate(0deg);
      border-width: 50vh 40vw;
      border-right-color: #001226;
    }
  }

  &::after {
    bottom: 0;
    right: 0;
    border-right-color: #001226;

    @media (min-width: 768px) {
      display: none;
    }
  }
}

.section-container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  min-height: inherit;
  color: #fff;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}


</style>

