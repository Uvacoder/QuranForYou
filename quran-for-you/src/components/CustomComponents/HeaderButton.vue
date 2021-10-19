<template>
  <mq-layout mq="mobile">
    <c-flex>
      <c-button class="btn" height="25px" mx="1em" borderRadius="3px" color="white">
        <c-text fontSize="10px">{{ text }}</c-text>
      </c-button>
    </c-flex>
  </mq-layout>
</template>

<style>
.btn {
  background: linear-gradient(#348dcf, #27367b);
}
</style>
<script>
import { CButton } from "@chakra-ui/vue";

export default {
  name: "HeaderButton",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  props: ["text"],
  components: {
    CButton,
  },
};
</script>
