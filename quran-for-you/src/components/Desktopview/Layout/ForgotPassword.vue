<template>
  <c-box>
    <mq-layout mq="desktop">
      <c-simple-grid :columns="2">
        <c-box class="left-box" color="white" height="100vh">
          <c-flex direction="column" height="100%">
            <c-flex justify="center" align="center" my="1.5em" height="65%">
              <c-image
                w="280px"
                h="350px"
                :src="require(`@/assets/book.png`)"
                size="16.2px"
                mx="2"
              />
            </c-flex>
            <c-flex
              borderTop="2px"
              borderColor="white"
              justify="center"
              height="35%"
            >
              <c-text
                mt="1.5em"
                fontWeight="700"
                fontSize="25px"
                align="center"
              >
                The Love Of Power And The Age For Love
              </c-text>
            </c-flex>
          </c-flex>
        </c-box>
        <c-flex align="center" justify="center" height="100vh">
          <ForgotPasswordForm />
        </c-flex>
      </c-simple-grid>
    </mq-layout>
    <mq-layout mq="mobile">
      <c-flex direction="column">
        <c-flex align="center" justify="center">
          <ForgotPasswordForm />
        </c-flex>
      </c-flex>
    </mq-layout>
  </c-box>
</template>

<style>
body {
  overflow: hidden;
}

.left-box {
  background: linear-gradient(#27367b, #0272c4);
}
</style>
<script>
import { CFlex, CHeading, CSimpleGrid, CText } from "@chakra-ui/vue";
import ForgotPasswordForm from "@/components/Desktopview/Layout/ForgotPasswordForm.vue";
export default {
  name: "ForgotPassword",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    CFlex,
    CHeading,
    CSimpleGrid,
    CText,
    ForgotPasswordForm,
  },
};
</script>
