<template>
  <article>
    <button class="start-button">Start Quiz!</button>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.start-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem 3rem;
  border-radius: 5rem;
  font-size: 1.4rem;
  letter-spacing: 2px;
  border: 0;
  background-color: #001226;
  color: #fff;
  opacity: 0.7;

  @media (min-width: 768px) {
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
}
</style>

