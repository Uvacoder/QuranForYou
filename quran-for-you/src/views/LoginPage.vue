<template>
  <div class="home">
    <Header />
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Layout/Desktopview/Login.vue";
import Header from "../components/CustomComponents/Header.vue";

export default {
  name: "LoginPage",
  components: {
    Login,
    Header,
  },
};
</script>
