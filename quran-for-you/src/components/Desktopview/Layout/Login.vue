<template>
  <mq-layout mq="desktop">
    <c-simple-grid :columns="2">
      <c-box class="left-box" height="100vh" color="white">
        <c-flex height="100px" borderTop="2px" borderColor="white" mt="32em">
          <c-text mt="5" mx="3" fontWeight="700" fontSize="25px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </c-text>
        </c-flex>
      </c-box>
      <c-box height="100vh">
        <LoginForm />
      </c-box>
    </c-simple-grid>
  </mq-layout>
</template>

<style>
.left-box {
  background: linear-gradient(#27367b, #0272c4);
}
</style>
<script>
import { CFlex, CHeading, CSimpleGrid, CText } from "@chakra-ui/vue";
import LoginForm from "@/components/Desktopview/Layout/LoginForm.vue";
export default {
  name: "Login",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    CFlex,
    CHeading,
    CSimpleGrid,
    CText,
    LoginForm,
  },
};
</script>
