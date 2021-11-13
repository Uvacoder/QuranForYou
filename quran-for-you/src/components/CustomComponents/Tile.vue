<template>
  <c-flex class="tile-container" justify="start" direction="column">
    <c-image
      class="tile-image"
      :src="media.media_image"
      borderRadius="8px"
      objectFit="contain"
      width="100%"
    />
    <c-text class="tile-heading" fontWeight="bold" mt="0.35vw">
      {{ media.title }}</c-text
    >
    <c-text class="tile-subheading" my="0.15vw">{{ media.sub_title }}</c-text>
    <c-box class="tile-content" v-html="media.description" />
    <mq-layout mq="desktop">
      <c-flex h="2vw" w="max-content" mt="0.75vw">
        <custom-button
          text="Read More"
          fontSize="90% !important"
          padding="0 2vw !important"
          :click="handleReadMore"
        />
      </c-flex>
    </mq-layout>
    <mq-layout mq="mobile">
      <c-flex w="max-content" mt="2vw">
        <custom-button
          text="Read More"
          fontSize="2vw !important"
          padding="2vw 2vw !important"
          :click="handleReadMore"
        />
      </c-flex>
    </mq-layout>
  </c-flex>
</template>

<style>
.tile-image {
  border: 1px solid #cdcdcd;
}
.tile-content {
  width: 100%;
}
.tile-subheading {
  text-decoration: underline;
}
.tile-content > p {
  white-space: pre-wrap;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
}
@media only screen and (max-width: 600px) {
  .tile-container {
    width: 46.5% !important;
    margin-right: 5%;
  }
  .tile-heading {
    font-size: 3vw;
    margin-top: 1vw;
  }
  .tile-subheading {
    font-size: 2.5vw;
    margin-top: 0.5vw;
  }
  .tile-content {
    font-size: 2vw;
    margin-top: 0.5vw;
  }
  .tile-image {
    height: 25vw;
  }
}

@media only screen and (min-width: 601px) {
  .tile-container {
    width: 32.1% !important;
  }
  .tile-heading {
    font-size: 1.15vw;
  }
  .tile-subheading {
    font-size: 1vw;
    margin-bottom: 0.35vw;
  }
  .tile-content {
    font-size: 0.95vw;
    min-height: 5vw;
  }
  .tile-image {
    height: 15vw;
  }
}
</style>

<script>
import { CButton, CImage } from "@chakra-ui/vue";
import CustomButton from "./CustomButton.vue";

export default {
  name: "Tile",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  props: ["media", "handleClick"],
  methods: {
    handleReadMore() {
      this.handleClick(this.media);
    },
  },
  components: {
    CButton,
    CImage,
    CustomButton,
  },
};
</script>
