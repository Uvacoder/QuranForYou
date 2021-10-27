<template>
  <c-theme-provider>
    <c-reset />
    <router-view />
  </c-theme-provider>
</template>

<style>
html,
#__chakra-app,
body,
.home {
  height: 100%;
}

.heading {
  font-size: 3vw;
  text-transform: uppercase;
}
.container {
  flex-direction: column;
  margin-left: 4vw;
  margin-right: 4vw;
  margin-top: 1.5vw;
  margin-bottom: 2vw;
}
.subscribe-form-container {
  flex-direction: column;
  width: 100%;
  margin-top: 2vw;
  margin-bottom: 2vw;
}
</style>
<script>
export default {
  name: "App",
};
</script>
