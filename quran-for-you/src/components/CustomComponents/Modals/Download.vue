<template>
  <c-box>
    <mq-layout mq="desktop">
      <c-modal
        :is-open="isOpen"
        :on-close="close"
        :closeOnOverlayClick="false"
        size="xl"
        padding="5"
      >
        <c-modal-content>
          <c-modal-header>DOWNLOAD</c-modal-header>
          <c-modal-close-button />
          <c-modal-body>
            <c-flex direction="column" padding="5">
              <c-simple-grid :columns="2" :spacing="50">
                <c-flex direction="column">
                  <c-text>JPEG</c-text>
                  <c-divider border-color="gray.500" borderWidth="2px" />
                  <c-text>PDF</c-text>
                </c-flex>
                <c-flex>
                  <c-flex direction="column" mx="1" w="15vw">
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
                  <c-flex direction="column" mx="1" w="8vw">
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
                  <c-flex direction="column" mx="1" w="8vw">
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
              </c-simple-grid>
            </c-flex>
            <c-flex justify="center" my="1vw">
              <CustomButton text="Download" padding="0" />
            </c-flex>
          </c-modal-body>
        </c-modal-content>
        <c-modal-overlay />
      </c-modal>
    </mq-layout>
    <mq-layout mq="mobile"> </mq-layout>
  </c-box>
</template>

<style>
.filter-label {
  font-size: 1vw;
  font-weight: 900;
}
.filter-container {
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  height: 1vw;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 1vw;
}
.filter-container > select {
  text-align: center;
  font-size: 1vw;
  font-weight: 900;
  padding-left: 0;
  padding-right: 0;
  height: 100%;
  border-radius: 1vw;
}
.filter-value {
  font-size: 1.15vw;
  font-weight: 600;
  text-align: center;
}

.custom-select {
  display: flex;
  outline: none;
  padding: 0;
  margin: 0;
  border-color: #fff;
}

.custom-select .css-1oh9bp8 {
  display: none;
}
</style>
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
