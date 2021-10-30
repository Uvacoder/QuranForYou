<template>
  <c-box height="90%">
    <mq-layout mq="desktop" style="height:100%;">
      <c-simple-grid :columns="2" height="100%">
        <AuthenticationLeft />
        <LoginForm />
      </c-simple-grid>
    </mq-layout>
    <mq-layout mq="mobile">
      <LoginForm />
    </mq-layout>
  </c-box>
</template>

<script>
import { CFlex, CHeading, CSimpleGrid, CText } from "@chakra-ui/vue";
import LoginForm from "@/components/Layout/Desktopview/LoginForm.vue";
import AuthenticationLeft from "@/components/CustomComponents/AuthenticationLeft.vue";

export default {
  name: "Login",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    CFlex,
    CHeading,
    CSimpleGrid,
    CText,
    LoginForm,
    AuthenticationLeft,
  },
};
</script>
