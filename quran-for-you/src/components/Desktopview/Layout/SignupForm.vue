<template>
  <mq-layout mq="desktop">
    <c-flex align="center" justify="center" m="20">
      <c-flex direction="column">
        <c-heading fontSize="36px">Create an account</c-heading>
        <c-text my="2">Already have an account? Login</c-text>
        <c-flex mt="2">
          <SocialButton link="google" text="Continue with Google" />
          <SocialButton link="facebook" text="Continue with Facebook" />
        </c-flex>
        <c-flex direction="column">
          <c-flex mt="3">
            <c-input
              variant="flushed"
              placeholder="First Name"
              borderColor="black"
              m="1"
            />
            <c-input
              variant="flushed"
              placeholder="Last Name"
              borderColor="black"
              m="1"
            />
          </c-flex>
          <c-input
            variant="flushed"
            placeholder="Email address"
            borderColor="black"
            mt="4"
          />
          <c-input
            variant="flushed"
            placeholder="Phone Number"
            borderColor="black"
            mt="5"
          />
        </c-flex>
        <c-flex justify="flex-end" mt="5">
          <AuthButton text="Create Account" />
        </c-flex>
        <c-flex mt="5">
          <c-text fontSize="14px">
            By clicking create account I agree that I have read and accepted the
            Terms of Use and Privacy Policy
          </c-text>
        </c-flex>
      </c-flex>
    </c-flex>
  </mq-layout>
</template>

<script>
import { CFlex, CHeading } from "@chakra-ui/vue";
import SocialButton from "@/components/CustomComponents/SocialButton.vue";
import AuthButton from "@/components/CustomComponents/AuthButton.vue";

export default {
  name: "SignupForm",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    CFlex,
    CHeading,
    SocialButton,
    AuthButton,
  },
};
</script>
