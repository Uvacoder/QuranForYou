<template>
  <c-box height="90%">
    <mq-layout mq="desktop" style="height:100%;">
      <c-simple-grid :columns="2" height="100%">
        <AuthenticationLeft />
        <ForgotPasswordForm />
      </c-simple-grid>
    </mq-layout>
    <mq-layout mq="mobile">
      <ForgotPasswordForm />
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
import AuthenticationLeft from "@/components/CustomComponents/AuthenticationLeft.vue";

export default {
  name: "ForgotPassword",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    CFlex,
    CHeading,
    CSimpleGrid,
    CText,
    ForgotPasswordForm,
    AuthenticationLeft,
  },
};
</script>
