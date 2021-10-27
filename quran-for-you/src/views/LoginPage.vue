<template>
  <div class="home">
    <Header />
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Layout/Desktopview/Header.vue";
import Login from "@/components/Layout/Desktopview/Login.vue";

export default {
  name: "LoginPage",
  components: {
    Header,
    Login,
  },
};
</script>
