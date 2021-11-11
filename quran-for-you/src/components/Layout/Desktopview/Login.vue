<template>
  <c-box height="90%">
    <mq-layout mq="desktop" style="height:100%;">
      <c-simple-grid :columns="2" class="grid" height="100%">
        <AuthenticationLeft />
        <c-flex h="70%" w="85%" m="auto"> <login-form /> </c-flex>
      </c-simple-grid>
    </mq-layout>
    <mq-layout mq="mobile" style="height:100%; width:100%">
      <c-flex h="80%" w="90%" m="auto">
        <login-form />
      </c-flex>
    </mq-layout>
  </c-box>
</template>

<script>
import { CFlex, CHeading, CSimpleGrid, CText } from "@chakra-ui/vue";
import AuthenticationLeft from "@/components/CustomComponents/AuthenticationLeft.vue";
import LoginForm from "../../CustomComponents/LoginForm.vue";

export default {
  name: "Login",
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
