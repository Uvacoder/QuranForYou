<template>
  <c-box class="container">
    <c-heading class="heading">Read Chapter</c-heading>
    <mq-layout mq="desktop">
      <c-simple-grid :columns="3" mt="2vw" :spacing="10">
        <c-link
          fontSize="1.25vw"
          v-for="(chapter, index) in chaptersList"
          @click="routeToChapter(chapter)"
          :key="chapter.chapter_id"
          >{{ index + 1 }}. {{ chapter.name_english }}</c-link
        >
      </c-simple-grid>
    </mq-layout>
    <mq-layout mq="mobile">
      <c-flex direction="column">
        <c-link
          fontSize="3vw"
          my="2vw"
          v-for="(chapter, index) in chaptersList"
          @click="routeToChapter(chapter)"
          :key="chapter.chapter_id"
          >{{ index + 1 }}. {{ chapter.name_english }}</c-link
        >
      </c-flex>
    </mq-layout>
    <subscribe-form />
  </c-box>
</template>
<style></style>
<script>
import SubscribeForm from "../../CustomComponents/SubscribeForm.vue";

export default {
  name: "AllChapters",
  props: ["chaptersList"],
  methods: {
    routeToChapter(chapter) {
      this.$router.push({
        name: "Read Quran",
        params: { chapterId: chapter.chapter_id, groupId: "all" },
      });
    },
  },
  components: { SubscribeForm },
};
</script>
