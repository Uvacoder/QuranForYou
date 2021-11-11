<template>
  <c-flex class="tile-container" justify="start" direction="column">
    <c-image
      class="tile-image"
      :src="media.media_image"
      borderRadius="8px"
      objectFit="contain"
      width="100%"
    ></c-image>
    <c-text class="tile-heading" fontWeight="bold" mt="0.35vw">
      {{ media.title }}</c-text
    >
    <c-text class="tile-subheading" my="0.15vw">{{ media.sub_title }}</c-text>
    <c-text class="tile-content" v-html="media.description" />
    <mq-layout mq="desktop">
      <c-flex h="2vw" w="max-content" mt="0.75vw">
        <custom-button
          text="Read More"
          fontSize="90% !important"
          padding="0 2vw !important"
          :click="handleReadMore"
      /></c-flex>
    </mq-layout>
    <mq-layout mq="mobile">
      <c-flex h="5vw" w="max-content" mt="1vw">
        <custom-button
          text="Read More"
          fontSize="2vw"
          padding="0"
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
@media only screen and (max-width: 600px) {
  .tile-container {
    width: 46.5%;
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
    margin-top: 0.35vw;
  }
  .tile-image {
    height: 25vw;
  }
}

@media only screen and (min-width: 601px) {
  .tile-container {
    width: 32.65%;
    margin-right: 1%;
  }
  .tile-heading {
    font-size: 1vw;
  }
  .tile-subheading {
    font-size: 0.95vw;
  }
  .tile-content {
    font-size: 0.75vw;
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
  created() {
    console.log;
  },
};
</script>
