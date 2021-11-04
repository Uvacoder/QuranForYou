<template>
  <c-box>
    <mq-layout mq="desktop">
      <c-button
        class="btn"
        :p="padding"
        :borderRadius="borderRadius"
        color="black"
        :size="size"
        :mx="marginx"
        variant="ghost"
      >
        <c-image
          :src="require(`@/assets/${link}.png`)"
          size="30px"
          mx="2"
          v-if="setIcon"
        />

        <c-text :fontSize="fontSize" mx="2">{{ text }}</c-text>
      </c-button>
    </mq-layout>
    <mq-layout mq="mobile">
      <c-button
        class="btn"
        :height="height"
        :padding="padding"
        :borderRadius="borderRadius"
        color="black"
        :size="size"
        variant="ghost"
      >
        <c-text :fontSize="fontSize" mx="2">{{ text }}</c-text>
      </c-button>
    </mq-layout>
  </c-box>
</template>

<style>
.btn {
  background: rgba(255, 255, 255, 0.87);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
    "fontSize",
    "link",
    "setIcon",
    "size",
    "marginx"
  ],
  components: {
    CButton,
  },
};
</script>
