<template>
  <c-flex w="100%" h="100%" justify="center" align="center">
    <c-spinner
      thickness="4px"
      speed="0.65s"
      empty-color="green.200"
      color="vue.500"
      size="xl"
    />
  </c-flex>
</template>

<script>
import { CSpinner } from "@chakra-ui/vue";

export default {
  name: "Loading",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    CSpinner,
  },
};
</script>
