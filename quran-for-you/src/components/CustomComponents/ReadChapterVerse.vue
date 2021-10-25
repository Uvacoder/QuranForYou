<template>
  <mq-layout mq="desktop">
    <c-flex class="container">
      <c-flex justify="space-between" mb="1vw">
        <c-heading class="heading">Quran Chapter 1</c-heading>
        <c-flex>
          <c-flex align="center" justify="center" mx="2">
            <c-switch color="black" size="lg" />
          </c-flex>
          <c-flex class="sbd-container">
            <c-link @click="shareOpen">
              Share
            </c-link>
            <ShareModal :isOpen="isShareOpen" :close="shareClose" />
            <c-image :src="require(`@/assets/share.png`)" class="icons-sbd" />
          </c-flex>
          <c-flex class="sbd-container">
            <c-link as="router-link" to="/">
              Bookmark
            </c-link>
            <c-image
              :src="require(`@/assets/bookmark.png`)"
              class="icons-sbd"
            />
          </c-flex>
          <c-flex class="sbd-container">
            <c-link @click="downloadOpen">
              Download
            </c-link>
            <DownloadModal :isOpen="isDownloadOpen" :close="downloadClose" />
            <c-image
              :src="require(`@/assets/download.png`)"
              class="icons-sbd"
            />
          </c-flex>
        </c-flex>
      </c-flex>
      <c-flex direction="column" w="100%">
        <c-flex w="100%">
          <c-flex direction="column" mx="2" w="25%">
            <c-flex w="100%"
              ><c-text class="filter-label">Chapters</c-text
              ><c-icon name="chevron-down" size="1.35vw" color="black" mx="2"
            /></c-flex>
            <c-select
              class="filter-container custom-select"
              v-model="state.chapter"
            >
              <option
                v-for="(chapter, index) in state.allChapters"
                :value="chapter"
                :key="chapter + index"
              >
                {{ chapter }}
              </option>
            </c-select>
          </c-flex>
          <c-flex direction="column" mx="2" w="10%">
            <c-flex align="center"
              ><c-text class="filter-label">Verse No</c-text
              ><c-icon name="chevron-down" size="18px" color="black"
            /></c-flex>

            <c-select
              class="filter-container custom-select"
              v-model="state.verse"
            >
              <option
                v-for="(verse, index) in state.verses"
                :value="verse"
                :key="verse + index"
                >{{ verse }}</option
              >
            </c-select>
          </c-flex>
          <c-flex direction="column" mx="2" w="10%">
            <c-flex align="center"
              ><c-text class="filter-label">Language</c-text
              ><c-icon name="chevron-down" size="18px" color="black"
            /></c-flex>

            <c-select
              class="filter-container custom-select"
              v-model="state.language"
            >
              <option
                v-for="(language, index) in state.languages"
                :value="language"
                :key="language + index"
                >{{ language }}</option
              >
            </c-select>
          </c-flex>
          <c-flex direction="column" mx="2" w="10%">
            <c-flex align="center"
              ><c-text class="filter-label">Font Size</c-text
              ><c-icon name="chevron-down" size="18px" color="black"
            /></c-flex>

            <c-select
              class="filter-container custom-select"
              v-model="state.fontSize"
            >
              <option
                v-for="fontSize in state.fontSizes"
                :value="fontSize.value"
                :key="fontSize.value"
                >{{ fontSize.font }}</option
              >
            </c-select>
          </c-flex>
          <c-flex direction="column" mx="2" w="15%">
            <c-flex align="center"
              ><c-text class="filter-label">View Options</c-text
              ><c-icon name="chevron-down" size="18px" color="black"
            /></c-flex>

            <c-select
              class="filter-container custom-select"
              v-model="state.view"
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
          <c-flex direction="column" mx="2" w="42.5%">
            <c-text class="filter-label">Search</c-text>
            <c-flex class="filter-container" w="100%" p="3">
              <c-input-group w="100%">
                <c-input-left-element
                  ><c-image :src="require(`@/assets/search.png`)" size="16px"
                /></c-input-left-element>
                <c-input type="text" placeholder="Search chapter, verse" />
              </c-input-group>
            </c-flex>
          </c-flex>
        </c-flex>
        <c-flex my="1vw" w="100%">
          <c-flex direction="column" mx="2" w="80%">
            <c-flex class="filter-container" w="100%">
              <c-text class="filter-value">Audio</c-text>
              <c-text class="filter-value"
                >{{ state.language }}
                <c-icon name="chevron-down" size="18px" color="black"
              /></c-text>
              <c-icon
                name="chevron-right"
                bg="black"
                borderRadius="50%"
                color="white"
                size="25px"
              />
              <c-divider border-color="gray.500" w="75%" borderWidth="5px" />
            </c-flex>
          </c-flex>
          <c-flex direction="column" mx="2" w="20%">
            <c-flex class="filter-container" w="100%">
              <c-text class="filter-value">Read Introduction</c-text>
            </c-flex>
          </c-flex>
        </c-flex>
      </c-flex>
      <c-flex direction="column" mt="1.25vw">
        <c-heading class="heading">Verse {{ state.verse }}</c-heading>
        <c-flex w="100%">
          <c-flex
            direction="column"
            py="1vw"
            :style="
              state.view === 'parallel' ? { width: '50%' } : { width: '100%' }
            "
          >
            <c-text fontSize="24px" fontWeight="semibold" py="0.5vw">
              {{ state.language }}
            </c-text>
            <c-text :fontSize="state.fontSize">
              <span
                v-for="(verse, index) in this.chapter.verses"
                :key="index + verse.English_text"
              >
                <strong> {{ index }} </strong>{{ verse.English_text }}</span
              >
            </c-text>
          </c-flex>
          <c-divider
            v-show="state.view === 'parallel'"
            orientation="vertical"
            borderWidth="0.35vw"
            borderColor="palettes.primary"
          />
          <c-flex
            direction="column"
            py="1vw"
            px="1.25vw"
            w="50%"
            v-show="state.view === 'parallel'"
          >
            <c-text fontSize="24px" fontWeight="semibold" py="0.5vw">
              AR
            </c-text>
            <c-text :fontSize="state.fontSize">
              <span
                v-for="(verse, index) in this.chapter.verses"
                :key="index + verse.Arabic_text"
              >
                <strong> {{ index }} </strong>{{ verse.Arabic_text }}</span
              >
            </c-text>
          </c-flex>
        </c-flex>
      </c-flex>

      <c-accordion :allow-toggle="true" mt="2vw">
        <c-accordion-item>
          <c-accordion-header px="0" my="1vw">
            <c-box flex="1" text-align="left">
              <c-heading class="heading">Commentary</c-heading>
            </c-box>
            <c-button fontSize="1.25vw" variant-color="white" color="black"
              >Hide <c-accordion-icon
            /></c-button>
          </c-accordion-header>
          <c-accordion-panel px="0">
            <c-text mt="1em" :fontSize="state.fontSize"
              >{{ state.commentary }}
            </c-text>
          </c-accordion-panel>
        </c-accordion-item>
      </c-accordion>
      <c-flex my="2vw" direction="column">
        <c-heading class="heading" my="1vw">Related Media</c-heading>
        <c-simple-grid :columns="3" :spacing="30">
          <Tile
            v-for="(media, index) in state.relatedMedia"
            v-bind:key="media.title + index"
            v-bind:image="media.image"
            v-bind:title="media.title"
            v-bind:subTitle="media.subTitle"
            v-bind:content="media.content"
          />
        </c-simple-grid>
      </c-flex>

      <c-flex class="subscribe-form-container">
        <SubscribeForm />
      </c-flex>
    </c-flex>
  </mq-layout>
</template>
<style>
.filter-label {
  font-size: 0.85vw;
  font-weight: 900;
  margin-bottom: 2px;
}
.filter-container {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  height: 4vw;
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
.icons-sbd {
  object-fit: contain;
  width: 1vw;
  height: 1vw;
  margin-left: 0.5vw;
}
.sbd-container {
  justify-content: center;
  margin-left: 0.75vw;
  margin-right: 0.75vw;
  align-items: center;
}

.custom-select {
  display: flex;
  outline: none;
  padding: 0;
  margin: 0;
  border-color: #fff;
}

.reading-select {
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
import { CFlex, CAccordionIcon } from "@chakra-ui/vue";
import SubscribeForm from "@/components/Desktopview/Layout/SubscribeForm.vue";
import Tile from "@/components/CustomComponents/Tile.vue";
import ShareModal from "@/components/CustomComponents/Modals/Share.vue";
import DownloadModal from "@/components/CustomComponents/Modals/Download.vue";

export default {
  name: "ReadingChapters",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  props: {
    chapterId: { type: Number },
    groupId: { type: String },
    chapter: { type: Object, default: {} },
  },
  data: function() {
    return {
      isShareOpen: false,
      isDownloadOpen: false,
      state: {
        fontSize: "18px",
        fontSizes: [
          { value: "16px", font: 16 },
          { value: "18px", font: 18 },
          { value: "20px", font: 20 },
          { value: "22px", font: 22 },
          { value: "24px", font: 24 },
          { value: "26px", font: 26 },
        ],
        language: "EN",
        languages: ["EN", "EN", "EN"],
        chapter: "Al-Fatihah The Cow",
        verse: "1 - 7",
        view: "paragraph",
        verses: ["1 - 7", "1 - 7", "1 - 7", "1 - 7"],
        allChapters: [
          "Al-Fatihah The Cow",
          "Al-Fatihah The Cow",
          "Al-Fatihah The Cow",
          "Al-Fatihah The Cow",
        ],
        commentary:
          "The best way to begin any task is in the name of God, the Lord, the Being who is the source of all blessings, and whose blessings and mercy are continually pouring upon His creation. To commence any undertaking in His name is to pray that God, in His infinite mercy, should come to one’s assistance and bring one’s work to a successful conclusion. This is man’s acknowledgement of the fact that he is God’s servant, and also brings divine assurance of success. The Quran has a special and characteristic way of expressing a believer’s inner sentiments in the most appropriate words. The invocation of God, in the opening chapter of the Quran, constitutes a supplication of this nature. The feelings which are naturally aroused in one after discovering the truth are expressed in these lines.",
        relatedMedia: [
          {
            image: "images/reading",
            title: "Title / Article",
            subTitle: "Sub-text",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ipsum lorem pretium convallis.",
          },
          {
            image: "images/reading",
            title: "Title / Article",
            subTitle: "Sub-text",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ipsum lorem pretium convallis.",
          },
          {
            image: "images/reading",
            title: "Title / Article",
            subTitle: "Sub-text",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ipsum lorem pretium convallis.",
          },
        ],
      },
    };
  },
  components: {
    CFlex,
    SubscribeForm,
    CAccordionIcon,
    ShareModal,
    Tile,
    DownloadModal,
  },
  mounted: function() {
    console.log(this.chapter);
  },

  methods: {
    shareOpen() {
      this.isShareOpen = true;
    },
    shareClose() {
      this.isShareOpen = false;
    },
    downloadOpen() {
      this.isDownloadOpen = true;
    },
    downloadClose() {
      this.isDownloadOpen = false;
    },
  },
};
</script>
