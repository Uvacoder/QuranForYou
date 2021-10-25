<template>
  <div class="home">
    <Header />
    <ReadingChapters :chaptersList="chaptersList" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Desktopview/Layout/Header.vue";
import ReadingChapters from "@/components/CustomComponents/ReadingChapters.vue";
import Footer from "@/components/CustomComponents/Footer.vue";
import { getChapters } from "../apis";

export default {
  name: "ReadChaptersPage",
  data() {
    return {
      chaptersList: null,
    };
  },
  components: {
    Header,
    ReadingChapters,
    Footer,
  },
  mounted() {
    getChapters().then((result) => (this.chaptersList = result.data.Chapters));
  },
};
</script>
