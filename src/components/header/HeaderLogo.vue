<template>
  <header>
    <h1 class="logo">Quizy Easy</h1>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>


<style lang="scss" scoped>
.logo {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  letter-spacing: 3px;
  font-family: "Fuzzy Bubbles", cursive;
  font-size: 1.6rem;
  color: #fff;

  @media (min-width: 330px) {
    font-size: 2.3rem;
  }
  @media (min-width: 768px) {
    font-size: 6rem;
     color: #000;
  }
}
</style>
