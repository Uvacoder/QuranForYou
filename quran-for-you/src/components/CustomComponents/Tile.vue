<template>
  <c-box>
    <mq-layout mq="desktop">
      <c-flex justify="start" direction="column">
        <c-image
          :src="require(`@/assets/${image}.png`)"
          borderRadius="8px"
          objectFit="cover"
          height="15vw"
          width="100%"
        ></c-image>
        <c-text text-align fontSize="1vw" my="0.2vw">{{ subTitle }}</c-text>
        <c-text text-align fontWeight="bold" my="0.5vw">{{ title }}</c-text>
        <c-text text-align my="0.5vw">{{ content }}</c-text>
        <CustomButton text="Read more" padding="0.1vw" fontSize="1vw" />
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
