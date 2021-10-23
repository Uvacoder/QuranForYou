<template>
  <c-box>
    <mq-layout mq="desktop">
      <c-flex justify="start"
        ><c-heading size="lg" fontSize="48px">Subscribe</c-heading></c-flex
      >
      <c-flex mt="1.5em">
        <c-simple-grid :columns="2" :spacing="1">
          <c-flex>
            <c-text fontSize="18px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sem ipsum lorem
              pretium convallis. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sem ipsum lorem pretium convallis.
            </c-text>
          </c-flex>
          <c-flex direction="column" align="start" justify="start">
            <c-flex justify="space-between">
              <c-flex direction="column">
                <c-text fontSize="14px">Name</c-text>
                <c-input w="90%" size="md" borderColor="gray.400" />
              </c-flex>
              <c-flex direction="column">
                <c-text fontSize="14px">Email</c-text>
                <c-input w="90%" size="md" borderColor="gray.400" />
              </c-flex>
            </c-flex>
            <c-flex my="1em">
              <CustomButton
                text="Sign me up"
                padding="2px"
                borderRadius="4px"
                fontSize="12px"
                height="10px"
              />
            </c-flex>
          </c-flex>
        </c-simple-grid>
      </c-flex>
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
    CustomButton
  },
};
</script>
