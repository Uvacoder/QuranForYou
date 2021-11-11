<template>
  <swipe-modal v-model="showModal">
    <template v-slot:header
      ><c-heading class="heading">View Options</c-heading>
    </template>
    <template v-slot:body>
      <c-flex direction="column" mx="2" v-if="verse !== 'all'">
        <c-flex align="center"
          ><c-text class="filter-label">View Options</c-text
          ><c-icon name="chevron-down" size="5vw" color="black" />
        </c-flex>
        <c-select
          :class="['filter-container custom-select']"
          v-model="view"
          textTransform="capitalize"
        >
          >
          <option
            v-for="viewOption in ['paragraph', 'parallel']"
            v-bind:value="viewOption"
            v-bind:key="viewOption"
            >{{ viewOption }}</option
          >
        </c-select>
      </c-flex>
      <c-simple-grid :columns="2" my="2vw">
        <c-flex direction="column" mx="2">
          <c-flex align="center"
            ><c-text class="filter-label">Font Size</c-text
            ><c-icon name="chevron-down" size="5vw" color="black"
          /></c-flex>

          <c-select :class="['filter-container custom-select']" v-model="font">
            <option
              v-for="(size, index) in fontSizes"
              :value="size.value"
              :key="`${size.value}-${index}`"
              >{{ size.font }}</option
            >
          </c-select>
        </c-flex>
        <c-flex direction="column">
          <c-flex align="center"
            ><c-text class="filter-label">Language</c-text
            ><c-icon name="chevron-down" size="5vw" color="black"
          /></c-flex>

          <c-select class="filter-container custom-select" v-model="language">
            <option
              v-for="(element, index) in Object.keys(languages)"
              :value="element"
              :key="`${element}-${index}`"
              >{{ element }}</option
            >
          </c-select>
        </c-flex>
      </c-simple-grid>
    </template>
    <template v-slot:footer>
      <c-flex h="10vw"> <custom-button text="Close" :click="close"/></c-flex>
    </template>
  </swipe-modal>
</template>

<script>
import SwipeModal from "swipe-modal-2";
import CustomButton from "../../CustomComponents/CustomButton.vue";

export default {
  name: "ViewOptions",
  props: [
    "languages",
    "language",
    "fontSizes",
    "fontSize",
    "view",
    "verse",
    "show",
    "close",
    "colorMode",
    "setFontSize",
  ],
  components: { SwipeModal, CustomButton },
  watch: {
    size(newVal, oldVal) {
      console.log("New value: ", newVal);
    },
  },
  computed: {
    showModal: {
      get() {
        return this.show;
      },
      set(newShow) {
        newShow === "closed" && this.close();
        return newShow;
      },
    },
    font: {
      get() {
        return this.fontSize;
      },
      set(newSize) {
        this.setFontSize(newSize);
      },
    },
  },
};
</script>
