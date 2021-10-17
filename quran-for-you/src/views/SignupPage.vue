<template>
  <div class="home">
    <Header />
    <Signup />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Desktopview/Layout/Header.vue";
import Signup from "@/components/Desktopview/Layout/Signup.vue";

export default {
  name: "SignupPage",
  components: {
    Header,
    Signup
  },
};
</script>
