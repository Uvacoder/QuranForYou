<template>
  <c-box>
    <mq-layout mq="desktop">
      <c-modal
        :is-open="isOpen"
        :on-close="close"
        :closeOnOverlayClick="false"
        padding="5"
        size="xl"
      >
        <c-modal-content>
          <c-modal-header>DOWNLOAD</c-modal-header>
          <c-modal-close-button />
          <c-modal-body>
            <c-flex direction="column" mb="1vw">
              <c-text>JPEG</c-text>
              <c-divider border-color="gray.500" borderWidth="2px" />
              <c-text>PDF</c-text>
            </c-flex>
            <c-flex mb="2vw">
              <c-flex direction="column" mx="1" w="50%">
                <c-flex w="100%"
                  ><c-text class="filter-label">Chapters</c-text
                  ><c-icon
                    name="chevron-down"
                    size="1.35vw"
                    color="black"
                    mx="1"
                /></c-flex>
                <c-select
                  class="filter-container custom-select"
                  v-model="state.chapter"
                >
                  <option
                    v-for="chapter in state.allChapters"
                    v-bind:value="chapter"
                    v-bind:key="chapter"
                  >
                    {{ chapter }}
                  </option>
                </c-select>
              </c-flex>
              <c-flex direction="column" mx="1" w="25%">
                <c-flex align="center"
                  ><c-text class="filter-label">Verse No</c-text
                  ><c-icon name="chevron-down" size="18px" color="black"
                /></c-flex>

                <c-select
                  class="filter-container custom-select"
                  v-model="state.verse"
                >
                  <option
                    v-for="verse in state.verses"
                    v-bind:value="verse"
                    v-bind:key="verse"
                    >{{ verse }}</option
                  >
                </c-select>
              </c-flex>
              <c-flex direction="column" mx="1" w="25%">
                <c-flex align="center"
                  ><c-text class="filter-label">Language</c-text
                  ><c-icon name="chevron-down" size="18px" color="black"
                /></c-flex>

                <c-select
                  class="filter-container custom-select"
                  v-model="state.language"
                >
                  <option
                    v-for="language in state.languages"
                    v-bind:value="language"
                    v-bind:key="language"
                    >{{ language }}</option
                  >
                </c-select>
              </c-flex>
            </c-flex>
            <c-flex justify="center" pb="1vw">
              <CustomButton text="Download" padding="1" />
            </c-flex>
          </c-modal-body>
        </c-modal-content>
        <c-modal-overlay />
      </c-modal>
    </mq-layout>
    <mq-layout mq="mobile"> </mq-layout>
  </c-box>
</template>

<script>
import { CButton, CImage } from "@chakra-ui/vue";
import CustomButton from "@/components/CustomComponents/CustomButton.vue";

export default {
  name: "Download",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  props: ["isOpen", "close"],
  components: {
    CButton,
    CImage,
    CustomButton,
  },
  data: function() {
    return {
      state: {
        language: "EN",
        languages: ["EN", "EN", "EN"],
        chapter: "Al-Fatihah The Cow",
        verse: "1 - 7",
        verses: ["1 - 7", "1 - 7", "1 - 7", "1 - 7"],
        allChapters: [
          "Al-Fatihah The Cow",
          "Al-Fatihah The Cow",
          "Al-Fatihah The Cow",
          "Al-Fatihah The Cow",
        ],
      },
    };
  },
};
</script>
