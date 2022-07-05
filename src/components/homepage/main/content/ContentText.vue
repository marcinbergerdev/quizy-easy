<template>
  <article class="content-text">
    <p class="content-text__para" v-if="visible">You are welcome , have fun!</p>
    <p class="content-text__para" v-if="visible">
      Find out at what level your knowledge is.
    </p>
    <p class="content-text__para" v-if="visible">
      Answer 10 questions and find out if programming is for you!
    </p>
  </article>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  computed: {
    visible() {
      return this.windowWidth >= 768 ? true : false;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  onUnmounted() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>


<style lang="scss" scoped>
.content-text {
  font-family: "Indie Flower", cursive;
  &__para {
    text-align: end;
    line-height: 3;

    @media (min-width: 768px) {
      position: relative;
      right: 1rem;
      width: 29rem;
      font-size: 1.4rem;
    }
    @media (min-width: 1000px) {
      top: -2rem;
      width: 43.8rem;
    }
    @media (min-width: 1366px) {
      width: auto;
      font-size: 1.8rem;
    }
    @media (min-width: 1600px) {
      right: 3rem;
      font-size: 2.1rem;
    }
  }
}
</style>

