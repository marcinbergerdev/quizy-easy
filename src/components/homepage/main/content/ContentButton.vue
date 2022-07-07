<template>
  <article>
    <router-link class='start-button' to="/quiz">Start Quiz!</router-link>
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
  padding: 1.5rem;
  font-size: 1.4rem;
  text-align: center;
  text-decoration: none;
  letter-spacing: 2px;
  border-radius: 5rem;
  border: 0;
  background-color: var(--color-triangle);
  color: var(--white);

  @media (min-width: 280px) {
    padding: 1.5rem 2rem;
  }
  @media (min-width: 300px) {
    padding: 1.5rem 3rem;
  }

  @media (min-width: 768px) {
    opacity: 0.7;
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
}
</style>

