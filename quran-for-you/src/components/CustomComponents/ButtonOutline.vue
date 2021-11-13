<template>
  <c-box h="100%" w="100%">
    <c-button
      class="outline-btn"
      :p="padding"
      :borderRadius="borderRadius"
      :size="size"
      :color="colorMode === 'dark' ? 'red' : 'black'"
      borderColor="white"
      borderWidth="1px"
      :mx="marginx"
      :fontSize="fontSize"
      variant="ghost"
      @click="click"
      :boxShadow="
        colorMode === 'dark'
          ? 'rgba(0, 0, 0, 0.2) 0px 2px 8px 0px'
          : 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
      "
    >
      <c-image
        :src="require(`@/assets/${link}.png`)"
        size="30px"
        mx="2"
        v-if="setIcon"
      />
      <c-text mx="2">{{ text }}</c-text>
    </c-button>
  </c-box>
</template>

<style>
.outline-btn {
  height: 100% !important;
  width: 100%;
}
@media only screen and (max-width: 600px) {
  .outline-btn {
    font-size: 2.5vw !important;
  }
}

@media only screen and (min-width: 601px) {
  .outline-btn {
    font-size: 1vw;
  }
}
</style>
<script>
import { CButton } from "@chakra-ui/vue";

export default {
  name: "ButtonOutline",
  props: [
    "text",
    "borderRadius",
    "height",
    "width",
    "padding",
    "link",
    "setIcon",
    "size",
    "marginx",
    "click",
    "colorMode",
    "fontSize",
  ],
  components: {
    CButton,
  },
};
</script>
