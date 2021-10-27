<template>
  <mq-layout mq="desktop">
    <c-flex direction="column" py="0.5vw" :pr="pr || '0'" :pl="pl || '0'">
      <c-text fontSize="24px" fontWeight="semibold" py="0.5vw">
        {{ this.languageLabel }}
      </c-text>
      <c-text
        :fontSize="this.fontSize"
        style="text-align: justify;
  text-justify: inter-word;"
      >
        <span v-for="(verse, index) in this.verses" :key="index + verse[key]">
          <strong> {{ verse.id + ". " }} </strong>{{ verse[key] }}
          <div
            v-if="
              breaOnVerseGroups &&
                verseGroupList &&
                verseGroupList.includes(index)
            "
          >
            <br v-for="i in [1]" :key="'break' + i" />
          </div>
        </span>
      </c-text>
    </c-flex>
  </mq-layout>
</template>

<script>
export default {
  name: "VerseContent",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  props: [
    "verses",
    "fontSize",
    "languageKey",
    "languageLabel",
    "verseGroupList",
    "pr",
    "pl",
  ],
  mounted: function() {
    console.log("Hello");
    console.log("langu: ", this.verseGroupList);
  },
  computed: {
    key: function() {
      return this.languageKey;
    },
    breaOnVerseGroups: function() {
      return this.verseGroupList && this.verseGroupList.length > 0;
    },
  },
};
</script>
