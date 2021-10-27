<template>
  <c-box height="90%">
    <mq-layout mq="desktop" style="height:100%;">
      <c-simple-grid :columns="2" height="100%">
        <c-box class="left-box" color="white" height="100%">
          <c-flex direction="column" height="100%">
            <c-flex justify="center" align="center" my="1.5em" height="75%">
              <c-image
                w="280px"
                h="350px"
                :src="require(`@/assets/book.png`)"
                size="16.2px"
              />
            </c-flex>
            <c-flex
              borderTop="2px"
              borderColor="white"
              justify="center"
              height="25%"
            >
              <c-text
                fontWeight="700"
                fontSize="25px"
                align="center"
                justify="center"
                style="margin:auto;"
              >
                The Love Of Power And The Age For Love
              </c-text>
            </c-flex>
          </c-flex>
        </c-box>
        <c-flex align="center" justify="center" height="100%">
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
.left-box {
  background: linear-gradient(#27367b, #0272c4);
}
</style>
<script>
import { CFlex, CHeading, CSimpleGrid, CText } from "@chakra-ui/vue";
import ForgotPasswordForm from "@/components/Layout/Desktopview/ForgotPasswordForm.vue";
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
