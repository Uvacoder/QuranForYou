<template>
  <div class="home">
    <Header />
    <ReadChapterVerse />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Desktopview/Layout/Header.vue";
import ReadChapterVerse from "@/components/CustomComponents/ReadChapterVerse.vue";
import Footer from "@/components/CustomComponents/Footer.vue";

export default {
  name: "ReadChaptersVersePage",
  components: {
    Header,
    ReadChapterVerse,
    Footer,
  },
};
</script>
