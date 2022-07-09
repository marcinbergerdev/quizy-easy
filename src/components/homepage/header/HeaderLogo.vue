<template>
  <header-cards>
    <h1 class="logo">Quizy Easy</h1>
  </header-cards>
</template>

<script>
import HeaderCards from "../../cards/HeaderCards.vue";

export default {
  components: {
    HeaderCards,
  },
};
</script>


<style lang="scss" scoped>
.logo {
  position: relative;
  letter-spacing: 3px;

  color: #fff;
  @media (orientation: landscape) and (max-width: 768px) {
    top: 10%;
    left: -85%;
  }

  @media (min-width: 330px) {
    font-size: 2.3rem;
  }
  @media (min-width: 768px) {
    font-size: 6rem;
    color: #000;
  }
}
</style>
