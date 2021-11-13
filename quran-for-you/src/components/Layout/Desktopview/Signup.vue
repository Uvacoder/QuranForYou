<template>
  <c-box height="90%">
    <mq-layout mq="desktop" style="height:100%;">
      <c-simple-grid :columns="2" class="grid" height="100%">
        <AuthenticationLeft />
        <c-flex h="70%" w="85%" m="auto"> <signup-form /> </c-flex>
      </c-simple-grid>
    </mq-layout>
    <mq-layout mq="mobile" style="height:100%; width:100%;">
      <c-flex pt="15vw" w="90%" m="auto">
        <signup-form />
      </c-flex>
    </mq-layout>
  </c-box>
</template>

<style>
.left-box {
  background: linear-gradient(#27367b, #0272c4);
}
</style>

<script>
import { CFlex, CHeading, CSimpleGrid, CText } from "@chakra-ui/vue";
import AuthenticationLeft from "@/components/CustomComponents/AuthenticationLeft.vue";
import SignupForm from "../../CustomComponents/SignupForm.vue";
import { mapGetters } from "vuex";

export default {
  name: "Signup",
  components: {
    CFlex,
    CHeading,
    CSimpleGrid,
    CText,
    SignupForm,
    AuthenticationLeft,
  },
  computed: { ...mapGetters(["signupError"]) },
  watch: {
    signupError(newValue, oldValue) {
      newValue &&
        this.$toast({
          title: "Signup.",
          description: newValue,
          status: "error",
          duration: 5000,
          position: "top",
        });
    },
  },
};
</script>
