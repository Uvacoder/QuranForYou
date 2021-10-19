<template>
  <c-box>
    <mq-layout mq="desktop">
      <c-flex align="center" justify="center" mx="10" my="5">
        <c-flex direction="column">
          <c-heading fontSize="36px">Create an Account</c-heading>
          <c-text my="2"
            >Already have an account?
            <c-link
              color="palettes.primary"
              class="link"
              as="router-link"
              to="/auth/login"
              >Login</c-link
            ></c-text
          >
          <c-flex mt="2">
            <SocialButton link="google" text="Continue with Google" />
            <SocialButton link="facebook" text="Continue with Facebook" />
          </c-flex>
          <c-flex direction="column">
            <c-flex mt="1.5em">
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
              placeholder="Email Address"
              borderColor="black"
              mt="1.5em"
            />
            <c-input
              variant="flushed"
              placeholder="Phone Number"
              borderColor="black"
              mt="1.5em"
            />
          </c-flex>
          <c-flex justify="flex-end" mt="5">
            <AuthButton text="Create Account" />
          </c-flex>
          <c-flex mt="5">
            <c-text fontSize="14px">
              By clicking create account I agree that I have read and accepted
              the Terms of Use and Privacy Policy
            </c-text>
          </c-flex>
        </c-flex>
      </c-flex>
    </mq-layout>
    <mq-layout mq="mobile">
      <c-flex justify="center" align="center" mt="20%" mx="5">
        <c-flex direction="column">
          <c-heading fontSize="18px">Create an Account</c-heading>
          <c-text my="2" fontSize="12px"
            >Already have an account?
            <c-link color="palettes.primary" as="router-link" to="/auth/login"
              >Login</c-link
            >
          </c-text>
          <c-flex mt="0.5em">
            <SocialButton link="google" text="Continue with Google" />
            <SocialButton link="facebook" text="Continue with Facebook" />
          </c-flex>
          <c-flex direction="column">
            <c-flex mt="1.5em">
              <c-input
                variant="flushed"
                placeholder="First Name"
                borderColor="black"
                mr="0.5em"
              />
              <c-input
                variant="flushed"
                placeholder="Last Name"
                borderColor="black"
                ml="0.5em"
              />
            </c-flex>
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
          <c-flex justify="center" mt="1.2em">
            <AuthButton text="Signup" />
          </c-flex>
          <c-flex mt="1.2em">
            <c-text fontSize="12px">
              By clicking create account I agree that I have read and accepted
              the Terms of Use and Privacy Policy
            </c-text>
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
