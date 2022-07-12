<template>
  <nav>
    <ul class="questions-list">
      <question-item
        v-for="(option, index) in questions"
        :key="index"
        :id="index"
        :question="option.question"
        :answers="option.sugesstion"
      ></question-item>
    </ul>
  </nav>
</template>

<script>
import QuestionItem from "./QuestionItem.vue";

export default {
  components: {
    QuestionItem,
  },
  data() {
    return {
      questions: [
        {
          question:
            "How do you take the best decision among several possibilities?",
          sugesstion: [
            "Usce semper hendrerit velit lacinia placerat.",
            "Donec pulvinar sit amet risus i eleifend.",
            "Maecenas dignissim venenatis fermentum.",
            "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
          ],
        },
        // {
        //   question: "How do you take the best design ever?",
        //   sugesstion: [
        //     "Usce semper hendrerit velit lacinia placerat.",
        //     "Donec pulvinar sit amet risus id eleifend.",
        //     "Maecenas dignissim venenatis fermentum.",
        //     "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
        //   ],
        // },
        // {
        //   question: "How get only one element from array?",
        //   sugesstion: [
        //     "Usce semper hendrerit velit lacinia placerat.",
        //     "Donec pulvinar sit amet risus id eleifend.",
        //     "Maecenas dignissim venenatis fermentum.",
        //     "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
        //   ],
        // },
        // {
        //   question: "What makes decision-making effective?",
        //   sugesstion: [
        //     "Usce semper hendrerit velit lacinia placerat.",
        //     "Donec pulvinar sit amet risus id eleifend.",
        //     "Maecenas dignissim venenatis fermentum.",
        //     "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
        //   ],
        // },
        // {
        //   question: "How do you make a decision when both options are good?",
        //   sugesstion: [
        //     "Usce semper hendrerit velit lacinia placerat.",
        //     "Donec pulvinar sit amet risus id eleifend.",
        //     "Maecenas dignissim venenatis fermentum.",
        //     "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
        //   ],
        // },
        // {
        //   question:
        //     "What do you do when you have to make an important decision?",
        //   sugesstion: [
        //     "Usce semper hendrerit velit lacinia placerat.",
        //     "Donec pulvinar sit amet risus id eleifend.",
        //     "Maecenas dignissim venenatis fermentum.",
        //     "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
        //   ],
        // },
        // {
        //   question: "What should you not do while making a decision?",
        //   sugesstion: [
        //     "Usce semper hendrerit velit lacinia placerat.",
        //     "Donec pulvinar sit amet risus id eleifend.",
        //     "Maecenas dignissim venenatis fermentum.",
        //     "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
        //   ],
        // },
        // {
        //   question:
        //     "How can you determine if your chosen decision will benefit you?",
        //   sugesstion: [
        //     "Usce semper hendrerit velit lacinia placerat.",
        //     "Donec pulvinar sit amet risus id eleifend.",
        //     "Maecenas dignissim venenatis fermentum.",
        //     "Nulla porttitor nunc tellus, vel consequat risus porta nec.",
        //   ],
        // },
      ],
    };
  },
};
</script>

<style lang="scss">
</style>