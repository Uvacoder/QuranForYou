<template>
  <c-flex w="100%" h="100%">
    <div class="home" v-if="isLoadingChapters === false">
      <Header />
      <AllChapters :chaptersList="chaptersList" />
      <Footer />
    </div>
    <Loading v-if="isLoadingChapters === true" />
  </c-flex>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Layout/Desktopview/Header.vue";
import AllChapters from "@/components/Layout/Desktopview/AllChapters.vue";
import Footer from "@/components/CustomComponents/Footer.vue";
import Loading from "@/components/CustomComponents/Loading.vue";
import { mapGetters } from "vuex";

export default {
  name: "ReadChapters",

  computed: {
    ...mapGetters(["getChapterList", "getIsLoadingChapters"]),
    chaptersList() {
      return this.getChapterList;
    },
    isLoadingChapters() {
      return this.getIsLoadingChapters;
    },
  },
  components: {
    Header,
    AllChapters,
    Footer,
    Loading,
  },
  created() {
    this.$store.dispatch("loadChapters", [undefined, undefined]);
  },
};
</script>
