<template>
  <c-flex w="100%" h="100%">
    <div class="home" v-if="isLoadingChapter === false">
      <Header />
      <Verse :chapter="chapter" :getChapter="this.getChapter" />
      <Footer />
    </div>
    <Loading v-if="isLoadingChapter === true" />
  </c-flex>
</template>

<script>
// @ is an alias to /src
import Verse from "@/components/Layout/Desktopview/Verse/index.vue";
import Footer from "@/components/CustomComponents/Footer.vue";
import Loading from "@/components/CustomComponents/Loading.vue";
import { getChapters } from "../apis";
import Header from "../components/CustomComponents/Header.vue";

export default {
  name: "ReadVerse",
  data() {
    return {
      isLoadingChapter: true,
      chapter: null,
    };
  },
  methods: {
    getChapter(id) {
      this.isLoadingChapter === false && (this.isLoadingChapter = true);
      getChapters(id)
        .then((result) => {
          this.chapter = result.data.chapters[0];
        })
        .then(() => (this.isLoadingChapter = false));
    },
  },

  created() {
    this.getChapter(this.$route.params.chapterId);
  },
  components: {
    Verse,
    Footer,
    Loading,

    Header,
  },
};
</script>
