<template>
  <c-flex align="center" justify="center" h="100%">
    <mq-layout mq="desktop">
      <c-flex justify="center" align="center">
        <c-flex direction="column">
          <c-heading fontSize="36px">Login</c-heading>
          <c-text my="2"
            >New here?
            <c-link
              color="palettes.primary"
              class="link"
              as="router-link"
              to="/signup"
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
              placeholder="Email Address"
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
          <c-link
            color="palettes.primary"
            as="router-link"
            to="/forgotpassword"
            justify="center"
            align="center"
            my="1em"
            fontSize="18px"
            >Forgot Password?</c-link
          >
          <c-flex justify="flex-end" mt="1.2em">
            <AuthButton text="Login" />
          </c-flex>
        </c-flex>
      </c-flex>
    </mq-layout>
    <mq-layout mq="mobile">
      <c-flex justify="center" align="center" mt="20%">
        <c-flex direction="column">
          <c-heading fontSize="18px">Login</c-heading>
          <c-text my="2" fontSize="12px"
            >New here?
            <c-link color="palettes.primary" as="router-link" to="/signup"
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
              placeholder="Email Address"
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
          <c-link
            color="palettes.primary"
            as="router-link"
            to="/forgotpassword"
            justify="center"
            align="center"
            my="1.5em"
            fontSize="12px"
            >Forgot Password?</c-link
          >
          <c-flex justify="center" mt="0.5em">
            <AuthButton text="Login" />
          </c-flex>
        </c-flex>
      </c-flex>
    </mq-layout>
  </c-flex>
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
