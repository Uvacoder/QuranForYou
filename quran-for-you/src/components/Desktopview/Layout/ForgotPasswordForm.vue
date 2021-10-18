<template>
  <c-box>
    <mq-layout mq="desktop">
      <c-flex align="center" justify="center" mx="10" my="5">
        <c-flex direction="column" w="35em">
          <c-heading fontSize="36px">Forgot password</c-heading>
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
          <c-flex direction="column">
            <c-text fontSize="18px" fontColor="black" opacity="0.5"
              >Verification sent to registered email id</c-text
            >
            <c-input
              variant="flushed"
              placeholder="Email Address"
              borderColor="black"
              mt="5"
            />
          </c-flex>
          <c-flex justify="flex-end" mt="5">
            <AuthButton text="Submit" />
          </c-flex>
        </c-flex>
      </c-flex>
    </mq-layout>
    <mq-layout mq="mobile">
      <c-flex align="center" justify="center" mt="20%">
        <c-flex direction="column" w="20em">
          <c-heading fontSize="18px">Forgot password</c-heading>
          <c-text my="2" fontSize="12px"
            >Already have an account?
            <c-link
              color="palettes.primary"
              as="router-link"
              to="/auth/login"
              >Login</c-link
            ></c-text
          >
          <c-flex direction="column">
            <c-text fontSize="10px" fontColor="black" opacity="0.5" mt="1.5em"
              >Verification sent to registered email id</c-text
            >
            <c-input
              variant="flushed"
              placeholder="Email Address"
              borderColor="black"
            />
          </c-flex>
          <c-flex justify="center" mt="1.5em">
            <AuthButton text="Submit" />
          </c-flex>
        </c-flex>
      </c-flex>
    </mq-layout>
  </c-box>
</template>

<style>
.link {
  text-decoration: underline;
}
</style>

<script>
import { CFlex, CHeading } from "@chakra-ui/vue";
import SocialButton from "@/components/CustomComponents/SocialButton.vue";
import AuthButton from "@/components/CustomComponents/AuthButton.vue";

export default {
  name: "ForgotPasswordForm",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    CFlex,
    CHeading,
    SocialButton,
    AuthButton,
  },
};
</script>
