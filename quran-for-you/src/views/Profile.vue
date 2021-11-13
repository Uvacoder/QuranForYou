<template>
  <c-box>
    <Header />
    <c-box class="container" mt="1vw">
      <c-heading class="heading">Settings</c-heading>
      <c-box>
        <c-flex>
          <c-box mx="3vw" mb="3vw" w="20%">
            <c-text
              v-for="(i, index) in [
                { title: 'Account' },
                { title: 'Bookmarks' },
              ]"
              :key="index"
              my="2vw"
              py="1vw"
              px="5vw"
              :class="
                `settings-tab${
                  activeTab === i.title ? ' active-settings-tabs' : ''
                }`
              "
              borderRadius="3vw"
            >
              {{ i.title }}
            </c-text>
            <c-flex justify="flex-end">
              <button-outline
                text="Logout"
                :padding="'1.5vw'"
                :borderRadius="'3vw'"
                :click="logout"
              />
            </c-flex>
          </c-box>

          <c-box w="75%"><profile-details /></c-box>
        </c-flex>
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
import ButtonOutline from "../components/CustomComponents/ButtonOutline.vue";
import CustomButton from "../components/CustomComponents/CustomButton.vue";
import Header from "../components/CustomComponents/Header.vue";
import ProfileDetails from "../components/CustomComponents/ProfileDetails.vue";
export default {
  components: { Header, ProfileDetails, CustomButton, ButtonOutline },
  name: "Profile",
  data: function() {
    return { activeTab: "Account" };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
