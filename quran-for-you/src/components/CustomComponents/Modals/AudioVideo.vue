<template>
  <c-box v-if="media" zIndex="10000 !important">
    <c-modal
      :is-open="isOpen"
      :on-close="close"
      :closeOnOverlayClick="false"
      zIndex="10000 !important"
    >
      <c-modal-content class="audio-video-modal-content">
        <c-modal-header>{{ media.title }}</c-modal-header>
        <c-modal-close-button />
        <c-modal-body>
          <c-text textDecoration="underline">{{ media.sub_title }}</c-text>
          <c-text v-html="media.description" my="1.5vw" />
          <video-player
            v-if="media.type === 'Video'"
            class="vjs-custom-skin"
            ref="videoPlayer"
            :options="playerOptions"
            :playsinline="true"
          >
          </video-player>
          <av-circle
            style="margin-top:2vw;"
            v-if="media.type === 'Audio'"
            :outline-width="0"
            :progress-width="5"
            :outline-meter-space="5"
            :playtime="true"
            :cors-anonym="true"
            :audio-src="media.media_audio"
          ></av-circle>
        </c-modal-body>
      </c-modal-content>
      <c-modal-overlay />
    </c-modal>
  </c-box>
</template>

<style>
.audio-video-modal-content > section {
  min-width: 90vw;
}
.vjs-custom-skin > div {
  margin: auto;
  width: 100%;
  height: 30vw;
}
audio {
  width: 100%;
}
audio,
canvas {
  margin: auto;
}
</style>
<script>
import { CButton, CImage } from "@chakra-ui/vue";
require("videojs-youtube");

import "video.js/dist/video-js.css";

export default {
  name: "AudioVideo",
  props: ["isOpen", "close", "media"],
  data() {
    return {
      // videojs options
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        techOrder: ["youtube"],
        sources: [
          {
            type: "video/youtube",
            src:
              this.media && this.media.media_video
                ? this.media.media_video
                : undefined,
          },
        ],
        poster:
          this.media && this.media.media_image
            ? this.media.media_image
            : undefined,
      },
    };
  },
  components: {
    CButton,
    CImage,
  },
  created() {
    this.media && this.media.media_video
      ? console.log(this.media.media_video)
      : undefined;

    this.media &&
      this.media.type === "Video" &&
      (this.playerOptions.sources[0].src = this.media.media_video);
  },
};
</script>
