<template>
  <c-box height="90%">
    <mq-layout mq="desktop" style="height:100%;">
      <c-simple-grid :columns="2" class="grid" height="100%">
        <AuthenticationLeft />
        <SignupForm />
      </c-simple-grid>
    </mq-layout>
    <mq-layout mq="mobile">
      <SignupForm />
    </mq-layout>
  </c-box>
</template>

<style>
.left-box {
  background: linear-gradient(#27367b, #0272c4);
}
#__chakra-app > div:first-child {
  height: 100%;
}
</style>
<script>
import { CFlex, CHeading, CSimpleGrid, CText } from "@chakra-ui/vue";
import SignupForm from "@/components/Layout/Desktopview/SignupForm.vue";
import AuthenticationLeft from "@/components/CustomComponents/AuthenticationLeft.vue";
export default {
  name: "Signup",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    CFlex,
    CHeading,
    CSimpleGrid,
    CText,
    SignupForm,
    AuthenticationLeft,
  },
};
</script>
