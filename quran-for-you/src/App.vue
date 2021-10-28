<template>
  <color-mode-provider>
    <router-view />
  </color-mode-provider>
</template>

<style>
html,
#__chakra-app,
body,
.home {
  height: 100%;
}

.heading {
  font-size: 2vw;
}
.container {
  flex-direction: column;
  margin-left: 5vw;
  margin-right: 5vw;
  padding-top: 1vw;
  margin-bottom: 2vw;
}
.subscribe-form-container {
  flex-direction: column;
  width: 100%;
  margin-top: 4vw;
  margin-bottom: 2vw;
}
</style>

<script>
import { CThemeProvider, CReset, ColorModeProvider } from "@chakra-ui/vue";
export default {
  name: "App",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    CThemeProvider,
    CReset,
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {},
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
