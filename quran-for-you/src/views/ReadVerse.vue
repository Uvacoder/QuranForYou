<template>
  <c-flex w="100%" h="100%">
    <div class="home" v-if="isLoadingChapter === false">
      <Header />
      <Verse :chapter="chapter" />
      <Footer />
    </div>
    <Loading v-if="isLoadingChapter === true" />
  </c-flex>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Layout/Desktopview/Header.vue";
import Verse from "@/components/Layout/Desktopview/Verse/index.vue";
import Footer from "@/components/CustomComponents/Footer.vue";
import Loading from "@/components/CustomComponents/Loading.vue";
import { getChapters } from "../apis";

export default {
  name: "ReadVerse",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  data() {
    return {
      isLoadingChapter: true,
      chapter: null,
    };
  },

  created() {
    getChapters(this.$route.params.chapterId)
      .then((result) => (this.chapter = result.data.chapters[0]))
      .then(() => (this.isLoadingChapter = false));
  },
  components: {
    Header,
    Verse,
    Footer,
    Loading,
  },
};
</script>
