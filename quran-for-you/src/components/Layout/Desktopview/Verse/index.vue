<template>
  <c-box v-bind="mainStyles[colorMode]" mt="0.15vw">
    <c-box class="container">
      <c-flex justify="space-between" align="center">
        <c-heading class="heading"
          >Quran Chapter {{ chapter.chapter_id }}</c-heading
        >
        <share-download-bookmark />
      </c-flex>
      <read-introduction
        v-if="introduction && Object.keys(introduction).length > 0"
        :close="closeReadIntroduction"
        :isOpen="readIntroduction"
      />
      <mq-layout mq="desktop" style="margin-top:5px;">
        <c-flex direction="column">
          <c-flex>
            <div v-if="chapter !== undefined">
              <c-flex
                direction="column"
                w="100%"
                :style="{
                  backgroundColor: colorMode === 'dark' ? 'black' : 'white',
                  position: 'sticky',
                  top: '0',
                  paddingTop: '0.5vw',
                  zIndex: '10',
                }"
              >
                <c-flex
                  w="100%"
                  :justify="searchFocus ? 'flex-end' : 'space-evenly'"
                >
                  <c-flex
                    :w="searchFocus ? '0%' : '80%'"
                    :style="{
                      transition: '1s',
                    }"
                  >
                    <c-flex
                      direction="column"
                      mx="2"
                      w="40%"
                      :style="{ display: searchFocus ? 'none' : 'flex' }"
                    >
                      <c-flex w="100%">
                        <c-text class="filter-label">Chapters</c-text>
                        <c-icon
                          name="chevron-down"
                          size="1.45vw"
                          color="black"
                        />
                      </c-flex>
                      <c-select
                        :class="[
                          colorMode == 'dark' ? 'box-dark' : '',
                          'filter-container custom-select',
                        ]"
                        v-model="chapterIdFilters"
                      >
                        <option
                          v-for="(chapterFilter, index) in allChapters"
                          :value="String(chapterFilter.chapter_id)"
                          :key="`${chapterFilter.chapter_id}-${index}`"
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
                              ? `0 - ${verse_end}`
                              : `${chapter.verse_group_list[index - 1] +
                                  1} - ${verse_end}`
                          "
                          :key="`${verse_end}-${index}`"
                          >{{
                            index === 0
                              ? `0 - ${verse_end}`
                              : `${chapter.verse_group_list[index - 1] +
                                  1} - ${verse_end}`
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
                        v-model="language"
                      >
                        <option
                          v-for="(language, index) in Object.keys(languages)"
                          :value="language"
                          :key="`${language}-${index}`"
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
                        v-model="fontSize"
                      >
                        <option
                          v-for="(fontSize, index) in fontSizes"
                          :value="fontSize.value"
                          :key="`${fontSize.value}-${index}`"
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
                    :style="{
                      transition: '1s',
                      position: searchFocus ? 'relative' : 'relative',
                    }"
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
                      <search :setFocus="setFocus" :colorMode="colorMode" />
                    </c-flex>
                  </c-flex>
                </c-flex>
                <c-flex my="1vw" w="100%">
                  <c-flex
                    direction="column"
                    mx="2"
                    :w="
                      introduction && Object.keys(introduction).length > 0
                        ? '80%'
                        : '100%'
                    "
                  >
                    <c-flex
                      :class="[
                        colorMode == 'dark' ? 'box-dark' : '',
                        'filter-container',
                      ]"
                      w="100%"
                    >
                      <c-text class="filter-value">Audio</c-text>
                      <av-circle
                        style="width:80%"
                        :outline-width="0"
                        :outline-meter-space="5"
                        :playtime="true"
                        :cors-anonym="true"
                        :audio-src="audio"
                        :canv-class="'commentary-visual'"
                      ></av-circle>
                    </c-flex>
                  </c-flex>
                  <c-link
                    v-if="introduction && Object.keys(introduction).length > 0"
                    mx="2"
                    w="20%"
                    display="flex"
                    :class="[
                      colorMode === 'dark' ? 'box-dark' : '',
                      'filter-container filter-value',
                    ]"
                    @click="openReadIntroduction"
                  >
                    Read Introduction
                  </c-link>
                </c-flex>
                <hr
                  style="margin-top:0.5vw;border-width:2px;margin-bottom:0.5vw;z-index:100;"
                />
              </c-flex>
              <c-flex direction="column">
                <c-flex justify="space-between">
                  <c-heading
                    class="heading"
                    mb="0 !important"
                    v-if="verse !== 'all'"
                    >Verse {{ verse }}</c-heading
                  >
                </c-flex>
                <c-flex w="100%">
                  <c-flex
                    :style="
                      view === 'parallel' ? { width: '50%' } : { width: '100%' }
                    "
                  >
                    <VerseContent
                      :verses="verses"
                      :fontSize="fontSize"
                      :languageKey="`${languages[language]}_text`"
                      :languageLabel="language"
                      :verseGroupList="
                        verse === 'all' ? this.chapter.verse_group_list : []
                      "
                      :pr="view === 'parallel' ? '0' : '1.25vw'"
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
                      :fontSize="fontSize"
                      :languageKey="'arabic_text'"
                      :languageLabel="'AR'"
                      pl="1.25vw"
                      :content="'right'"
                    />
                  </c-flex>
                </c-flex>
              </c-flex>
              <commentary :commentary="commentary" :fontSize="fontSize" />
              <verse-quick-actions
                v-if="verse !== 'all'"
                :goToFullChapter="goToFullChapter"
                :goToBeginningOfSurah="goToBeginningOfSurah"
                :goToNextVerse="goToNextVerse"
                :goToPreviousVerse="goToPreviousVerse"
              />
              <c-flex
                mt="5vw"
                v-if="
                  verse !== 'all' && relatedMedia && relatedMedia.length > 0
                "
              >
                <related-media :relatedMedia="relatedMedia" :verse="verse" />
              </c-flex>
            </div>
          </c-flex>
        </c-flex>
      </mq-layout>
      <mq-layout mq="mobile">
        <c-flex
          direction="column"
          v-bind="mainStyles[colorMode]"
          v-if="chapter !== undefined"
        >
          <c-heading class="heading" mb="0 !important" v-if="verse !== 'all'"
            >Verse {{ verse }}</c-heading
          >
          <VerseContent
            :verses="verses"
            :fontSize="fontSize"
            :languageKey="`${languages[this.language]}_text`"
            :languageLabel="this.language"
            :verseGroupList="
              verse === 'all' ? this.chapter.verse_group_list : []
            "
            pr="1.25vw"
          />
          <commentary :commentary="commentary" :fontSize="fontSize" />
          <verse-quick-actions
            v-if="verse !== 'all'"
            :goToFullChapter="goToFullChapter"
            :goToBeginningOfSurah="goToBeginningOfSurah"
            :goToNextVerse="goToNextVerse"
            :goToPreviousVerse="goToPreviousVerse"
          />
          <c-flex
            mt="10vw"
            v-if="verse !== 'all' && relatedMedia && relatedMedia.length > 0"
          >
            <related-media :verse="verse" :relatedMedia="relatedMedia" />
          </c-flex>
        </c-flex>

        <view-options
          :close="closeViewOptionsModal"
          :show="showViewOptions"
          :fontSize="fontSize"
          :fontSizes="fontSizes"
          :languages="languages"
          :language="language"
          :verse="verse"
          :view="view"
          :colorMode="colorMode"
          :setFontSize="setFontSize"
        />
        <chapter-options
          :close="closeChapterOptionsModal"
          :show="showChapterOptions"
          :allChapters="allChapters"
          :chapterIdFilters="chapterIdFilters"
          :setChapterId="setChapterId"
          :verse_group_list="this.chapter.verse_group_list"
          :setVerse="setVerse"
          :verse="verse"
          :openReadIntroduction="openReadIntroduction"
          :setFocus="setFocus"
          :colorMode="colorMode"
        />
      </mq-layout>
      <subscribe-form />
    </c-box>
    <mq-layout mq="mobile">
      <c-simple-grid
        :columns="2"
        position="fixed"
        bottom="0"
        h="15vw"
        w="100%"
        class="bottom-nav-container"
        :backgroundColor="'white'"
      >
        <c-flex
          justify="center"
          align="center"
          borderRight="1px solid black"
          position="relative"
        >
          <c-image
            :src="require('@/assets/icons/book.png')"
            size="40%"
            objectFit="contain"
            position="absolute"
            zIndex="1000"
            left="2vw"/>
          <button-outline
            text="Chapters"
            :click="showChapterOptionsModal"
            :backgroundColor="'black !important'"
        /></c-flex>
        <c-flex justify="center" align="center" position="relative">
          <c-image
            :src="require('@/assets/icons/chapter.png')"
            size="40%"
            objectFit="contain"
            position="absolute"
            zIndex="1000"
            left="2vw"/><button-outline
            text="Options"
            :click="showViewOptionsModal"
        /></c-flex> </c-simple-grid
    ></mq-layout>
  </c-box>
</template>

<style>
@import "./styles.css";
</style>

<script>
import { CFlex, CAccordionIcon } from "@chakra-ui/vue";
import Tile from "@/components/CustomComponents/Tile.vue";
import ShareModal from "@/components/CustomComponents/Modals/Share.vue";
import DownloadModal from "@/components/CustomComponents/Modals/Download.vue";
import Loading from "@/components/CustomComponents/Loading.vue";
import VerseContent from "@/components/CustomComponents/VerseContent/index.vue";
import RelatedMedia from "../../../CustomComponents/RelatedMedia.vue";
import ShareDownloadBookmark from "../../../CustomComponents/ShareDownloadBookmark.vue";
import ReadIntroduction from "../../../CustomComponents/Modals/ReadIntroduction.vue";
import {
  FONT_SIZES,
  LANGUAGES,
  MAIN_STYLES,
} from "../../../../constants/index";
import { mapGetters } from "vuex";
import { getRelatedMedia } from "../../../../apis";
import Commentary from "../../../CustomComponents/Commentary.vue";
import ButtonOutline from "../../../CustomComponents/ButtonOutline.vue";
import CustomButton from "../../../CustomComponents/CustomButton.vue";
import ViewOptions from "../../MobileView/ViewOptions.vue";
import Search from "../../../CustomComponents/Search/Search.vue";
import VerseQuickActions from "../../../CustomComponents/VerseQuickActions.vue";
import ChapterOptions from "../../MobileView/ChapterOptions.vue";
import { updateParams } from "../../../../helper";
import SubscribeForm from "../../../CustomComponents/SubscribeForm.vue";

export default {
  name: "Verse",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  props: ["chapter", "groupId", "getChapter"],
  data: function() {
    return {
      showViewOptions: "closed",
      showChapterOptions: "closed",
      searchFocus: false,
      readIntroduction: false,
      verse: "all",
      view: "paragraph",
      mainStyles: MAIN_STYLES,
      chapterIdFilters: String(this.chapter.chapter_id),
      isLoadingRelatedMedia: false,
      relatedMedia: [],
      fontSize: "16px",
      language: "EN",
      fontSizes: FONT_SIZES,
      languages: LANGUAGES,
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
    ShareDownloadBookmark,
    VerseQuickActions,
    RelatedMedia,
    ButtonOutline,
    ReadIntroduction,
    ShareDownloadBookmark,
    Commentary,
    CustomButton,
    ViewOptions,
    Search,
    ChapterOptions,
    VerseQuickActions,
    ButtonOutline,
  },
  computed: {
    ...mapGetters(["getChapterList"]),
    ...mapGetters(["introduction"]),
    audio() {
      const audio =
        this.chapter.audio_file &&
        this.chapter.audio_file[this.verse.split(" - ")[1]];
      console.log(audio && audio.audio_arabic);

      return audio && audio.audio_arabic;
    },
    commentary() {
      try {
        if (this.verse === "all") {
          return {};
        }
        const retval = this.chapter.commentary.find(
          (el) => Object.keys(el)[0] === this.verse.split(" - ")[1]
        );
        const audioObject = this.chapter.commentary.find(
          (el) => Object.keys(el).includes("audio") && el.audio
        );

        return (retval && Object.keys(retval) > 0) ||
          (audioObject && Object.keys(audioObject) > 0)
          ? {
              content: retval ? retval[this.verse.split(" - ")[1]] : undefined,
              audio: audioObject ? audioObject.audio : undefined,
            }
          : {};
      } catch (error) {
        return [];
      }
    },
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
  },
  watch: {
    chapterIdFilters(newId, oldId) {
      this.verse = "all";
      this.getChapter(newId);
      updateParams(this.$router, {
        chapterId: newId,
      });
    },
    verse(newVerse, oldVerse) {
      updateParams(this.$router, {
        groupId: newVerse === "all" ? newVerse : newVerse.split(" - ")[1],
      });
      if (newVerse === "all") {
        this.view = "paragraph";
        this.relatedMedia = [];
      } else {
        this.isLoadingRelatedMedia = true;
        getRelatedMedia(this.chapterIdFilters, this.verse.split(" - ")[1])
          .then((result) => (this.relatedMedia = result.data))
          .then(() => (this.isLoadingRelatedMedia = false))
          .catch(() => (this.isLoadingRelatedMedia = false));
      }
    },
  },
  created() {
    updateParams(this.$router, {
      groupId: this.verse,
      chapterId: this.chapterIdFilters,
    });
  },

  methods: {
    setFontSize(value) {
      this.fontSize = value;
    },
    setFocus(value) {
      this.searchFocus = value;
    },
    setChapterId(id) {
      this.chapterIdFilters = id;
    },
    setVerse(id) {
      this.verse = id;
      this.showChapterOptions && this.closeChapterOptionsModal();
    },
    goToFullChapter() {
      this.verse = "all";
    },
    goToNextVerse() {
      const activeGroup = Number(this.verse.split(" - ")[1]);
      const indexOfActiveGroup = this.chapter.verse_group_list.indexOf(
        activeGroup
      );
      if (indexOfActiveGroup > -1) {
        this.verse = `${activeGroup + 1} - ${
          this.chapter.verse_group_list[indexOfActiveGroup + 1]
        }`;
      }
    },
    goToPreviousVerse() {
      const activeGroup = Number(this.verse.split(" - ")[0]) - 1;
      const indexOfActiveGroup = this.chapter.verse_group_list.indexOf(
        activeGroup
      );
      if (indexOfActiveGroup > -1) {
        this.verse = `${this.chapter.verse_group_list[indexOfActiveGroup - 1] +
          1} - ${activeGroup}`;
      }
    },
    goToBeginningOfSurah() {
      this.verse = `0 - ${this.chapter.verse_group_list[0]}`;
    },
    showChapterOptionsModal() {
      this.showChapterOptions = "open";
    },
    closeChapterOptionsModal() {
      this.showChapterOptions = "closed";
    },
    showViewOptionsModal() {
      this.showViewOptions = "open";
    },
    closeViewOptionsModal() {
      this.showViewOptions = "closed";
    },
    openReadIntroduction() {
      this.readIntroduction = true;
      this.showChapterOptions && this.closeChapterOptionsModal();
    },
    closeReadIntroduction() {
      this.readIntroduction = false;
    },
  },
};
</script>
