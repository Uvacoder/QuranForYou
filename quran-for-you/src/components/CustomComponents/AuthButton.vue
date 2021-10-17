<template>
  <mq-layout mq="desktop">
    <c-button class="btn" p="8" m="1" borderRadius="10px" color="white">
      <c-text fontSize="24px" mx="2">{{text}}</c-text>
    </c-button>
  </mq-layout>
</template>

<style>
    .btn {
        background: linear-gradient(#348DCF, #27367B);
    }
</style>
<script>
import { CButton } from "@chakra-ui/vue";

export default {
  name: "AuthButton",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  props: ['text'],
  components: {
    CButton,
  },
};
</script>
