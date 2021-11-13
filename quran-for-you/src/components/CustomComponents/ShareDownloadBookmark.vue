<template>
  <c-box>
    <mq-layout mq="desktop">
      <c-flex>
        <c-flex
          align="center"
          justify="center"
          mx="2"
          class="toggle-color-mode"
        >
          <c-switch
            size="lg"
            @change="toggleColorMode"
            :isChecked="colorMode === 'dark'"
            color="grey.500"
          />
        </c-flex>
        <c-flex class="sbd-container">
          <c-link @click="shareOpen">
            Share
          </c-link>
          <share :isOpen="isShareOpen" :close="shareClose" />
          <c-image
            :src="require(`@/assets/share.svg`)"
            class="icons-sbd"
            :filter="
              colorMode === 'dark'
                ? 'invert(100%) sepia(100%) saturate(0%) hue-rotate(357deg) brightness(104%) contrast(104%)'
                : 'invert(0%) sepia(6%) saturate(7500%) hue-rotate(328deg) brightness(94%) contrast(106%);'
            "
          />
        </c-flex>
        <c-flex class="sbd-container">
          <c-link>
            Bookmark
          </c-link>
          <c-image
            :src="require(`@/assets/bookmark.svg`)"
            class="icons-sbd"
            :filter="
              colorMode === 'dark'
                ? 'invert(100%) sepia(100%) saturate(0%) hue-rotate(357deg) brightness(104%) contrast(104%)'
                : 'invert(0%) sepia(6%) saturate(7500%) hue-rotate(328deg) brightness(94%) contrast(106%);'
            "
          />
        </c-flex>
        <c-flex class="sbd-container">
          <c-link @click="downloadOpen">
            Download
          </c-link>
          <download :isOpen="isDownloadOpen" :close="downloadClose" />
          <c-image :src="require(`@/assets/download.png`)" class="icons-sbd" />
        </c-flex>
      </c-flex>
    </mq-layout>
    <mq-layout mq="mobile">
      <c-flex align="center" justify="center">
        <c-switch
          size="sm"
          @change="toggleColorMode"
          :isChecked="colorMode == 'dark'"
        />
        <c-flex class="sbd-container">
          <c-link @click="shareOpen">
            <c-image
              :src="require(`@/assets/share.svg`)"
              class="icons-sbd"
              :filter="
                colorMode === 'dark'
                  ? 'invert(100%) sepia(100%) saturate(0%) hue-rotate(357deg) brightness(104%) contrast(104%)'
                  : 'invert(0%) sepia(6%) saturate(7500%) hue-rotate(328deg) brightness(94%) contrast(106%);'
              "
            />
          </c-link>
          <share :isOpen="isShareOpen" :close="shareClose" />
        </c-flex>
        <c-flex class="sbd-container">
          <c-link>
            <c-image
              :src="require(`@/assets/bookmark.svg`)"
              class="icons-sbd"
              :filter="
                colorMode === 'dark'
                  ? 'invert(100%) sepia(100%) saturate(0%) hue-rotate(357deg) brightness(104%) contrast(104%)'
                  : 'invert(0%) sepia(6%) saturate(7500%) hue-rotate(328deg) brightness(94%) contrast(106%);'
              "
            />
          </c-link>
        </c-flex>
        <c-flex class="sbd-container">
          <c-link @click="downloadOpen">
            <c-image
              :src="require(`@/assets/download.png`)"
              class="icons-sbd"
            />
          </c-link>
          <download :isOpen="isDownloadOpen" :close="downloadClose" />
        </c-flex>
      </c-flex>
    </mq-layout>
  </c-box>
</template>

<script>
import Download from "./Modals/Download.vue";
import Share from "./Modals/Share.vue";
export default {
  components: { Share, Download },
  name: "ShareDownloadBookmark",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  computed: {
    colorMode() {
      return this.$chakraColorMode();
    },
    toggleColorMode() {
      return this.$toggleColorMode;
    },
  },
  data: function() {
    return { isShareOpen: false, isDownloadOpen: false };
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
