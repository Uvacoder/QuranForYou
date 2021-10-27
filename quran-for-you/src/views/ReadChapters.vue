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
import Header from "@/components/Layout/Desktopview/Header.vue";
import AllChapters from "@/components/Layout/Desktopview/AllChapters.vue";
import Footer from "@/components/CustomComponents/Footer.vue";
import Loading from "@/components/CustomComponents/Loading.vue";
import { mapGetters } from "vuex";

export default {
  name: "ReadChapters",
  data() {
    return {
      isLoadingChapters: true,
    };
  },
  computed: {
    ...mapGetters(["getChapterList"]),
    chaptersList() {
      return this.getChapterList;
    },
  },
  components: {
    Header,
    AllChapters,
    Footer,
    Loading,
  },
  methods: {},
  created() {
    this.$store.dispatch("loadChapters", [1, 7]);
    this.isLoadingChapters = false;
  },
};
</script>
