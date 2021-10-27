<template>
  <div w="100%" h="100%">
    <div class="home" v-if="isLoadingChapter === false">
      <Header />
      <Verse :chapter="chapter" />
      <Footer />
    </div>
    <Loading v-if="isLoadingChapter === true" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Desktopview/Layout/Header.vue";
import Verse from "@/components/Desktopview/Layout/Verse.vue";
import Footer from "@/components/CustomComponents/Footer.vue";
import Loading from "@/components/CustomComponents/Loading.vue";

import { getChapters } from "../apis";

export default {
  name: "ReadVerse",
  data: function() {
    return { chapter: undefined, isLoadingChapter: true };
  },
  mounted: async function() {
    await getChapters(this.$route.params.chapterId, undefined).then(
      (result) => {
        this.chapter = result.data.chapters[0];
        this.isLoadingChapter = false;
      }
    );
  },
  components: {
    Header,
    Verse,
    Footer,
    Loading,
  },
};
</script>
