<template>
  <c-box h="100%">
    <div class="home" v-if="isLoadingChapters === false">
      <Header />
      <AllChapters :chaptersList="chapters" />
      <Footer />
    </div>
    <Loading v-if="isLoadingChapters === true" />
  </c-box>
</template>

<script>
import AllChapters from "@/components/Layout/Desktopview/AllChapters.vue";
import Footer from "@/components/CustomComponents/Footer.vue";
import Loading from "@/components/CustomComponents/Loading.vue";
import { mapGetters } from "vuex";
import Header from "../components/CustomComponents/Header.vue";

export default {
  name: "ReadChapters",
  computed: {
    ...mapGetters(["chapters", "isLoadingChapters"]),
  },
  components: {
    AllChapters,
    Footer,
    Loading,
    Header,
  },
};
</script>
