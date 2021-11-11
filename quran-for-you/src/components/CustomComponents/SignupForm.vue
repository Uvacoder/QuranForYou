<template>
  <c-flex align="center" justify="center" h="100%" w="100%">
    <c-flex direction="column" w="100%">
      <c-heading class="heading">Create an Account</c-heading>
      <c-text my="2"
        >Already have an account?
        <c-link
          color="palettes.primary"
          class="link"
          as="router-link"
          to="/login"
          >Login</c-link
        ></c-text
      >
      <c-flex>
        <SocialButton link="google" text="Continue with Google" />
        <SocialButton link="facebook" text="Continue with Facebook" />
      </c-flex>
      <c-flex direction="column" class="auth-form-container">
        <c-flex>
          <c-input
            v-model="firstName"
            :key="'Enter First Name*'"
            :placeholder="'Enter First Name*'"
            type="text"
            variant="flushed"
            :mr="1"
            :ml="1"
            class="auth-input"
          />
          <c-input
            v-model="lastName"
            :key="'Enter Last Name*'"
            :placeholder="'Last Name*'"
            type="text"
            variant="flushed"
            :mr="1"
            :ml="1"
            class="auth-input"
          />
        </c-flex>
        <c-input
          v-model="email"
          :placeholder="'Enter Email Address*'"
          type="email"
          variant="flushed"
          :mr="1"
          :ml="1"
          class="auth-input"
        />
        <c-input
          v-model="password"
          :placeholder="'Enter Password*'"
          type="password"
          variant="flushed"
          :mr="1"
          :ml="1"
          class="auth-input"
        />
        <c-input
          v-model="confirmPassword"
          :placeholder="'Enter Confirm Password*'"
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
          :isLoading="signingUp"
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
    signingUp() {
      console.log(this.isSigningUp);
      return this.isSigningUp;
    },
  },
  components: {
    CFlex,
    CHeading,
    SocialButton,
    CustomButton,
  },
  watch: {
    email(newEmail, oldEmail) {
      console.log(newEmail);
    },
  },
  methods: {
    handleSignup() {
      console.log({
        email: this.email,
        password: this.password,
        phone: this.phone,
        firstName: this.firstName,
        lastName: this.lastName,
      });
      this.$store.dispatch("handleSignup", [
        this.email,
        this.password,
        `${this.firstName}${this.lastName}`,
        this.phone,
      ]);
    },
  },
};
</script>
