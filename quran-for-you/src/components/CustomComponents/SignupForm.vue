<template>
  <c-flex align="center" justify="center" h="100%" w="100%">
    <c-flex direction="column" w="100%">
      <c-heading class="heading">Create an Account</c-heading>
      <c-text my="2"
        >Already have an account?
        <c-link color="palettes.primary" as="router-link" to="/login"
          >Login</c-link
        ></c-text
      >
      <c-flex justify="space-evenly">
        <SocialButton link="google" text="Continue with Google" />
        <SocialButton link="facebook" text="Continue with Facebook" />
      </c-flex>
      <c-flex direction="column" class="auth-form-container">
        <c-input
          v-model="firstName"
          :placeholder="'First Name*'"
          type="text"
          variant="flushed"
          class="auth-input"
        />
        <c-input
          v-model="lastName"
          :placeholder="'Last Name*'"
          type="text"
          variant="flushed"
          class="auth-input"
        />
        <c-input
          v-model="email"
          :placeholder="'Email Address*'"
          type="email"
          variant="flushed"
          :mr="1"
          :ml="1"
          class="auth-input"
        />
        <c-input
          v-model="password"
          :placeholder="'Password*'"
          type="password"
          variant="flushed"
          :mr="1"
          :ml="1"
          class="auth-input"
        />
        <c-input
          v-model="confirmPassword"
          :placeholder="'Confirm Password*'"
          type="password"
          variant="flushed"
          :mr="1"
          :ml="1"
          class="auth-input"
        />
      </c-flex>
      <c-flex w="max-content" m="auto">
        <custom-button
          text="Create Account"
          :click="handleSignup"
          :isLoading="isSigningUp"
        />
      </c-flex>
      <!-- <c-text>
        By clicking create account I agree that I have read and accepted the
        Terms of Use and Privacy Policy
      </c-text> -->
    </c-flex>
  </c-flex>
</template>

<script>
import { CFlex, CHeading } from "@chakra-ui/vue";
import SocialButton from "@/components/CustomComponents/SocialButton.vue";
import CustomButton from "./CustomButton.vue";
import { mapGetters } from "vuex";

export default {
  name: "SignupForm",
  data: function() {
    return {
      email: "",
      password: "",
      phone: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    };
  },
  computed: {
    ...mapGetters(["isSigningUp"]),
  },
  components: {
    CFlex,
    CHeading,
    SocialButton,
    CustomButton,
  },

  created() {
    this.$store.dispatch("clearSignupReducer");
  },
  methods: {
    handleSignup() {
      this.$store.dispatch("handleSignup", [
        this.email,
        this.password,
        this.firstName,
        this.lastName,
        this.phone,
      ]);
    },
  },
};
</script>
