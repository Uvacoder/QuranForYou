<template>
  <c-box class="left-box" color="white" height="100%">
    <c-flex direction="column" height="100%">
      <c-flex justify="center" align="center" my="1.5em" height="75%">
        <c-image
          w="280px"
          h="350px"
          :src="require(`@/assets/book.png`)"
          size="16.2px"
        />
      </c-flex>
      <c-flex borderTop="2px" borderColor="white" justify="center" height="25%">
        <c-text
          fontWeight="700"
          fontSize="25px"
          align="center"
          justify="center"
          style="margin:auto;"
        >
          The Love Of Power And The Age For Love
        </c-text>
      </c-flex>
    </c-flex>
  </c-box>
</template>

<style>
.left-box {
  background: linear-gradient(#27367b, #0272c4);
}
</style>

<script>
export default {
  name: "AuthenticationLeft",
};
</script>
