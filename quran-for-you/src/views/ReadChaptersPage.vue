<template>
  <div class="home">
    <Header />
    <ReadingChapters />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Desktopview/Layout/Header.vue";
import ReadingChapters from "@/components/CustomComponents/ReadingChapters.vue";
import Footer from "@/components/CustomComponents/Footer.vue";
import { getChapterList } from "../Data/Chapter";

export default {
  name: "ReadChaptersPage",
  data() {
    return {
      chapterList: null
    }
  },
  components: {
    Header,
    ReadingChapters,
    Footer,
  },
  methods: {
    async getChapters(token, chapter, groupId) {
      this.chapterList = await getChapterList(token, chapter, groupId);
    },
  },
  mounted() {
    this.getChapters('', 1, 7)
  }
};
</script>
