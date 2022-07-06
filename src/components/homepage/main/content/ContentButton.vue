<template>
  <article>
    <button class="start-button">Start Quiz!</button>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
article {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.start-button {
  padding: 1.5rem 3rem;
  font-size: 1.4rem;
  text-align: center;
  letter-spacing: 2px;
  border-radius: 5rem;
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

