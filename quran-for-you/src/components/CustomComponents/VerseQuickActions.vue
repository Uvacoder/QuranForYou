<template>
  <c-flex class="verse-quick-actions-container" w="100%" my="auto">
    <mq-layout
      mq="desktop"
      style="height:100%; width:100%; margin-top:auto;margin-top:auto;"
    >
      <c-flex my="1vw" justify="space-between" align="center" h="100%">
        <div style="width:2vw ; height:2vw;" @click="goToPreviousVerse">
          <c-image
            :src="require(`@/assets/leftarrow.png`)"
            width="100%"
            objectFit="contain"
            cursor="pointer"
            @click="goToPreviousVerse"
          />
        </div>
        <c-flex w="32.5vw" h="100%" align="center" justify="space-between">
          <c-flex w="45%" h="100%">
            <button-outline
              text="Beginning Of Surah"
              :click="this.goToBeginningOfSurah"
              :colorMode="this.colorMode"
          /></c-flex>
          <c-flex w="45%" h="100%">
            <button-outline
              text="Read Full Chapter"
              :click="this.goToFullChapter"
              :colorMode="this.colorMode"
          /></c-flex>
        </c-flex>
        <div style="width:2vw ; height:2vw;" @click="goToNextVerse">
          <c-image
            :src="require(`@/assets/rightarrow.png`)"
            objectFit="contain"
            width="100%"
            cursor="pointer"
          />
        </div>
      </c-flex>
    </mq-layout>
    <mq-layout mq="mobile" style="height:100%; width:100%">
      <c-flex justify="space-between" align="center" h="100%">
        <div style="width:5vw ; height:5vw;" @click="goToPreviousVerse">
          <c-image
            :src="require(`@/assets/leftarrow.png`)"
            objectFit="contain"
            w="100%"
          />
        </div>
        <c-flex w="77.5%" h="100%" align="center" justify="space-between">
          <c-flex w="47.5%" h="100%">
            <button-outline
              text="Beginning Of Surah"
              :click="this.goToBeginningOfSurah"
              :colorMode="colorMode"
          /></c-flex>
          <c-flex w="47.5%" h="100%">
            <button-outline
              text="Read Full Chapter"
              :click="this.goToFullChapter"
              :colorMode="this.colorMode"
          /></c-flex>
        </c-flex>
        <div style="width:5vw ; height:5vw;" @click="goToNextVerse">
          <c-image
            :src="require(`@/assets/rightarrow.png`)"
            objectFit="contain"
            w="100%"
          /></div></c-flex
    ></mq-layout>
  </c-flex>
</template>
<style>
@media only screen and (max-width: 600px) {
  .verse-quick-actions-container {
    height: 10vw;
    margin-top: 2.5vw;
    margin-bottom: 7.5vw;
  }
}

@media only screen and (min-width: 601px) {
  .verse-quick-actions-container {
    height: 5vw;
    margin-bottom: 2vw;
  }
}
</style>

<script>
import ButtonOutline from "./ButtonOutline.vue";
export default {
  inject: ["$chakraColorMode"],
  components: { ButtonOutline },
  name: "VerseQuickActions",
  props: [
    "goToFullChapter",
    "goToBeginningOfSurah",
    "goToNextVerse",
    "goToPreviousVerse",
  ],
  computed: {
    colorMode() {
      return this.$chakraColorMode();
    },
  },
};
</script>
