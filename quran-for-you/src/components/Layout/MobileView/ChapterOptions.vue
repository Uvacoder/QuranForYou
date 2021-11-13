<template>
  <swipe-modal v-model="showModal">
    <template v-slot:header
      ><c-heading class="heading">Chapter Options</c-heading>
    </template>
    <template v-slot:body>
      <c-flex direction="column" p="2">
        <c-text class="filter-label">Search</c-text>
        <search :setFocus="setFocus" />
        <c-flex w="100%" pt="3vw">
          <c-text class="filter-label">Chapters</c-text>
          <c-icon name="chevron-down" size="5vw" color="black" />
        </c-flex>
        <c-select v-model="chapterId" class="filter-container custom-select">
          <option
            v-for="(chapterFilter, index) in allChapters"
            :value="String(chapterFilter.chapter_id)"
            :key="`${chapterFilter.chapter_id}-${index}`"
          >
            {{ chapterFilter.name_english }}
          </option>
        </c-select>
        <c-flex align="center" pt="3vw">
          <c-text class="filter-label">Verse No</c-text>
          <c-icon name="chevron-down" size="5vw" color="black" />
        </c-flex>
        <c-select v-model="verseFilter" class="filter-container custom-select">
          <option value="all">All</option>
          <option
            v-for="(verse_end, index) in verse_group_list"
            :value="
              index === 0
                ? `1 - ${verse_end}`
                : `${verse_group_list[index - 1] + 1} - ${verse_end}`
            "
            :key="`${verse_end}-${index}`"
            >{{
              index === 0
                ? `1 - ${verse_end}`
                : `${verse_group_list[index - 1] + 1} - ${verse_end}`
            }}</option
          >
        </c-select>
        <c-link
          mt="6vw"
          display="flex"
          @click="openReadIntroduction"
          class="filter-container"
        >
          Read Introduction
        </c-link>
      </c-flex>
    </template>
    <template v-slot:footer>
      <c-flex h="10vw"> <custom-button text="Close" :click="close"/></c-flex>
    </template>
  </swipe-modal>
</template>

<script>
import SwipeModal from "swipe-modal-2";
import CustomButton from "../../CustomComponents/CustomButton.vue";
import Search from "../../CustomComponents/Search/Search.vue";

export default {
  name: "ChapterOptions",
  props: [
    "show",
    "close",
    "allChapters",
    "chapterIdFilters",
    "setChapterId",
    "verse_group_list",
    "verse",
    "setVerse",
    "openReadIntroduction",
    "setFocus",
    "colorMode",
  ],
  components: { SwipeModal, CustomButton, Search },
  computed: {
    verseFilter: {
      get() {
        return this.verse;
      },
      set(newVerseId) {
        this.setVerse(newVerseId);
        return newVerseId;
      },
    },
    chapterId: {
      get() {
        return this.chapterIdFilters;
      },
      set(newChapterId) {
        this.setChapterId(newChapterId);
        return newChapterId;
      },
    },
    showModal: {
      get() {
        return this.show;
      },
      set(newShow) {
        newShow === "closed" && this.close();
        return newShow;
      },
    },
  },
};
</script>
