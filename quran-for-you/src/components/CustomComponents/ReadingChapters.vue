<template>
  <mq-layout mq="desktop">
    <c-flex class="container">
      <c-heading class="heading">Read Chapter</c-heading>
      <c-simple-grid :columns="3" mt="1vw">
        <c-link
          fontSize="1vw"
          p="1vw"
          class="chapter-link"
          v-for="(chapter, index) in chaptersList"
          @click="routeToChapter(chapter)"
          :key="chapter.chapter_id"
          >{{ index + 1 }}. {{ chapter.name_english }}</c-link
        >
      </c-simple-grid>
      <c-flex class="subscribe-form-container">
        <SubscribeForm />
      </c-flex>
    </c-flex>
  </mq-layout>
</template>
<style></style>
<script>
import SubscribeForm from "@/components/Desktopview/Layout/SubscribeForm.vue";

export default {
  name: "ReadingChapters",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  props: ["chaptersList"],
  methods: {
    routeToChapter(chapter) {
      console.log("Chapter here: ", chapter);
      this.$router.push({
        name: "ReadChaptersVersePage",
        params: { chapterId: chapter.chapter_id, groupId: "all", chapter },
      });
    },
  },
  components: {
    SubscribeForm,
  },
};
</script>
