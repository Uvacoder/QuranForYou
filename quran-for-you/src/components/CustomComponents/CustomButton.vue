<template>
  <c-button
    class="custom-button"
    :p="padding"
    :borderRadius="borderRadius"
    h="100%"
    w="100%"
    :isLoading="isLoading"
    @click="click"
    :fontSize="fontSize"
  >
    <c-image
      :src="require(`@/assets/${link}.png`)"
      size="30px"
      mx="2"
      v-if="setIcon"
    />

    {{ text }}
  </c-button>
</template>

<style>
.custom-button {
  color: white;
  background: linear-gradient(#348dcf, #27367b);
}

@media only screen and (max-width: 600px) {
  .custom-button {
    font-size: 3vw;
    padding: 3vw 4vw;
  }
}

@media only screen and (min-width: 601px) {
  .custom-button {
    font-size: 1.25vw;
    padding: 1.25vw 4vw;
  }
}
</style>
<script>
import { CButton } from "@chakra-ui/vue";

export default {
  name: "CustomButton",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  props: [
    "text",
    "borderRadius",
    "height",
    "width",
    "padding",
    "fontSize",
    "link",
    "setIcon",
    "size",
    "click",
    "isLoading",
  ],
  components: {
    CButton,
  },
};
</script>
