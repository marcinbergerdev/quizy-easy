<template>
  <footer class="footer" v-if="visible">
    <h3 class="footer__txt">
      Check yourself and see if this industry will give you any difficulties.
    </h3>
  </footer>
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
.footer {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);

  &__txt {
    font-size: 1.3rem;
    font-weight: 100;
  }

  @media (min-width: 1024px) {
    &__txt {
      font-size: 1.7rem;
    }
  }
}
</style>
