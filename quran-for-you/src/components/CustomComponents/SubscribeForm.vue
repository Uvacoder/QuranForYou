<template>
  <c-flex class="subscribe-form-container">
    <mq-layout mq="desktop">
      <c-flex>
        <c-flex direction="column" width="60%">
          <c-heading class="heading">Subscribe</c-heading>
          <c-text pr="5vw" mb="1vw">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sem ipsum lorem pretium
            convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sem ipsum lorem pretium convallis.
          </c-text>
        </c-flex>
        <c-flex direction="column" width="40%" pr="5vw">
          <c-flex direction="column" width="100%" mr="1vw" mb="1vw">
            <c-text>Name</c-text>
            <c-input size="md" borderColor="gray.400" />
          </c-flex>
          <c-flex direction="column" width="100%" mb="1vw">
            <c-text>Email</c-text>
            <c-input size="md" borderColor="gray.400" />
          </c-flex>
          <c-flex m="auto" w="max-content">
            <CustomButton text="Subscribe" :click="subscribe"
          /></c-flex>
        </c-flex>
      </c-flex>
    </mq-layout>
    <mq-layout mq="mobile">
      <c-heading class="heading">Subscribe</c-heading>
      <c-text pr="5vw" mb="3vw" fontSize="4vw">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Sem ipsum lorem pretium
        convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
        ipsum lorem pretium convallis.
      </c-text>
      <c-flex direction="column" width="100%" mr="1vw" mb="1vw">
        <c-text fontSize="3vw">Name</c-text>
        <c-input size="sm" borderColor="gray.400" borderRadius="5px" />
      </c-flex>
      <c-flex direction="column" width="100%" mb="1vw">
        <c-text fontSize="3vw">Email</c-text>
        <c-input size="sm" borderColor="gray.400" borderRadius="5px" />
      </c-flex>
      <c-flex mx="auto" my="4vw" w="max-content">
        <CustomButton text="Subscribe" padding="3vw" :click="subscribe"
      /></c-flex>
    </mq-layout>
  </c-flex>
</template>

<script>
import { CFlex, CHeading } from "@chakra-ui/vue";
import CustomButton from "@/components/CustomComponents/CustomButton.vue";

export default {
  name: "SubscribeForm",
  components: {
    CFlex,
    CHeading,
    CustomButton,
  },
  methods: {
    subscribe() {},
  },
};
</script>
