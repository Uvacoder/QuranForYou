<template>
  <c-box>
    <mq-layout mq="desktop">
      <c-button
        class="btn"
        :p="padding"
        :borderRadius="borderRadius"
        color="white"
      >
        <c-image :src="require(`@/assets/${link}.png`)" size="30px" mx="2" v-if="setIcon" />

        <c-text :fontSize="fontSize" mx="2">{{ text }}</c-text>
      </c-button>
    </mq-layout>
    <mq-layout mq="mobile">
      <c-button
        class="btn"
        :height="height"
        :borderRadius="borderRadius"
        color="white"
      >
        <c-text :fontSize="fontSize" mx="2">{{ text }}</c-text>
      </c-button>
    </mq-layout>
  </c-box>
</template>

<style>
.btn {
  background: linear-gradient(#348dcf, #27367b);
}
</style>
<script>
import { CButton } from "@chakra-ui/vue";

export default {
  name: "CustomButton",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  props: ["text", "borderRadius", "height", "width", "padding", "fontSize", "link", "setIcon"],
  components: {
    CButton,
  },
};
</script>
