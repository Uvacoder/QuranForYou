<template>
  <c-box h="100%">
    <loading v-if="isLoadingArticles" />
    <c-box v-else-if="!isLoadingArticles">
      <Header />
      <c-box mx="2vw" mt="0.75vw">
        <c-box v-for="(i, index) in Object.keys(articles)" :key="index">
          <related-media
            :relatedMedia="articles[i]"
            :type="i"
            :title="Object.keys(articles)[index]"
          />
          <c-divider mt="3vw" />
        </c-box>
      </c-box>
      <Footer />
    </c-box>
  </c-box>
</template>
<script>
import { getRelatedMediaAll } from "../apis";
import Footer from "../components/CustomComponents/Footer.vue";
import Header from "../components/CustomComponents/Header.vue";
import Loading from "../components/CustomComponents/Loading.vue";
import RelatedMedia from "../components/CustomComponents/RelatedMedia.vue";

export default {
  components: { Loading, RelatedMedia, Header, Footer },
  name: "Articles",
  data() {
    return {
      isLoadingArticles: true,
      articles: undefined,
      chapterId: undefined,
      groupId: undefined,
    };
  },
  created() {
    this.isLoadingArticles === false && (this.isLoadingArticles = true);
    getRelatedMediaAll(this.chapterId || 1, this.groupId || 7)
      .then((result) => {
        this.articles = result.data;
        this.isLoadingArticles = false;
      })
      .catch((error) => {
        this.isLoadingArticles = false;
      });
  },
};
</script>
