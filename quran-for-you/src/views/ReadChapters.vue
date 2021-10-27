<template>
  <div w="100%" h="100%">
    <div class="home" v-if="isLoadingChapters === false">
      <Header />
      <AllChapters :chaptersList="chaptersList" />
      <Footer />
    </div>
    <Loading v-if="isLoadingChapters === true" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Desktopview/Layout/Header.vue";
import AllChapters from "@/components/Desktopview/Layout/AllChapters.vue";
import Footer from "@/components/CustomComponents/Footer.vue";
import Loading from "@/components/CustomComponents/Loading.vue";
import { getChapters } from "../apis";

export default {
  name: "ReadChapters",
  data() {
    return {
      isLoadingChapters: true,
      chaptersList: null,
    };
  },
  components: {
    Header,
    AllChapters,
    Footer,
    Loading,
  },
  methods: {
    async getChaptersList() {
      await getChapters().then((result) => {
        this.chaptersList = result.data.Chapters;
        this.isLoadingChapters = false;
      });
    },
  },
  created() {
    this.getChaptersList();
  },
};
</script>
