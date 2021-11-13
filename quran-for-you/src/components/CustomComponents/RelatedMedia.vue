<template>
  <c-flex direction="column" w="100%">
    <c-flex align="center" justify="space-between" my="1vw">
      <c-heading class="heading">{{ title || "Related Media" }}</c-heading>
      <c-link
        v-if="showSeeAll"
        align="center"
        justify="center"
        as="router-link"
        to="/articles"
        >See All
        <c-icon name="chevron-right" size="1.35vw" color="black" mt="-0.15vw" />
      </c-link>
    </c-flex>
    <vue-horizontal
      responsive
      ref="horizontal"
      @scroll-debounce="onScrollDebounce"
      :displacement="displacement"
    >
      <tile
        v-for="(media, index) in relatedMedia"
        v-bind:key="media.title + index"
        v-bind:media="media"
        v-bind:handleClick="handleReadMore"
      />
    </vue-horizontal>
    <audio-video
      :close="closeAudioVideo"
      :media="audioVideoItem"
      :isOpen="showAudioVideoModal"
    />
  </c-flex>
</template>

<script>
function observeVisibility(element, callback) {
  const observer = new IntersectionObserver(
    (records) => {
      callback(records.find((record) => record.isIntersecting));
    },
    { rootMargin: "10% 0% 10% 0%", threshold: 1.0 }
  );
  observer.observe(element);
}
import VueHorizontal from "vue-horizontal";
import AudioVideo from "./Modals/AudioVideo.vue";
import Tile from "./Tile.vue";

export default {
  name: "RelatedMedia",
  props: ["relatedMedia", "showSeeAll", "title", "type"],
  data: function() {
    return {
      audioVideoItem: undefined,
      showAudioVideoModal: false,
      hasPrev: false,
      hasNext: false,
      interval: null,
      displacement: 0.4,
    };
  },
  components: {
    VueHorizontal,
    Tile,
    AudioVideo,
  },
  mounted() {
    observeVisibility(this.$refs.horizontal.$el, (visible) => {
      if (visible) {
        this.startRelatedMediaScroll();
      } else {
        this.stopRelatedMediaScroll();
      }
    });
  },
  watch: {
    showAudioVideoModal(newVal, _) {
      newVal === true
        ? this.stopRelatedMediaScroll()
        : this.startRelatedMediaScroll();
    },
  },
  destroyed() {
    this.stopRelatedMediaScroll();
  },

  methods: {
    stopRelatedMediaScroll() {
      clearInterval(this.interval);
    },
    startRelatedMediaScroll() {
      this.interval = setInterval(this.play, 3000);
    },
    onScrollDebounce({ hasNext, hasPrev }) {
      this.hasPrev = hasPrev;
      this.hasNext = hasNext;
    },
    play() {
      console.log("Play");
      if (this.hasNext !== this.hasPrev) {
        this.forward = !this.forward;
      }

      if (this.forward && this.hasNext) {
        this.$refs.horizontal.next();
      } else if (!this.forward && this.hasPrev) {
        this.$refs.horizontal.prev();
      }

      // if (!this.hasNext && this.hasPrev) {
      //   this.$refs.horizontal.sc();
      //   this.displacement = 1.0;
      //   return;
      // }

      // if (this.hasNext) {
      //   this.$refs.horizontal.next();
      //   // After first nav, change displacement window to just 60%
      //   this.displacement = 0.2;
      // }
    },
    handleReadMore(item) {
      this.type &&
        !item.type &
          (item.type = this.type.charAt(0).toUpperCase() + this.type.slice(1));
      if (
        (this.type && (this.type === "audio" || this.type === "video")) ||
        item.type === "Audio" ||
        item.type === "Video"
      ) {
        this.openAudioVideo(item);
      }
    },
    openAudioVideo(item) {
      console.log("Item: ", item);
      this.audioVideoItem = item;
      this.showAudioVideoModal = true;
    },
    closeAudioVideo() {
      this.audioVideoItem = undefined;
      this.showAudioVideoModal = false;
    },
  },
};
</script>
