<template>
  <div class="home">
    <Header />
    <ForgotPassword />
  </div>
</template>

<script>
// @ is an alias to /src
import ForgotPassword from "@/components/Layout/Desktopview/ForgotPassword.vue";
import Header from "../components/CustomComponents/Header.vue";

export default {
  name: "ForgotPasswordPage",
  components: {
    ForgotPassword,
    Header,
  },
};
</script>
