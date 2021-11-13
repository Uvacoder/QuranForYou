<template>
  <c-modal
    :is-open="isOpen"
    :on-close="close"
    :closeOnOverlayClick="false"
    style="z-index:10000;"
  >
    <c-modal-content class="read-introduction-modal-content">
      <c-modal-header>Quran Introduction</c-modal-header>
      <c-modal-close-button />
      <c-modal-body pb="2vw" px="1rem" pt="0">
        <c-simple-grid :columns="2">
          <c-box mx="1vw">
            <c-text fontWeight="bold">Heading</c-text>
            <c-select
              v-model="selectedIntroduction"
              class="filter-container custom-select"
            >
              <option
                v-for="(element, index) in introductionHeadings"
                :value="index"
                :key="`${element}-${index}`"
              >
                {{ element }}
              </option>
            </c-select>
          </c-box>
          <c-box mx="1vw">
            <c-text fontWeight="bold">Subheading</c-text>
            <c-select
              v-model="subIntroduction"
              class="filter-container custom-select"
            >
              <option
                v-for="(element, index) in introduction[
                  introductionHeadings[selectedIntroduction]
                ].map((el) => el.title)"
                :value="index"
                :key="`${element}-${index}`"
              >
                {{ element }}
              </option>
            </c-select></c-box
          >
        </c-simple-grid>
        <div />

        <c-text
          py="1vw"
          maxHeight="50vh"
          overflow="auto"
          border="1px solid #cdcdcd"
          p="1vw 2vw 1vw 2vw"
          mt="1vw"
          borderRadius="1vw"
          mb="2vw"
          textAlign="justify"
          v-html="
            introduction[introductionHeadings[selectedIntroduction]][
              subIntroduction
            ].content
          "
        ></c-text>
        <c-flex justify="space-between">
          <c-link
            textDecoration="underline"
            v-for="(toggle, index) in [
              { title: 'Previous', onClick: previous },
              { title: 'Next', onClick: next },
            ]"
            :key="index"
            @click="toggle.onClick"
            >{{ toggle.title }}</c-link
          >
        </c-flex>
      </c-modal-body>
    </c-modal-content>
    <c-modal-overlay />
  </c-modal>
</template>

<style>
.sub-heading {
  font-size: 1.5vw;
  text-decoration: underline;
}
.read-introduction-modal-content > section {
  min-width: 90vw;
}
</style>
<script>
import { CButton, CImage } from "@chakra-ui/vue";
import { mapGetters } from "vuex";

export default {
  name: "ReadIntroduction",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  props: ["isOpen", "close"],
  data: function() {
    return {
      selectedIntroduction: "0",
      subIntroduction: "0",
      heading: undefined,
      subHeading: undefined,
    };
  },
  computed: {
    ...mapGetters(["introduction"]),
    introductionHeadings() {
      return Object.keys(this.introduction);
    },
  },
  methods: {
    previous() {
      if (this.subIntroduction === "0") {
        const totalSubIntroductions = this.introduction[
          this.introductionHeadings[`${Number(this.selectedIntroduction) - 1}`]
        ].length;
        this.selectedIntroduction =
          this.selectedIntroduction === "0"
            ? "0"
            : `${Number(this.selectedIntroduction) - 1}`;
      } else {
        this.subIntroduction = `${Number(this.subIntroduction) - 1}`;
      }
    },
    next() {
      const totalSubIntroductions = this.introduction[
        this.introductionHeadings[Number(this.selectedIntroduction)]
      ].length;
      if (Number(this.subIntroduction) < totalSubIntroductions - 1) {
        this.subIntroduction = `${Number(this.subIntroduction) + 1}`;
      } else {
        this.subIntroduction = "0";
        this.selectedIntroduction = `${Number(this.selectedIntroduction) + 1}`;
      }
    },
  },
  watch: {
    selectedIntroduction(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.subIntroduction = "0";
      }
    },
  },
  created: function() {
    this.heading = this.introductionHeadings[0];
    this.subHeading = this.introduction[this.introductionHeadings[0]][0].title;
  },
  components: {
    CButton,
    CImage,
  },
};
</script>
