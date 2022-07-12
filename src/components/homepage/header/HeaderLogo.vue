<template>
  <header>
    <h1 class="logo">Quizy Easy</h1>
  </header>
</template>




<style lang="scss" scoped>
header {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  font-size: 1.6rem;
  font-family: "Fuzzy Bubbles", cursive;
}

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
