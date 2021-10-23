<template>
  <c-box>
    <mq-layout mq="desktop">
      <c-flex
        direction="column"
        backgroundColor="palettes.primary"
        color="white"
        align="center"
        justify="space-evenly"
        p="3vw"
      >
        <c-simple-grid :columns="2">
          <c-flex direction="column">
            <c-heading fontWeight="bold" fontSize="48px">Logo</c-heading>
            <c-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ipsum
              lorem pretium convallis. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sem ipsum lorem pretium convallis.
            </c-text>
          </c-flex>
          <c-simple-grid :columns="2">
            <c-flex direction="column" align="center" justify="center">
              <c-heading class="footer-link-heading">Lorem ipsum</c-heading>
              <c-text class="footer-link">Lorem ipsum</c-text>
              <c-text class="footer-link">Lorem ipsum</c-text>
              <c-text class="footer-link">Lorem ipsum</c-text>
            </c-flex>
            <c-flex direction="column" h="100%" align="center" justify="center">
              <c-heading class="footer-link-heading">Lorem ipsum</c-heading>
              <c-text class="footer-link">Lorem ipsum</c-text>
              <c-text class="footer-link">Lorem ipsum</c-text>
              <c-text class="footer-link">Lorem ipsum</c-text>
            </c-flex>
          </c-simple-grid>
        </c-simple-grid>
      </c-flex>
    </mq-layout>
    <mq-layout mq="mobile"></mq-layout>
  </c-box>
</template>
<style>
.footer-link {
  margin-top: 2%;
}
.footer-link:hover {
  cursor: pointer;
  text-decoration: underline;
}
.footer-link-heading {
  font-size: 1.65vw;
  margin-bottom: 2%;
}
</style>
<script>
export default {
  name: "Footer",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  props: ["text", "borderRadius", "height", "width", "padding", "fontSize"],
  components: {},
};
</script>
