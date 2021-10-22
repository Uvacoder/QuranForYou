<template>
  <mq-layout mq="desktop">
    <c-flex direction="column" mt="1.5em" mx="8em">
      <c-flex justify="start" my="1.2em">
        <c-heading fontSize="48px">Read Quran</c-heading>
      </c-flex>
      <c-simple-grid :columns="3">
        <c-flex height="80px">
          <c-text fontSize="36px">Chapter 1</c-text>
        </c-flex>
        <c-flex height="80px">
          <c-text fontSize="36px">Chapter 1</c-text>
        </c-flex>
        <c-flex height="80px">
          <c-text fontSize="36px">Chapter 1</c-text>
        </c-flex>
        <c-flex height="80px">
          <c-text fontSize="36px">Chapter 1</c-text>
        </c-flex>
        <c-flex height="80px">
          <c-text fontSize="36px">Chapter 1</c-text>
        </c-flex>
        <c-flex height="80px">
          <c-text fontSize="36px">Chapter 1</c-text>
        </c-flex>
        <c-flex height="80px">
          <c-text fontSize="36px">Chapter 1</c-text>
        </c-flex>
        <c-flex height="80px">
          <c-text fontSize="36px">Chapter 1</c-text>
        </c-flex>
        <c-flex height="80px">
          <c-text fontSize="36px">Chapter 1</c-text>
        </c-flex>
        <c-flex height="80px">
          <c-text fontSize="36px">Chapter 1</c-text>
        </c-flex>
        <c-flex height="80px">
          <c-text fontSize="36px">Chapter 1</c-text>
        </c-flex>
        <c-flex height="80px">
          <c-text fontSize="36px">Chapter 1</c-text>
        </c-flex>
        <c-flex height="80px">
          <c-text fontSize="36px">Chapter 1</c-text>
        </c-flex>
        <c-flex height="80px">
          <c-text fontSize="36px">Chapter 1</c-text>
        </c-flex>
        <c-flex height="80px">
          <c-text fontSize="36px">Chapter 1</c-text>
        </c-flex>
      </c-simple-grid>
      <c-flex direction="column" w="100%" my="2em">
        <SubscribeForm />
      </c-flex>
    </c-flex>
  </mq-layout>
</template>

<script>
import { Cflex } from "@chakra-ui/vue";
import SubscribeForm from "@/components/Desktopview/Layout/SubscribeForm.vue";

export default {
  name: "ReadingChapters",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    Cflex,
    SubscribeForm
  },
};
</script>
