<template>
  <vue-simple-suggest
    :list="getList"
    @focus="changeFocus"
    @blur="removeFocus"
    :filter-by-query="false"
    value-attribute="details_eng"
    display-attribute="details_eng"
    ref="suggestComponent"
    :debounce="500"
    :min-length="3"
    @request-start="onRequestStart"
    @request-done="onRequestDone"
    @request-failed="onRequestFailed"
    @suggestion-click="onSuggestClick"
    @select="onSuggestSelect"
    class="asdad"
    pattern="\w+"
    placeholder="Search chapter, verse"
  >
    <input
      type="text"
      :style="{
        backgroundColor: colorMode === 'dark' ? 'black' : 'white',
        color: colorMode === 'dark' ? 'white' : 'black',
      }"
    />
    <c-spinner
      v-if="loading"
      thickness="2px"
      speed="0.65s"
      empty-color="green.200"
      color="vue.500"
      size="md"
      position="absolute"
      right="2"
    />
    <template slot="misc-item-above" slot-scope="{ suggestions }">
      <!-- <div class="misc-item">
        <span>You're searching for '{{ query }}'.</span>
      </div> -->

      <template v-if="suggestions.length > 0">
        <!-- <div class="misc-item">
          <span>{{ suggestions.length }} suggestions are shown...</span>
        </div>
        <hr /> -->
      </template>
      <div class="misc-item" v-else-if="!loading">
        <span>No results</span>
      </div>
    </template>
    <div slot="suggestion-item" slot-scope="scope" display="block">
      <div>
        <span v-html="boldenSuggestion(scope)"></span>
      </div>
      <div>
        <c-text
          v-html="
            `${scope.suggestion.title_eng} Chapter ${scope.suggestion.chapter_id} Verse ${scope.suggestion.verse_number}`
          "
        />
      </div>
    </div>
    <hr />

    <div class="misc-item" slot="misc-item-below" v-if="loading">
      <span>Loading...</span>
    </div>
  </vue-simple-suggest>
</template>
<style>
@import "./styles.css";
</style>

<script>
import VueSimpleSuggest from "vue-simple-suggest";
import "vue-simple-suggest/dist/styles.css";
import { search } from "../../../apis";
import { CSpinner } from "@chakra-ui/vue";

export default {
  name: "Search",
  props: ["setFocus", "colorMode", "setChapterId"],
  components: { VueSimpleSuggest, CSpinner },
  data: function() {
    return { loading: false };
  },
  methods: {
    changeFocus() {
      this.setFocus(true);
    },
    removeFocus() {
      this.setFocus(false);
    },
    onSuggestClick(suggest, e) {
      console.log("Suggest click here: ", suggest);
      this.setChapterId(suggest.chapter_id);
    },
    onSuggestSelect(suggest) {
      console.log("Suggest here: ", suggest);
    },
    onRequestStart(value) {
      this.loading = true;
      console.log("Request started: ", value);
    },
    onRequestDone(e) {
      this.loading = false;
      console.log("Request done: ", e);
    },
    onRequestFailed(e) {
      this.loading = false;
      console.log("Request failed: ", e);
    },
    boldenSuggestion(scope) {
      if (!scope) return scope;
      const { suggestion, query } = scope;
      let result = suggestion.details_eng;
      if (!query) return result;
      const texts = query.split(/[\s-_/\\|\.]/gm).filter((t) => !!t) || [""];
      return result.replace(
        new RegExp("(.*?)(" + texts.join("|") + ")(.*?)", "gi"),
        "$1<b>$2</b>$3"
      );
    },
    getList(inputValue) {
      return new Promise((resolve, reject) => {
        search(inputValue, 0, 10).then((result) =>
          resolve(result.data.results)
        );
      });
    },
  },
};
</script>
