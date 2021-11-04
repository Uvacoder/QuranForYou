<template>
  <c-box>
    <mq-layout mq="desktop">
      <c-flex>
        <c-flex direction="column" width="60%">
          <c-heading class="heading">Subscribe</c-heading>
          <c-text pr="5vw" pt="1vw">
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
          <c-flex justify="center" align="center">
            <CustomButton text="Subscribe" padding="1.5vw" fontSize="1.5vw"
          /></c-flex>
        </c-flex>
      </c-flex>
    </mq-layout>
    <mq-layout mq="mobile">
      <c-flex justify="center" align="center">
        <c-flex direction="column" width="50%">
          <c-heading class="heading">Subscribe</c-heading>
          <c-text pr="5vw" pt="1vw" fontSize="3vw">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sem ipsum lorem pretium
            convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sem ipsum lorem pretium convallis.
          </c-text>
        </c-flex>
        <c-flex direction="column" width="50%">
          <c-flex direction="column" width="100%" mr="1vw" mb="1vw">
            <c-text fontSize="3vw">Name</c-text>
            <c-input size="sm" borderColor="gray.400" borderRadius="5px"/>
          </c-flex>
          <c-flex direction="column" width="100%" mb="1vw">
            <c-text fontSize="3vw">Email</c-text>
            <c-input size="sm" borderColor="gray.400" borderRadius="5px"/>
          </c-flex>
          <c-flex justify="start" align="center" my="1">
            <CustomButton text="Subscribe" padding="0" fontSize="3vw" size="sm"
          /></c-flex>
        </c-flex>
      </c-flex>
    </mq-layout>
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
