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
article {


  @media (min-width: 768px) {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
}

</style>

