<template>
  <c-box>
    <mq-layout mq="desktop">
      <c-modal :is-open="isOpen" :on-close="close" :closeOnOverlayClick="false" size="xs">
        <c-modal-content>
          <c-modal-header class="heading" textTransform="uppercase" my="1vw"
            >Share Now</c-modal-header
          >
          <c-modal-close-button />
          <c-modal-body p="1vh" my="1vh">
            <c-flex direction="column" justify="center" align="space-between" pl="3vh">
              <c-simple-grid :columns="3" :spacing="5">
                <c-image
                  :src="require(`@/assets/share/facebook.png`)"
                  size="10vh"
                />
                <c-image
                  :src="require(`@/assets/share/whatsapp.png`)"
                  size="10vh"
                />
                <c-image
                  :src="require(`@/assets/share/twitter.png`)"
                  size="10vh"
                />
                <c-image
                  :src="require(`@/assets/share/linkedin.png`)"
                  size="10vh"
                />
                <c-image
                  :src="require(`@/assets/share/pinterest.png`)"
                  size="10vh"
                />
                <c-image
                  :src="require(`@/assets/share/mail.png`)"
                  size="10vh"
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

<style></style>

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
