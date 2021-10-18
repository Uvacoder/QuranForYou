<template>
  <c-box>
    <mq-layout mq="desktop">
      <c-simple-grid :columns="2">
        <c-box class="left-box" maxHeight="100vh" color="white">
          <c-flex height="150px" borderTop="2px" borderColor="white" mt="30em">
            <c-text mt="5" mx="3" fontWeight="700" fontSize="25px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </c-text>
          </c-flex>
        </c-box>
        <c-flex maxHeight="100vh" align="center" justify="center">
          <LoginForm />
        </c-flex>
      </c-simple-grid>
    </mq-layout>
    <mq-layout mq="mobile">
      <c-flex direction="column">
        <c-flex mt="2em" justify="center">
          <c-text fontWeight="bold" fontSize="24px">
            Logo
          </c-text>
        </c-flex>
        <c-flex align="center" justify="center" mt="8em">
          <LoginForm />
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
