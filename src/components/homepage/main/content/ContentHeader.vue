<template>
  <header>
    <h2 class="header-text">Test your frontend developer knowledge.</h2>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  text-align: center;

  @media (min-width: 768px) {
    top: 50%;
    left: 0;
    bottom: auto;
    transform: translateY(-50%);
  }
}
</style>

