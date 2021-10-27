<template>
  <div class="home">
    <Header />
    <Signup />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Layout/Desktopview/Header.vue";
import Signup from "@/components/Layout/Desktopview/Signup.vue";

export default {
  name: "SignupPage",
  components: {
    Header,
    Signup,
  },
};
</script>
