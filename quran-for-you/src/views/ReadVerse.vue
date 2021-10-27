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
import Header from "@/components/Layout/Desktopview/Header.vue";
import Verse from "@/components/Layout/Desktopview/Verse/index.vue";
import Footer from "@/components/CustomComponents/Footer.vue";
import Loading from "@/components/CustomComponents/Loading.vue";
import { mapGetters } from "vuex";

export default {
  name: "ReadVerse",
  data() {
    return { isLoadingChapter: true };
  },
  computed: {
    ...mapGetters(["getChapter"]),
    chapter() {
      return this.getChapter;
    },
  },
  created() {
    // await getChapters(this.$route.params.chapterId, undefined).then(
    //   (result) => {
    //     this.chapter = result.data.chapters[0];
    //     this.isLoadingChapter = false;
    //   }
    // );
    this.$store.dispatch("loadChapters", [this.$route.params.chapterId]);
    this.isLoadingChapter = false;
  },
  components: {
    Header,
    Verse,
    Footer,
    Loading,
  },
};
</script>
