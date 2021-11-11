<template>
  <c-box>
    <c-modal
      :is-open="isOpen"
      :on-close="close"
      :closeOnOverlayClick="false"
      size="md"
    >
      <c-modal-content>
        <c-modal-header>SHARE NOW</c-modal-header>
        <c-modal-close-button />
        <c-modal-body>
          <c-simple-grid :columns="3" :spacing="10" px="2vw" pb="1vw">
            <ShareNetwork
              class="share-icon"
              v-for="icon in [
                'facebook',
                'whatsapp',
                'twitter',
                'linkedin',
                'pinterest',
                'email',
              ]"
              v-bind:style="{
                'background-image': `url(${require(`@/assets/share/${icon}.png`)})`,
              }"
              style="background-size:contain;"
              v-bind:key="icon"
              v-bind:network="icon"
              v-bind:url="url"
              title="QuranForYou"
              description="Read Chapter"
              quote="Read Quran"
              hashtags="quran,quranforyou"
            ></ShareNetwork>
          </c-simple-grid>
        </c-modal-body>
      </c-modal-content>
      <c-modal-overlay />
    </c-modal>
  </c-box>
</template>

<style>
.share-icon {
  object-fit: contain;
  margin: auto;
}
@media only screen and (max-width: 600px) {
  .share-icon {
    width: 15vw;
    height: 15vw;
  }
}

@media only screen and (min-width: 601px) {
  .share-icon {
    width: 3.5vw;
    height: 3.5vw;
    transition: 0.5s;
  }
  .share-icon:hover {
    transform: scale(1.25);
    cursor: pointer;
  }
}
</style>
<script>
import { CButton, CImage } from "@chakra-ui/vue";
import { ShareNetwork } from "vue-social-sharing";

export default {
  name: "Share",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  props: ["isOpen", "close"],
  components: {
    CButton,
    CImage,
    ShareNetwork,
  },
  computed: {
    url() {
      return window.location.href;
    },
  },
};
</script>
