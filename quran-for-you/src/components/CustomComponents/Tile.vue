<template>
  <c-box>
    <mq-layout mq="desktop">
      <c-flex justify="start" direction="column">
        <c-image
          :src="require(`@/assets/${image}.png`)"
          borderRadius="8px"
          objectFit="contain"
          height="15vw"
          width="100%"
        ></c-image>
        <c-text fontWeight="bold" mt="0.5vw">{{ title }}</c-text>
        <c-text fontSize="1.25vw" mt="0.15vw">{{ subTitle }}</c-text>
        <c-text my="0.5vw">{{ content }}</c-text>
        <CustomButton text="Read More" padding="0.1vw" />
      </c-flex>
    </mq-layout>
    <mq-layout mq="mobile"> </mq-layout>
  </c-box>
</template>

<script>
import { CButton, CImage } from "@chakra-ui/vue";
import CustomButton from "@/components/CustomComponents/CustomButton.vue";

export default {
  name: "Tile",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  props: ["image", "link", "title", "subTitle", "content"],
  components: {
    CButton,
    CImage,
    CustomButton,
  },
};
</script>
