<template>
  <c-box height="90%">
    <mq-layout mq="desktop" style="height:100%;width:100%">
      <c-simple-grid :columns="2" class="grid" height="100%">
        <AuthenticationLeft />
        <c-flex h="70%" w="85%" m="auto"> <forgot-password-form /> </c-flex>
      </c-simple-grid>
    </mq-layout>
    <mq-layout mq="mobile" style="height:100%; width:100%">
      <c-flex h="80%" w="90%" m="auto">
        <forgot-password-form />
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
import AuthenticationLeft from "@/components/CustomComponents/AuthenticationLeft.vue";
import ForgotPasswordForm from "../../CustomComponents/ForgotPasswordForm.vue";

export default {
  name: "ForgotPassword",
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
