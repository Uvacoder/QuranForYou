<template>
  <c-accordion
    :defaultIndex="-1"
    :allowToggle="true"
    v-if="commentary.audio || commentary.content"
    my="2vw"
  >
    <c-accordion-item>
      <c-accordion-header px="0">
        <c-box flex="1" text-align="left">
          <c-heading class="heading" mb="0 !important">Commentary</c-heading>
        </c-box>
        <c-accordion-icon />
      </c-accordion-header>
      <c-accordion-panel px="0">
        <av-circle
          style="margin-top:2vw; margin-bottom:2vw"
          v-if="commentary.audio"
          :outline-width="0"
          :progress-width="5"
          :outline-meter-space="5"
          :playtime="true"
          :cors-anonym="true"
          :audio-src="commentary.audio"
          :canv-class="'commentary-visual'"
        ></av-circle>
        <c-text
          :fontSize="fontSize"
          v-html="commentary.content"
          textAlign="justify"
        >
        </c-text>
      </c-accordion-panel>
    </c-accordion-item>
  </c-accordion>
</template>

<style>
.commentary-visual {
  display: none;
}
</style>
<script>
import { CButton } from "@chakra-ui/vue";
import { CAccordionIcon } from "@chakra-ui/vue";

export default {
  name: "Commentary",
  props: ["commentary", "fontSize"],
  components: {
    CButton,
    CAccordionIcon,
  },
};
</script>
