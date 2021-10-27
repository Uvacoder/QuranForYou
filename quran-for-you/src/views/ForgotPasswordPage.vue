<template>
  <div class="home">
    <Header />
    <ForgotPassword />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Layout/Desktopview/Header.vue";
import ForgotPassword from "@/components/Layout/Desktopview/ForgotPassword.vue";

export default {
  name: "ForgotPasswordPage",
  components: {
    Header,
    ForgotPassword,
  },
};
</script>
