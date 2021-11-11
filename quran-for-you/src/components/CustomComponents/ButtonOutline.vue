<template>
  <c-box h="100%" w="100%">
    <c-button
      class="outline-btn"
      :p="padding"
      :borderRadius="borderRadius"
      color="black"
      :size="size"
      :mx="marginx"
      variant="ghost"
      @click="click"
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
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  height: 100%;
  width: 100%;
}
@media only screen and (max-width: 600px) {
  .outline-btn {
    font-size: 2.5vw;
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
  inject: ["$chakraColorMode", "$toggleColorMode"],
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
  ],
  components: {
    CButton,
  },
};
</script>
