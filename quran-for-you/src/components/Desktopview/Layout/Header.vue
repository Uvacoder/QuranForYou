<template>
  <mq-layout mq="desktop">
      <c-flex align="center" bg="palettes.background" boxShadow="md" w="100" h="80px" mb="1">
        <c-heading fontSize="24px" m="5" fontWeight="400">Logo</c-heading>
      </c-flex>
  </mq-layout>
</template>

<script>
import {
  CFlex,
  CHeading
} from "@chakra-ui/vue";

export default {
  name: "Header",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    CFlex,
    CHeading,
  },
  data() {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: "gray.700",
          color: "whiteAlpha.900",
        },
        light: {
          bg: "white",
          color: "gray.900",
        },
      },
    };
  },
  props: {
    msg: ['msg']
  },
  computed: {
    colorMode() {
      return this.$chakraColorMode();
    },
    theme() {
      return this.$chakraTheme();
    },
    toggleColorMode() {
      return this.$toggleColorMode;
    },
  },
  methods: {
    showToast() {
      this.$toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 10000,
        isClosable: true,
      });
    },
  },
};
</script>
