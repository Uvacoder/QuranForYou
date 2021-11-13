<template>
  <c-box mt="1vw" v-if="commentary.audio || commentary.content">
    <c-box
      mb="4"
      variant-color="blue"
      @click="show = !show"
      class="accordion-header"
      pt="3"
      pb="4"
    >
      <c-flex align="center" justify="space-between">
        <c-heading class="heading" mb="0 !important" pl="1"
          >Commentary</c-heading
        >
        <c-flex align="center">
          <c-text>{{ show ? "Hide" : "Show" }}</c-text>
          <c-icon :name="show ? 'chevron-up' : 'chevron-down'" mx="1"
        /></c-flex>
      </c-flex>
    </c-box>
    <c-collapse :starting-height="20" :is-open="show">
      <c-box>
        <av-circle
          style="margin-bottom:1vw"
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
          px="1vw"
          mb="1vw"
          :fontSize="fontSize"
          v-html="commentary.content"
          textAlign="justify"
        >
        </c-text>
        <c-divider />
      </c-box>
    </c-collapse>
  </c-box>
</template>

<style>
.accordion-header {
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
  transition: 0.5s;
}

@media only screen and (min-width: 601px) {
  .accordion-header:hover {
    cursor: pointer;
    background-color: #ececec;
  }
}
.commentary-visual {
  display: none;
}
</style>
<script>
import { CButton, CDivider, CIcon } from "@chakra-ui/vue";

export default {
  name: "Commentary",
  props: ["commentary", "fontSize"],
  data: function() {
    return { show: false };
  },
  watch: {
    commentary(newValue, oldValue) {
      newValue !== oldValue && (this.show = false);
    },
  },

  components: {
    CButton,
    CIcon,
    CDivider,
  },
};
</script>
