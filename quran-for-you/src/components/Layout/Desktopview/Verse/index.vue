<template>
  <mq-layout mq="desktop" style="margin-top:5px;">
    <c-flex direction="column" v-bind="mainStyles[colorMode]">
      <c-flex class="container">
        <div v-if="chapter !== undefined">
          <c-flex justify="space-between" mb="1vw">
            <c-heading class="heading"
              >Quran Chapter {{ chapter.chapter_id }}</c-heading
            >
            <c-flex>
              <c-flex align="center" justify="center" mx="2">
                <c-switch color="black" size="lg" @change="toggleColorMode" />
              </c-flex>
              <c-flex class="sbd-container">
                <c-link @click="shareOpen">
                  Share
                </c-link>
                <ShareModal :isOpen="isShareOpen" :close="shareClose" />
                <c-image
                  :src="require(`@/assets/share.png`)"
                  class="icons-sbd"
                />
              </c-flex>
              <c-flex class="sbd-container">
                <c-link>
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
                <DownloadModal
                  :isOpen="isDownloadOpen"
                  :close="downloadClose"
                />
                <c-image
                  :src="require(`@/assets/download.png`)"
                  class="icons-sbd"
                />
              </c-flex>
            </c-flex>
          </c-flex>
          <c-flex direction="column" w="100%">
            <c-flex w="100%">
              <c-flex
                :w="searchFocus ? '0%' : '80%'"
                :style="{
                  transition: searchFocus ? '0.85s' : '1s',
                }"
              >
                <c-flex
                  direction="column"
                  mx="2"
                  w="40%"
                  :style="{ display: searchFocus ? 'none' : 'flex' }"
                >
                  <c-flex w="100%"
                    ><c-text class="filter-label">Chapters</c-text
                    ><c-icon name="chevron-down" size="1.45vw" color="black"
                  /></c-flex>
                  <c-select
                    :class="[
                      colorMode == 'dark' ? 'box-dark' : '',
                      'filter-container custom-select',
                    ]"
                    v-model="filters.chapterIdFilters"
                  >
                    <option
                      v-for="(chapterFilter, index) in allChapters"
                      :value="chapterFilter.chapter_id"
                      :key="chapterFilter.chapter_id + index"
                    >
                      {{ chapterFilter.name_english }}
                    </option>
                  </c-select>
                </c-flex>
                <c-flex
                  direction="column"
                  mx="2"
                  :w="verse === 'all' ? '20%' : '15%'"
                  :style="{ display: searchFocus ? 'none' : 'flex' }"
                >
                  <c-flex align="center"
                    ><c-text class="filter-label">Verse No</c-text
                    ><c-icon name="chevron-down" size="1.45vw" color="black"
                  /></c-flex>

                  <c-select
                     :class="[
                      colorMode == 'dark' ? 'box-dark' : '',
                      'filter-container custom-select',
                    ]"
                    v-model="verse"
                  >
                    <option value="all">All</option>
                    <option
                      v-for="(verse_end, index) in chapter.verse_group_list"
                      :value="
                        index === 0
                          ? `1 - ${verse_end}`
                          : `${
                              chapter.verse_group_list[index - 1]
                            } - ${verse_end}`
                      "
                      :key="verse_end + index"
                      >{{
                        index === 0
                          ? `1 - ${verse_end}`
                          : `${
                              chapter.verse_group_list[index - 1]
                            } - ${verse_end}`
                      }}</option
                    >
                  </c-select>
                </c-flex>
                <c-flex
                  direction="column"
                  mx="2"
                  :w="verse === 'all' ? '20%' : '15%'"
                  :style="{ display: searchFocus ? 'none' : 'flex' }"
                >
                  <c-flex align="center"
                    ><c-text class="filter-label">Language</c-text
                    ><c-icon name="chevron-down" size="1.45vw" color="black"
                  /></c-flex>

                  <c-select
                     :class="[
                      colorMode == 'dark' ? 'box-dark' : '',
                      'filter-container custom-select',
                    ]"
                    v-model="filters.language"
                  >
                    <option
                      v-for="(language, index) in state.languages"
                      :value="language"
                      :key="language + index"
                      >{{ language }}</option
                    >
                  </c-select>
                </c-flex>
                <c-flex
                  direction="column"
                  mx="2"
                  :w="verse === 'all' ? '20%' : '15%'"
                  :style="{ display: searchFocus ? 'none' : 'flex' }"
                >
                  <c-flex align="center"
                    ><c-text class="filter-label">Font Size</c-text
                    ><c-icon name="chevron-down" size="1.45vw" color="black"
                  /></c-flex>

                  <c-select
                     :class="[
                      colorMode == 'dark' ? 'box-dark' : '',
                      'filter-container custom-select',
                    ]"
                    v-model="filters.fontSize"
                  >
                    <option
                      v-for="fontSize in state.fontSizes"
                      :value="fontSize.value"
                      :key="fontSize.value"
                      >{{ fontSize.font }}</option
                    >
                  </c-select>
                </c-flex>
                <c-flex
                  direction="column"
                  mx="2"
                  w="15%"
                  v-if="verse !== 'all'"
                  :style="{ display: searchFocus ? 'none' : 'flex' }"
                >
                  <c-flex align="center"
                    ><c-text class="filter-label">View Options</c-text
                    ><c-icon name="chevron-down" size="1.45vw" color="black"
                  /></c-flex>

                  <c-select
                     :class="[
                      colorMode == 'dark' ? 'box-dark' : '',
                      'filter-container custom-select',
                    ]"
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
              </c-flex>
              <c-flex
                direction="column"
                mx="2"
                :w="searchFocus ? '100%' : '20%'"
                :style="{ transition: searchFocus ? '0.2s' : '1s' }"
              >
                <c-text class="filter-label">Search</c-text>
                <c-flex
                  w="100%"
                  p="3"
                  :class="[
                    colorMode == 'dark' ? 'box-dark' : '',
                    'filter-container',
                  ]"
                >
                  <c-input-group w="100%">
                    <c-input-left-element
                      ><c-image
                        :src="require(`@/assets/search.png`)"
                        size="16px"
                    /></c-input-left-element>
                    <c-input
                      @focus.native="changeFocus"
                      @blur.native="removeFocus"
                      type="text"
                      placeholder="Search chapter, verse"
                    />
                  </c-input-group>
                </c-flex>
              </c-flex>
            </c-flex>
            <c-flex my="1vw" w="100%">
              <c-flex direction="column" mx="2" w="80%">
                <c-flex  :class="[
                      colorMode == 'dark' ? 'box-dark' : '',
                      'filter-container',
                    ]" w="100%">
                  <c-text class="filter-value">Audio</c-text>
                  <c-text class="filter-value">{{ filters.language }} </c-text>
                  <c-icon
                    name="chevron-right"
                    bg="black"
                    borderRadius="50%"
                    color="white"
                    size="25px"
                  />
                  <c-divider
                    border-color="gray.500"
                    w="75%"
                    borderWidth="5px"
                  />
                </c-flex>
              </c-flex>
              <c-flex direction="column" mx="2" w="20%">
                <c-flex  :class="[
                      colorMode == 'dark' ? 'box-dark' : '',
                      'filter-container',
                    ]" w="100%">
                  <c-text class="filter-value">Read Introduction</c-text>
                </c-flex>
              </c-flex>
            </c-flex>
          </c-flex>
          <c-flex direction="column" mt="1.25vw">
            <c-heading class="heading" v-if="verse !== 'all'"
              >Verse {{ verse }}</c-heading
            >

            <c-flex w="100%">
              <c-flex
                :style="
                  view === 'parallel' ? { width: '50%' } : { width: '100%' }
                "
              >
                <VerseContent
                  :verses="verses"
                  :fontSize="filters.fontSize"
                  :languageKey="'english_text'"
                  :languageLabel="'EN'"
                  :verseGroupList="
                    verse === 'all' ? this.chapter.verse_group_list : []
                  "
                  pr="1.25vw"
                />
              </c-flex>
              <c-divider
                v-show="view === 'parallel'"
                orientation="vertical"
                borderWidth="0.35vw"
                borderColor="palettes.primary"
              />
              <c-flex w="50%" v-show="view === 'parallel'">
                <VerseContent
                  :verses="verses"
                  :fontSize="filters.fontSize"
                  :languageKey="'arabic_text'"
                  :languageLabel="'AR'"
                  pl="1.25vw"
                />
              </c-flex>
            </c-flex>
          </c-flex>

          <c-accordion
            :allow-toggle="true"
            mt="2vw"
            v-if="this.chapter.commentary && this.chapter.commentary.length > 0"
          >
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
                <c-text
                  mt="1em"
                  :fontSize="filters.fontSize"
                  v-html="chapter.commentary[0].description"
                >
                </c-text>
              </c-accordion-panel>
            </c-accordion-item>
          </c-accordion>
          <c-flex my="2vw" direction="column" v-if="verse !== 'all'">
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
        </div>
      </c-flex>
    </c-flex>
  </mq-layout>
</template>
<style>
@import "./styles.css";
</style>
<script>
import { CFlex, CAccordionIcon } from "@chakra-ui/vue";
import SubscribeForm from "@/components/Layout/Desktopview/SubscribeForm.vue";
import Tile from "@/components/CustomComponents/Tile.vue";
import ShareModal from "@/components/CustomComponents/Modals/Share.vue";
import DownloadModal from "@/components/CustomComponents/Modals/Download.vue";
import Loading from "@/components/CustomComponents/Loading.vue";
import VerseContent from "@/components/CustomComponents/VerseContent/index.vue";
import { mapGetters } from "vuex";

export default {
  name: "Verse",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  props: ["chapter", "groupId"],

  data: function() {
    return {
      isShareOpen: false,
      isDownloadOpen: false,
      searchFocus: false,
      verse: "all",
      view: "paragraph",
      mainStyles: {
        dark: {
          bg: "black",
          color: "whiteAlpha.900",
        },
        light: {
          bg: "white",
          color: "gray.900",
        },
      },
      filters: {
        chapterIdFilters: this.chapter.chapter_id,
        fontSize: "16px",
        language: "EN",
      },
      state: {
        fontSizes: [
          { value: "16px", font: 16 },
          { value: "18px", font: 18 },
          { value: "20px", font: 20 },
          { value: "22px", font: 22 },
          { value: "24px", font: 24 },
          { value: "26px", font: 26 },
        ],
        languages: ["EN", "AR", "HI"],

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
    Loading,
    VerseContent,
  },
  computed: {
    ...mapGetters(["getChapterList"]),
    allChapters() {
      return this.getChapterList;
    },
    verses() {
      if (this.verse === "all") {
        return this.chapter.verses;
      } else {
        const indexes = this.verse.split(" - ");
        return this.chapter.verses.slice(
          Number(indexes[0]),
          Number(indexes[1]) + 1
        );
      }
    },
    colorMode() {
      return this.$chakraColorMode();
    },
    theme() {
      return this.$chakraTheme();
    },
    toggleColorMode() {
      return this.$toggleColorMode;
    },
  },
  watch: {
    verse(newVerse, oldVerse) {
      if (newVerse === "all") {
        this.view = "paragraph";
      }
    },
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
    changeFocus() {
      this.searchFocus = true;
    },
    removeFocus() {
      this.searchFocus = false;
    },
  },
};
</script>
