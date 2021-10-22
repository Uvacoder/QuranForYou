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

export default {
  name: "ReadChaptersPage",
  components: {
    Header,
    ReadingChapters,
    Footer,
  },
};
</script>
