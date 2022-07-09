<template>
  <header>
    <slot></slot>
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
</style>