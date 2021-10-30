<template>
  <mq-layout mq="desktop" style="width:100%;">
    <c-flex
      direction="column"
      py="0.5vw"
      :pr="pr || '0'"
      :pl="pl || '0'"
      h="100%"
    >
      <c-flex justify="space-between">
        <c-text
          fontSize="24px"
          fontWeight="semibold"
          py="0.5vw"
          :align="content === 'right' ? 'right' : 'left'"
          textDecoration="underline"
        >
          {{ this.languageLabel }}
        </c-text>
        <!-- <CustomButton text="Read Commentary" padding="0.25vw" fontSize="1vw" /> -->
      </c-flex>
      <c-text
        :style="{
          textAlign: content === 'right' ? 'right' : 'justify',
          textJustify: 'inter-word',
        }"
        :fontSize="fontSize"
      >
        <span
          v-for="(verse, index) in this.verses"
          :key="index + verse[key]"
          :justify="content === 'right' ? 'flex-end' : 'flex-start'"
        >
          <strong v-if="content !== 'right'" style="margin-right:0.1vw;">
            {{ verse.id }} </strong
          ><span>{{ verse[key] }}</span
          ><strong v-if="content === 'right'" style="margin-left:0.5vw;">
            {{ verse.id }}
          </strong>
          <div
            v-if="verseGroupList.includes(index)"
            style="margin-bottom:1vw;"
          />
        </span>
      </c-text>
    </c-flex>
  </mq-layout>
</template>

<script>
import CustomButton from "@/components/CustomComponents/CustomButton.vue";

export default {
  name: "VerseContent",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    CustomButton,
  },
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
    console.log("Hello: ", this.verseGroupList);
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
