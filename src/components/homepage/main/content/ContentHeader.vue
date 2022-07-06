<template>
  <header>
    <h2 class="header-text">Test your frontend developer knowledge.</h2>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-text {

  width: 15rem;
  font-size: 1.4rem;
  text-align: center;

  @media (min-width: 330px) {
    font-size: 1.7rem;
  }
  @media (min-width: 430px) {
    width: 20rem;
    font-size: 2rem;
  }
  @media (min-width: 490px) {
    width: auto;
  }

  @media (min-width: 768px) {
    width: 20rem;
    text-align: start;
    font-size: 4rem;
  }

  @media (min-width: 1000px) {
    width: 40rem;
    font-size: 3.4rem;
  }
  @media (min-width: 1366px) {
    width: 45rem;
    line-height: 1.4;
    font-size: 4.5rem;
  }
}
</style>

