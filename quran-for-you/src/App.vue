<template>
  <CColorModeProvider>
    <router-view />
  </CColorModeProvider>
</template>

<style>
@import "./App.css";
</style>

<script>
import { CThemeProvider, CReset, CColorModeProvider } from "@chakra-ui/vue";
export default {
  name: "App",
  components: {
    CThemeProvider,
    CReset,
    CColorModeProvider,
  },
  data() {
    return {
      showModal: false,
    };
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
