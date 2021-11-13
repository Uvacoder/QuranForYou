<template>
  <c-flex align="center" justify="center" h="100%" w="100%">
    <c-flex direction="column" w="100%">
      <c-heading class="heading">Forgot Password</c-heading>
      <c-text my="2"
        >Already have an account?
        <c-link color="palettes.primary" as="router-link" to="/login"
          >Login</c-link
        ></c-text
      >
      <c-flex direction="column" class="auth-form-container">
        <c-input
          v-model="email"
          type="email"
          variant="flushed"
          placeholder="Email Address"
          class="auth-input"
        />
        <c-text opacity="0.5"
          >Verification will be sent to the email address</c-text
        >
      </c-flex>
      <c-flex w="max-content" m="auto">
        <custom-button
          text="Submit"
          :click="handleForgotPassword"
          :isLoading="isForgettingPassword"
        />
      </c-flex>
    </c-flex>
  </c-flex>
</template>

<script>
import { CFlex, CHeading } from "@chakra-ui/vue";
import SocialButton from "@/components/CustomComponents/SocialButton.vue";
import CustomButton from "./CustomButton.vue";
import { mapGetters } from "vuex";

export default {
  name: "ForgotPasswordForm",
  data: function() {
    return { email: "" };
  },
  components: {
    CFlex,
    CHeading,
    SocialButton,
    CustomButton,
  },
  computed: {
    ...mapGetters(["isForgettingPassword"]),
    ...mapGetters(["forgettingPasswordError"]),
    error() {
      return this.forgettingPasswordError;
    },
  },
  methods: {
    handleForgotPassword() {
      this.$store.dispatch("handleForgotPassword", [this.email]);
    },
  },
};
</script>
