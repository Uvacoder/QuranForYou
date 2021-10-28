<template>
  <c-box height="10%">
    <mq-layout mq="desktop">
      <c-flex
        align="center"
        bg="palettes.background"
        boxShadow="md"
        w="100"
        h="10vh"
      >
        <c-heading fontSize="24px" mx="5" fontWeight="400">Logo</c-heading>
      </c-flex>
    </mq-layout>
    <mq-layout mq="mobile">
      <c-flex
        bg="palettes.background"
        boxShadow="md"
        w="100"
        h="40px"
        mb="1"
        justify="space-between"
        align="center"
      >
        <c-flex maxWidth="5em" align="center">
          <c-image
            :src="require(`@/assets/hamburger.png`)"
            size="32px"
            mx="3"
          />
          <c-heading fontSize="18px" fontWeight="400">Logo</c-heading></c-flex
        >
      </c-flex>
    </mq-layout>
  </c-box>
</template>

<script>
import { CFlex, CHeading, CImage } from "@chakra-ui/vue";
import HeaderButton from "@/components/CustomComponents/HeaderButton.vue";

export default {
  name: "Header",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    CFlex,
    CHeading,
    HeaderButton,
    CImage,
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
    msg: ["msg"],
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
