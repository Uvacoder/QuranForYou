<template>
  <c-box>
    <mq-layout mq="desktop">
      <c-modal
        :is-open="isOpen"
        :on-close="close"
        :closeOnOverlayClick="false"
        size="md"
        padding="5"
      >
        <c-modal-content>
          <c-modal-header>SHARE NOW</c-modal-header>
          <c-modal-close-button />
          <c-modal-body>
            <c-flex direction="column" padding="5">
              <c-simple-grid :columns="3" :spacing="10">
                <c-image
                  class="share-icon"
                  v-for="icon in [
                    'facebook.png',
                    'whatsapp.png',
                    'twitter.png',
                    'linkedin.png',
                    'pinterest.png',
                    'mail.png',
                  ]"
                  v-bind:src="require(`@/assets/share/${icon}`)"
                  v-bind:key="icon"
                />
              </c-simple-grid>
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
.share-icon {
  width: 5vw;
  height: 5vw;
  object-fit: contain;
  margin: auto;
  transition: 0.5s;
}
.share-icon:hover {
  transform: scale(1.25);
  cursor: pointer;
}
</style>
<script>
import { CButton, CImage } from "@chakra-ui/vue";

export default {
  name: "Share",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  props: ["isOpen", "close"],
  components: {
    CButton,
    CImage,
  },
};
</script>
