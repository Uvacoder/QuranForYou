<template>
  <c-flex direction="column" w="100%">
    <c-heading class="heading">Related Media</c-heading>
    <vue-horizontal>
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
import VueHorizontal from "vue-horizontal";
import AudioVideo from "./Modals/AudioVideo.vue";
import Tile from "./Tile.vue";

export default {
  name: "RelatedMedia",
  props: ["relatedMedia", "verse"],
  data: function() {
    return { audioVideoItem: undefined, showAudioVideoModal: false };
  },
  components: {
    VueHorizontal,
    Tile,
    AudioVideo,
  },
  methods: {
    handleReadMore(item) {
      console.log("Item :", item);
      if (item.type === "Audio" || item.type === "Video") {
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
