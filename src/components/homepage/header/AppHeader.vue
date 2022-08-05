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
}

.logo {
  position: relative;
  letter-spacing: 3px;
  font-family: "Fuzzy Bubbles", cursive;
  font-size: 1rem;
  color: #fff;

  @media (orientation: landscape) and (max-width: 768px) {
    top: 10%;
    left: -85%;
  }

  @media (min-width: 280px) {
    font-size: 1.7rem;
  }
  @media (min-width: 370px) {
    font-size: 2.8rem;
  }
  @media (min-width: 768px) {
    font-size: 6rem;
    color: #000;
  }
}
</style>
