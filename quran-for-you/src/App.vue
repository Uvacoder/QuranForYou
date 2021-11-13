<template>
  <CColorModeProvider>
    <loading v-if="isLoadingChapters" />
    <router-view v-else />
  </CColorModeProvider>
</template>

<style>
@import "./App.css";
</style>

<script>
import { CThemeProvider, CReset, CColorModeProvider } from "@chakra-ui/vue";
import { mapGetters } from "vuex";
import { isAccesTokenExpired } from "./helper";
import Loading from "./components/CustomComponents/Loading.vue";

export default {
  name: "App",
  computed: { ...mapGetters(["user", "isLoadingChapters", "chapters"]) },
  components: {
    CThemeProvider,
    CReset,
    CColorModeProvider,
    Loading,
  },
  created() {
    if (!this.chapters || this.chapters.length === 0) {
      this.$store.dispatch("loadChapters", [undefined, undefined]);
    }
  },
  data() {
    return {
      showModal: false,
    };
  },
  watch: {
    user(newVal, oldVal) {
      if (
        !oldVal &&
        newVal &&
        newVal.access_token &&
        !isAccesTokenExpired(newVal.access_token)
      ) {
        this.$toast({
          title: "Login.",
          description: `Loggedin successfully.`,
          status: "success",
          duration: 10000,
          isClosable: true,
          position: "top",
        });
      } else if (oldVal.access_token && !newVal) {
        this.$toast({
          title: "Logout.",
          description: `Logged out successfully.`,
          status: "success",
          duration: 10000,
          isClosable: true,
          position: "top",
        });
      }
    },
  },
};
</script>
