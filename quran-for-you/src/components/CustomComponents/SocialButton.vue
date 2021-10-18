<template>
  <c-box>
    <mq-layout mq="desktop">
      <c-button variant-color="gray" p="6" m="1" borderRadius="12px">
        <c-image :src="require(`@/assets/${link}.png`)" size="30px" mx="2" />
        <c-text fontSize="14px" mx="2" fontColor="#333337">{{ text }}</c-text>
      </c-button>
    </mq-layout>
    <mq-layout mq="mobile">
      <c-button variant-color="gray" p="3" m="1" borderRadius="6px">
        <c-image :src="require(`@/assets/${link}.png`)" size="16.2px" mx="2" />
        <c-text fontSize="8px" fontColor="#333337">{{ text }}</c-text>
      </c-button>
    </mq-layout>
  </c-box>
</template>

<script>
import { CButton, CImage } from "@chakra-ui/vue";

export default {
  name: "HelloWorld",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  props: ["link", "text"],
  components: {
    CButton,
    CImage,
  },
};
</script>
