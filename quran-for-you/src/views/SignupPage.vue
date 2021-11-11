<template>
  <div class="home">
    <Header />
    <Signup />
  </div>
</template>

<script>
// @ is an alias to /src
import Signup from "@/components/Layout/Desktopview/Signup.vue";
import Header from "../components/CustomComponents/Header.vue";

export default {
  name: "SignupPage",
  components: {
    Header,
    Signup,
  },
};
</script>
