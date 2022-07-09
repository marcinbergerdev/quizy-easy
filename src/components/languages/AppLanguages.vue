<template>
  <article class="container-languages">
    <header class="header">
      <h1 class="header__txt">Select language</h1>
    </header>

    <form class="select-languages">
      <div class="select-languages__box">
        <label for="eng" class="selected">EN</label>
        <input type="radio" name="lang" id="eng" />
      </div>

      <div class="select-languages__box">
        <label for="de">DE</label>
        <input type="radio" name="lang" id="de" />
      </div>
    </form>

    <button class="confrim-languages">Select</button>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container-languages {
  display: flex;
  flex-direction: column;
  width: 60%;
  max-width: 27rem;
  background-color: var(--color-quiz);
}

.header {
  padding: 1.5rem;
  font-size: 1.6rem;
  text-align: center;
  background-color: var(--header-quiz);
  color: var(--white);

  &__txt {
    font-weight: 100;
  }
}

.select-languages {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  min-height: 10rem;

  &__box {
    label {
      margin: 0 10px;
      padding: 5px;
      font-size: 2rem;
      background-color: #d9d9d9;
      border-radius: 1.6rem;
      box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.35);

      @media (min-width: 768px) {
        cursor: pointer;
      }
    }

    input {
      display: none;
    }

    .selected {
      padding: 5px;
      font-size: 2.4rem;
      background-color: var(--color-green);
    }
  }
}

.confrim-languages {
  margin: 0 0 1.5rem 0;
  padding: 5px 10px;
  width: 6rem;
  align-self: center;
  background-color: var(--header-quiz);
  color: var(--white);
  border: 0;
  border-radius: 22px;

  @media (min-width: 768px) {
    cursor: pointer;
  }
}
</style>