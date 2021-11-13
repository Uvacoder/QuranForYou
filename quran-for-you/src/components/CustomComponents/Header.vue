<template>
  <c-box>
    <mq-layout mq="desktop" style="height:100%; width:100%">
      <c-flex
        align="center"
        bg="palettes.background"
        boxShadow="md"
        width="100%"
        h="10vh"
        justify="space-between"
        px="5"
      >
        <c-flex align="center">
          <c-heading fontWeight="400">Logo</c-heading>
          <c-box
            mx="2vw"
            v-for="(i, index) in [
              { title: 'Home', route: '/' },
              {
                title: 'Read Quran',
                route: `/chapters/${chapterId || '1'}/verse/all`,
              },
              { title: 'Articles', route: '/articles' },
            ]"
            :key="index"
          >
            <c-link
              :class="
                `link ${i.title === currentRouteName ? 'active-link' : ''}`
              "
              as="router-link"
              :to="i.route"
            >
              {{ i.title }}
            </c-link>
          </c-box>
        </c-flex>
        <c-flex align="center">
          <c-link mr="2vw" @click="routeToProfile" v-if="isUserLoggedIn">
            <c-image
              class="profile-header-icon"
              :src="require(`@/assets/icons/profile.png`)"
              w="3vw"
              h="3vw"
          /></c-link>
          <custom-button
            :fontSize="'1.25vw !important'"
            :click="!isUserLoggedIn ? handleGoToLogin : logout"
            :text="!isUserLoggedIn ? 'Login' : 'Logout'"
            :width="'12vw !important'"
            :height="'3vw !important'"
          />
        </c-flex>
      </c-flex>
    </mq-layout>
    <mq-layout mq="mobile">
      <c-flex
        bg="palettes.background"
        boxShadow="md"
        w="100%"
        h="15vw"
        mb="1"
        justify="space-between"
        align="center"
        px="3"
      >
        <c-flex align="center">
          <c-image :src="require(`@/assets/hamburger.png`)" size="50%" />
          <c-heading fontWeight="400">Logo</c-heading></c-flex
        >
        <c-flex
          ><custom-button
            fontSize="2.5vw !important"
            :click="handleGoToLogin"
            :padding="'2vw 6vw !important'"
            text="Login"
        /></c-flex>
      </c-flex>
    </mq-layout>
  </c-box>
</template>

<script>
import { CFlex, CHeading, CImage } from "@chakra-ui/vue";
import { mapGetters } from "vuex";
import CustomButton from "./CustomButton.vue";

export default {
  name: "Header",
  components: {
    CFlex,
    CHeading,
    CustomButton,
    CImage,
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    ...mapGetters(["isUserLoggedIn", "chapterId"]),
    currentRouteName() {
      return this.$route.name;
    },
  },

  methods: {
    routeToProfile() {
      this.$router.push({
        name: "Profile",
      });
    },
    logout() {
      this.$store.dispatch("logout");
    },
    handleGoToLogin() {
      this.$router.push({
        name: "LoginPage",
      });
    },
    showToast() {
      this.$toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 10000,
        isClosable: true,
      });
    },
  },
};
</script>
