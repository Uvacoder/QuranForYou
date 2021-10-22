<template>
  <c-box>
    <mq-layout mq="desktop">
      <c-flex
        direction="column"
        backgroundColor="palettes.primary"
        color="white"
        align="center"
        py="2em"
        px="4em"
        mt="2em"
      >
        <c-simple-grid :columns="2" :spacing="10">
          <c-flex direction="column" h="100%">
            <c-heading fontWeight="bold" fontSize="48px">Logo</c-heading>
            <c-text fontSize="18px" mt="1em">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ipsum
              lorem pretium convallis. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sem ipsum lorem pretium convallis.
            </c-text>
          </c-flex>
          <c-flex direction="column" h="100%" align="end" justify="center">
            <c-simple-grid :columns="2" :spacing="5">
              <c-flex direction="column" h="100%">
                <c-heading fontWeight="bold" fontSize="18px" mb="1"
                  >Lorem ipsum</c-heading
                >
                <c-text my="1">Lorem ipsum</c-text>
                <c-text my="1">Lorem ipsum</c-text>
                <c-text my="1">Lorem ipsum</c-text>
              </c-flex>
              <c-flex direction="column" h="100%">
                <c-heading fontWeight="bold" fontSize="18px" mb="1"
                  >Lorem ipsum</c-heading
                >
                <c-text my="1">Lorem ipsum</c-text>
                <c-text my="1">Lorem ipsum</c-text>
                <c-text my="1">Lorem ipsum</c-text>
              </c-flex>
            </c-simple-grid>
          </c-flex>
        </c-simple-grid>
      </c-flex>
    </mq-layout>
    <mq-layout mq="mobile"></mq-layout>
  </c-box>
</template>

<script>
export default {
  name: "Footer",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  props: ["text", "borderRadius", "height", "width", "padding", "fontSize"],
  components: {},
};
</script>
