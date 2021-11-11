<template>
  <c-box>
    <mq-layout mq="desktop" style="height:100%; width:100%">
      <c-flex
        align="center"
        bg="palettes.background"
        boxShadow="md"
        width="100%"
        h="10vh"
        justify="space-between"
        px="5"
      >
        <c-heading fontWeight="400">Logo</c-heading>
        <c-flex
          ><custom-button
            :click="handleGoToLogin"
            :text="!loggedIn ? 'Login' : 'Logout'"
            :padding="'0.5vw 3vw !important'"
        /></c-flex>
      </c-flex>
    </mq-layout>
    <mq-layout mq="mobile">
      <c-flex
        bg="palettes.background"
        boxShadow="md"
        w="100%"
        h="15vw"
        mb="1"
        justify="space-between"
        align="center"
        px="3"
      >
        <c-flex align="center">
          <c-image :src="require(`@/assets/hamburger.png`)" size="50%" />
          <c-heading fontWeight="400">Logo</c-heading></c-flex
        >
        <c-flex h="50%"
          ><custom-button
            fontSize="1vw !important"
            :click="handleGoToLogin"
            text="Login"
        /></c-flex>
      </c-flex>
    </mq-layout>
  </c-box>
</template>

<script>
import { CFlex, CHeading, CImage } from "@chakra-ui/vue";
import { mapGetters } from "vuex";
import CustomButton from "./CustomButton.vue";

export default {
  name: "Header",
  components: {
    CFlex,
    CHeading,
    CustomButton,
    CImage,
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    ...mapGetters(["isUserLoggedIn"]),
    loggedIn() {
      return this.isUserLoggedIn;
    },
  },
  props: {
    msg: ["msg"],
  },

  methods: {
    handleGoToLogin() {
      console.log(this.$$router);
      this.$router.push({
        name: "LoginPage",
      });
    },
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
