<template>
  <router-view />
</template>

<style>
html,
#__chakra-app,
body,
.home {
  height: 100%;
}

.heading {
  font-size: 3vw;
}
.container {
  flex-direction: column;
  margin-left: 4vw;
  margin-right: 4vw;
  margin-top: 1.5vw;
  margin-bottom: 2vw;
}
.subscribe-form-container {
  flex-direction: column;
  width: 100%;
  margin-top: 2vw;
  margin-bottom: 2vw;
}
</style>

<script>
import { CThemeProvider, CReset } from "@chakra-ui/vue";
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
