<template>
  <c-box>
    <mq-layout mq="desktop">
      <c-flex justify="center" align="center">
        <c-flex direction="column">
          <c-heading fontSize="36px">Login</c-heading>
          <c-text my="2"
            >New here?
            <c-link as="router-link" to="/auth/signup"
              >Create an Account</c-link
            ></c-text
          >
          <c-flex mt="2">
            <SocialButton link="google" text="Continue with Google" />
            <SocialButton link="facebook" text="Continue with Facebook" />
          </c-flex>
          <c-flex direction="column">
            <c-input
              variant="flushed"
              placeholder="Email address"
              borderColor="black"
              mt="1.5em"
            />
            <c-input
              variant="flushed"
              placeholder="Phone Number"
              borderColor="black"
              mt="2em"
            />
          </c-flex>
          <c-flex justify="flex-end" mt="1.2em">
            <AuthButton text="Login" />
          </c-flex>
        </c-flex>
      </c-flex>
    </mq-layout>
    <mq-layout mq="mobile">
      <c-flex justify="center" align="center">
        <c-flex direction="column">
          <c-heading fontSize="18px">Login</c-heading>
          <c-text my="2" fontSize="12px"  
            >New here?
            <c-link as="router-link" to="/auth/signup"
              >Create an Account</c-link
            ></c-text
          >
          <c-flex mt="0.5em">
            <SocialButton link="google" text="Continue with Google" />
            <SocialButton link="facebook" text="Continue with Facebook" />
          </c-flex>
          <c-flex direction="column">
            <c-input
              variant="flushed"
              placeholder="Email address"
              borderColor="black"
              mt="1em"
            />
            <c-input
              variant="flushed"
              placeholder="Phone Number"
              borderColor="black"
              mt="1em"
            />
          </c-flex>
          <c-flex justify="center" mt="1.2em">
            <AuthButton text="Login" />
          </c-flex>
        </c-flex>
      </c-flex>
    </mq-layout>
  </c-box>
</template>

<script>
import { CFlex, CHeading } from "@chakra-ui/vue";
import SocialButton from "@/components/CustomComponents/SocialButton.vue";
import AuthButton from "@/components/CustomComponents/AuthButton.vue";

export default {
  name: "LoginForm",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    CFlex,
    CHeading,
    SocialButton,
    AuthButton,
  },
};
</script>
