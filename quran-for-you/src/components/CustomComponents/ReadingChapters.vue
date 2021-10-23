<template>
  <mq-layout mq="desktop">
    <c-flex class="container">
      <c-heading class="heading" mb="1.5vw">Read Quran</c-heading>
      <c-simple-grid :columns="3">
        <c-text class="chapter-link">Chapter 1</c-text>
        <c-text class="chapter-link">Chapter 2</c-text>
        <c-text class="chapter-link">Chapter 3</c-text>
        <c-text class="chapter-link">Chapter 4</c-text>
        <c-text class="chapter-link">Chapter 5</c-text>
        <c-text class="chapter-link">Chapter 6</c-text>
        <c-text class="chapter-link">Chapter 7</c-text>
        <c-text class="chapter-link">Chapter 8</c-text>
        <c-text class="chapter-link">Chapter 9</c-text>
        <c-text class="chapter-link">Chapter 10</c-text>
        <c-text class="chapter-link">Chapter 11</c-text>
        <c-text class="chapter-link">Chapter 12</c-text>
        <c-text class="chapter-link">Chapter 13</c-text>
        <c-text class="chapter-link">Chapter 14</c-text>
        <c-text class="chapter-link">Chapter 15</c-text>
      </c-simple-grid>
      <c-flex class="subscribe-form-container">
        <SubscribeForm />
      </c-flex>
    </c-flex>
  </mq-layout>
</template>
<style>
.chapter-link {
  font-size: 1.675vw;
  margin-bottom: 1vw;
}
</style>
<script>
import { CFlex } from "@chakra-ui/vue";
import SubscribeForm from "@/components/Desktopview/Layout/SubscribeForm.vue";

export default {
  name: "ReadingChapters",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    CFlex,
    SubscribeForm,
  },
};
</script>
