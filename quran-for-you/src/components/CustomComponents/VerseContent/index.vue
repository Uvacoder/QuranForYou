<template>
  <mq-layout mq="desktop">
    <c-flex
      direction="column"
      py="0.5vw"
      :pr="pr || '0'"
      :pl="pl || '0'"
      h="100%"
    >
      <c-text
        fontSize="24px"
        fontWeight="semibold"
        py="0.5vw"
        :align="content === 'right' ? 'right' : 'left'"
      >
        {{ this.languageLabel }}
      </c-text>
      <c-text :fontSize="this.fontSize" h="95%">
        <c-flex
          v-for="(verse, index) in this.verses"
          :key="index + verse[key]"
          :justify="content === 'right' ? 'flex-end' : 'flex-start'"
          mb="1vw"
        >
          <strong v-if="content !== 'right'" style="margin-right:0.5vw;">
            {{ verse.id + ". " }} </strong
          ><c-text
            :style="{
              textAlign: content === 'right' ? 'right' : 'justify',
              textJustify: 'inter-word',
            }"
            >{{ verse[key] }}</c-text
          ><strong v-if="content === 'right'" style="margin-left:0.5vw;">
            {{ verse.id }}
          </strong>
        </c-flex>
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
    "content",
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
