<template>
  <c-flex align="center" justify="center" h="100%" w="100%">
    <c-flex direction="column" w="100%">
      <c-heading class="heading">Login</c-heading>
      <c-text my="2"
        >New here?
        <c-link color="palettes.primary" as="router-link" to="/signup"
          >Create an Account</c-link
        ></c-text
      >
      <c-flex justify="space-evenly">
        <SocialButton link="google" text="Continue with Google" />
        <SocialButton link="facebook" text="Continue with Facebook" />
      </c-flex>
      <c-flex direction="column" class="auth-form-container">
        <c-input
          v-model="email"
          placeholder="Email Address*"
          type="email"
          variant="flushed"
          class="auth-input"
        />
        <c-input
          v-model="password"
          placeholder="Password*"
          type="password"
          variant="flushed"
          class="auth-input"
        />
        <c-link
          color="palettes.primary"
          as="router-link"
          to="/forgotpassword"
          justify="center"
          align="center"
          >Forgot Password?</c-link
        >
      </c-flex>
      <c-flex w="max-content" m="auto">
        <custom-button
          text="Login"
          :click="handleLogin"
          :isLoading="isLoggingIn"
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
  name: "LoginForm",
  data: function() {
    return { email: "", password: "" };
  },
  computed: {
    ...mapGetters(["isLoggingIn"]),
    ...mapGetters(["loginError"]),
    error() {
      return this.loginError;
    },
  },
  components: {
    CFlex,
    CHeading,
    SocialButton,
    CustomButton,
  },
  watch: {
    error(newValue, oldValue) {
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
  methods: {
    handleLogin() {
      this.$store.dispatch("handleLogin", [this.email, this.password]);
    },
  },
};
</script>

CustomButton
