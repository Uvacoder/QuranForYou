<template>
  <div class="home">
    <Header />
    <ForgotPassword />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Desktopview/Layout/Header.vue";
import ForgotPassword from "@/components/Desktopview/Layout/ForgotPassword.vue";

export default {
  name: "ForgotPasswordPage",
  components: {
    Header,
    ForgotPassword
  },
};
</script>
