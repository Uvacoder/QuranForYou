<template>
  <mq-layout mq="desktop">
    <c-flex align="center" justify="center" m="20">
      <c-flex direction="column" w="35em">
        <c-heading fontSize="36px">Forgot password</c-heading>
        <c-text my="2">Already have an account? Login</c-text>
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
</template>

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
