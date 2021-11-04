<template>
  <c-box>
    <mq-layout mq="desktop">
      <c-flex class="container">
        <c-heading class="heading">Read Chapter</c-heading>
        <c-simple-grid :columns="3" mt="2vw" :spacing="10">
          <c-link
            fontSize="1.25vw"
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
    <mq-layout mq="mobile">
      <c-flex direction="column" align="center" m="3vw">
        <c-heading class="heading-mobile">Read Chapter</c-heading>
        <c-flex direction="column" align="center">
          <c-link
            fontSize="3vw"
            my="2vw"
            v-for="(chapter, index) in chaptersList"
            @click="routeToChapter(chapter)"
            :key="chapter.chapter_id"
            >{{ index + 1 }}. {{ chapter.name_english }}</c-link
          >
        </c-flex>
        <c-flex class="subscribe-form-container">
          <SubscribeForm />
        </c-flex>
      </c-flex>
    </mq-layout>
  </c-box>
</template>
<style></style>
<script>
import SubscribeForm from "@/components/Layout/Desktopview/SubscribeForm.vue";

export default {
  name: "AllChapters",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  props: ["chaptersList"],
  methods: {
    routeToChapter(chapter) {
      this.$router.push({
        name: "ReadVerse",
        params: { chapterId: chapter.chapter_id, groupId: "all" },
      });
    },
  },
  components: {
    SubscribeForm,
  },
};
</script>
