<template>
  <main>
    <section class='section-container'>
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

<style lang="scss">
main {
  width: 100%;
  min-height: 100vh;
  background-image: url("../../assets/background.png");
  background-size: 100%;
  background-position: 10%;
  background-color: var(--bg-color);
}

.section-container{
   display: flex;
   flex-direction: column-reverse;
   justify-content: space-between;
   align-items: center;
   min-height: inherit;

   @media(min-width: 768px){
      flex-direction: row;
   }
}


</style>

