<template>
  <c-box>
    <mq-layout mq="desktop">
      <c-heading class="heading">Subscribe</c-heading>
      <c-simple-grid :columns="2" :spacing="1">
        <c-text pr="1vw" pt="1vw">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sem ipsum lorem pretium
          convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sem ipsum lorem pretium convallis.
        </c-text>
        <c-flex direction="column">
          <c-flex justify="space-start" width="100%" mb="1vw">
            <c-flex direction="column" width="45%" mr="1vw">
              <c-text>Name</c-text>
              <c-input size="md" borderColor="gray.400" />
            </c-flex>
            <c-flex direction="column" width="45%">
              <c-text>Email</c-text>
              <c-input size="md" borderColor="gray.400" />
            </c-flex>
          </c-flex>
          <CustomButton text="Subscribe" padding="1.5vw" fontSize="1.5vw" />
        </c-flex>
      </c-simple-grid>
    </mq-layout>
    <mq-layout mq="mobile"></mq-layout>
  </c-box>
</template>

<script>
import { CFlex, CHeading } from "@chakra-ui/vue";
import CustomButton from "@/components/CustomComponents/CustomButton.vue";

export default {
  name: "SubscribeForm",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    CFlex,
    CHeading,
    CustomButton,
  },
};
</script>
