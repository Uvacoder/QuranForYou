<template>
  <div class="home">
    <Header />
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Desktopview/Layout/Header.vue";
import Login from "@/components/Desktopview/Layout/Login.vue";

export default {
  name: "LoginPage",
  components: {
    Header,
    Login
  },
};
</script>
